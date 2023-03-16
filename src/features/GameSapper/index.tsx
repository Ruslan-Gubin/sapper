import { useMatchMedia } from "@/shared";
import { MouseEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SapperBoard } from "./components";
import { SapperInfoGame } from "./components/SapperInfoGame";
import { sapperAction, selectSapperAction } from "./libs";
import { GameSapperContext } from "./libs/context/GameSapperContext";
import { IFieldSapper } from "./libs/types/IFieldSapper";
import { createdSappersField } from "./libs/utils/createdField";


const GameSapper = () => {
  const { complexity } = useSelector(selectSapperAction)
  const [newField, setNewField] = useState(() => createdSappersField(complexity.sizeHorizont,complexity.sizeVertical,complexity.mine))
  const [flagCount, setFlagCount] = useState<number>(complexity.mine)
  const [gameProgress, setGameProgress] = useState<{progress: 'start' | 'game' | 'finish' | '', result: "win" | "loss" | ''}>({progress: 'start',  result: ''})
  const [fieldSrartId, setFieldStartId] = useState<number | null>(null)
  const [lostId, setLostId] = useState<number | null>(null)
  const [timeGame, setTimeGame] = useState(0)
  const { isDesktop, isMobile, isTablet } = useMatchMedia()
  const [sizeField, setSizeField] = useState<number>(50)
  const dispatch = useDispatch()


  useEffect(() => {
  if (gameProgress.progress === 'finish' && gameProgress.result === 'loss' || gameProgress.result === 'win') return;
    const closeFields = newField.filter(item => item.state !== 'transparent')
    const bombtArr = newField.filter(item => item.bomb)
 
       if (closeFields.length === bombtArr.length) {
         setGameProgress(() => ({progress: 'finish', result: 'win'}))
         dispatch(sapperAction.addResultProggres({time: timeGame, complexity: complexity.name}))
      
       }


    const goodResult = []
    newField.forEach(item => {
     if (item.bomb && item.state === 'flag') {
      goodResult.push(item)
     }
    })
    if (goodResult.length === complexity.mine) {
      setGameProgress(() => ({progress: 'finish', result: 'win'}))
      dispatch(sapperAction.addResultProggres({time: timeGame, complexity: complexity.name}))
    }
  }, [newField, complexity, gameProgress , dispatch, timeGame])

  useEffect(() => {
    if (gameProgress.progress === 'finish') return;
    if (gameProgress.progress === 'start') return;

    if (gameProgress.progress === 'game') {
      const tick = () => setTimeGame(prev => prev + 1000)
      const timer = setInterval(tick, 1000)

      return () => {
        clearInterval(timer)
      }
    }
  },[gameProgress.progress])

 
  const handleNewGame = () => {
    setNewField(() => createdSappersField(complexity.sizeHorizont,complexity.sizeVertical,complexity.mine))
    setGameProgress(() => ({progress: 'start', result: ''}))
    setLostId(() => null)
    setTimeGame(() => 0)
    setFlagCount(() => complexity.mine)
  }
  
   const handleClickField = (fieldId: number) => {
    if (gameProgress.progress === 'finish') return;
     
     const fieldTarget = newField?.find(item => item.id === fieldId)
     
     if (!fieldTarget) return;
     if (fieldTarget.state !== 'privat') return;
     
     
     if (gameProgress.progress === 'start' && fieldTarget.bomb) {
      setNewField(() => createdSappersField(complexity.sizeHorizont,complexity.sizeVertical,complexity.mine))
      setFieldStartId(fieldTarget.id)
    } else {
      setGameProgress(prev => ({...prev, progress: 'game'}))
        
        /** Если попал на мину */
        if (fieldTarget.bomb) {
          setGameProgress(() => ({progress: 'finish', result: 'loss'}))
          setFieldStartId(() => null)
          setLostId(fieldId)
        }
      
        const clearFieldArr: IFieldSapper[] = []
        
        const clearField = (field: IFieldSapper) => {
            if (field.state === 'transparent') return;
            clearFieldArr.push(field)
        }
        
        clearField(fieldTarget);
        
        while(clearFieldArr.length) {
          const field = clearFieldArr.pop()

          if (!field) continue;
          
          if (field.bomb) continue;

          /** Если на поле был флаг */
          if (field.state === 'flag') {
            setFlagCount(prev => prev + 1)
          }

          field.state = 'transparent'
          
          /** рекурсивно передаем в массив все ближайшие поля где нет сеседних мин */
          newField.forEach(item => {
                if (item.horizont === field.horizont + 1 && item.vertical === field.vertical && field.neighborsBonb === 0) {
                  clearField(item)
                }
                if (item.horizont === field.horizont - 1 && item.vertical === field.vertical && field.neighborsBonb === 0) {
                  clearField(item)
                }
                if (item.horizont === field.horizont && item.vertical === field.vertical + 1 && field.neighborsBonb === 0) {
                  clearField(item)
                }
                if (item.horizont === field.horizont  && item.vertical === field.vertical - 1 && field.neighborsBonb === 0) {
                  clearField(item)
                }
              })
            }
          
            setNewField(prev => [...prev])
          }  
          
        }

        useEffect(() => {
          if (isDesktop) {
            setSizeField(50)
          } else if (isTablet) {
            setSizeField(40)
          } else if (isMobile) {
            setSizeField(20)
          }
        },[isDesktop, isMobile, isTablet])
        
  useEffect(() => {
    if (gameProgress.progress === 'finish') { 
      const allMine = newField.filter(item => item.bomb)
      newField.forEach(item => {
        if (allMine.some(mine => mine.id === item.id)) {
          item.state = 'transparent'
        }
      })
      setNewField(prev => [...prev])
    }
  },[gameProgress])

        useEffect(() => {
    if (!fieldSrartId) return;
    handleClickField(fieldSrartId)
  },[fieldSrartId])

  const handleContextMenu = (e: MouseEvent<HTMLDivElement>, fieldId: number) => {
    e.preventDefault()
    e.stopPropagation()
    
    /** Если игра закончена то возвращаемся */
    if (gameProgress.result === 'win' || gameProgress.result === 'loss') return;
    
    const findField = newField.find(item => item.id === fieldId)
    
    /** Проверка поля */
    if (!findField)  return;
    if (findField?.state === 'transparent') return;
    
    if (findField.state === 'privat' && flagCount > 0) {
      findField.state = 'flag'
      setFlagCount(prev => prev - 1)
    } else if (findField.state === 'flag') {
      findField.state = 'question'
      setFlagCount(prev => prev + 1)
    } else if (findField.state === 'question') {
      findField.state = 'privat'
    }

    /** принудительное рендер */
    setNewField(prev => [...prev])
  }


  return (
    <GameSapperContext.Provider 
    value={{
      sizeField,
      handleNewGame,
      gameProgress,
      timeGame,
      flagCount,
      lostId,
      handleContextMenu,
      handleClickField,
      board: newField,
      widthBoard: complexity.sizeHorizont * sizeField,
      heightBoard: complexity.sizeVertical * sizeField 
      }}>
      <SapperInfoGame />
      <SapperBoard  />
    </GameSapperContext.Provider>
  );
};

export { GameSapper };