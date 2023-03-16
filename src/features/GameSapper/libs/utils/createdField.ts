import { IFieldSapper } from "../types/IFieldSapper"


/** Создание игрового поля */
const createdSappersField = (horizont: number, vertical: number, mine: number): IFieldSapper[] => {
const horizontCountField = horizont
const verticalCountField = vertical
const mineCount = mine

const newField: IFieldSapper[] = []

let id = 0

/** Создаем новое поле */
for (let i = 0; i < verticalCountField; i++) {
  for (let j = 0; j < horizontCountField; j++) {
    newField.push({id, vertical: i, horizont: j,  state: 'privat', bomb: false, neighborsBonb: 0})
    id++
  } 
}

/** раставляем мины */
for  (let i = 0; i < mineCount;) {

  const horizontRandom = Math.floor(Math.random() * horizontCountField)
  const verticalRandom = Math.floor(Math.random() * verticalCountField)

  const bombTarget = newField.find(item => item.horizont === horizontRandom && item.vertical === verticalRandom)

  if (bombTarget) {
    if (bombTarget?.bomb) {
      continue
    } else   {
      bombTarget.bomb = true

      newField.forEach(item => {
        if (item.horizont === horizontRandom +1 && item.vertical === verticalRandom && !item.bomb) {
          item.neighborsBonb++
        } 
         if (item.horizont === horizontRandom -1 && item.vertical === verticalRandom && !item.bomb) {
          item.neighborsBonb++
        } 
         if (item.horizont === horizontRandom  && item.vertical === verticalRandom +1 && !item.bomb) {
          item.neighborsBonb++
         }
         if (item.horizont === horizontRandom  && item.vertical === verticalRandom -1 && !item.bomb) {
          item.neighborsBonb++
         }
         if (item.horizont === horizontRandom +1  && item.vertical === verticalRandom -1 && !item.bomb) {
          item.neighborsBonb++
         }
         if (item.horizont === horizontRandom -1  && item.vertical === verticalRandom -1 && !item.bomb) {
          item.neighborsBonb++
         }
         if (item.horizont === horizontRandom +1  && item.vertical === verticalRandom +1 && !item.bomb) {
          item.neighborsBonb++
         }
         if (item.horizont === horizontRandom -1  && item.vertical === verticalRandom +1 && !item.bomb) {
          item.neighborsBonb++
         }
      })

    }
  }
    
  i++
}
/** Удаляем с мин счетчик соседних мин */
newField.forEach(item => {
  if (item.bomb) {
    item.neighborsBonb = 0
  }
})


return newField

}

export { createdSappersField }