import { sapperAction, selectSapperAction } from "@/features/GameSapper/libs";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./OptionComplexity.module.scss";

const OptionComplexity = () => {
  const [customSize, setCustomSize] = useState<{x: number | null, y: number | null}>({x: null, y: null})
  const { complexity } = useSelector(selectSapperAction)
  const dispath = useDispatch()

  const handleChangeComplixity = (value: string) => {
    dispath(sapperAction.changeComplexity({value}))
  }
  

  return (
    <ul className={styles.root}>
      <li onClick={() => handleChangeComplixity('easy')} className={styles.option__item}>
        <div className={styles.checkbox}> 
       {complexity.name === 'easy' && <div className={styles.bird}></div> }
          </div>
        <button  className={styles.btn}>Easy</button>
        <small className={styles.description} style={{marginLeft: 15}}>
         <p>8</p>
         <span>X</span>
           <p>8</p>
          <span>mines: 10</span>
          </small>
      </li>
      <li onClick={() => handleChangeComplixity('normal')} className={styles.option__item}>
        <div className={styles.checkbox}> 
        {complexity.name === 'normal' && <div className={styles.bird}></div> }
        
        </div>
        <button className={styles.btn}>Normal</button>
        <p className={styles.description}>
         <span className={styles.text__down}>16</span>
          X
           <span className={styles.text__right}>16</span>
           <span>mines: 40</span>
          </p>
      </li>
      <li onClick={() => handleChangeComplixity('hard')} className={styles.option__item}>
        <div  className={styles.checkbox}> 
        {complexity.name === 'hard' && <div className={styles.bird}></div> }
         </div>
        <button onClick={() => handleChangeComplixity('hard')} className={styles.btn}>Hard</button>
        <p className={styles.description}>
         <span className={styles.text__down}>32</span>
         X
           <span className={styles.text__right}>16</span>
           <span>mines: 100</span>
          </p>
      </li>
      {/* <li className={styles.option__item}>
        <div className={styles.checkbox}> <div className={styles.bird}></div> </div>
        <button className={styles.btn}>Custom</button>
        <small className={styles.description}>
         <p>{customSize.x}</p>
         <span>X</span>
           <p>{customSize.y}</p>
          
          </small>
      </li> */}
      {/* <li className={styles.input__container}>
    <input className={styles.input} type="number" value={Number(customSize.x)}  onChange={(e) => setCustomSize((prev) => ({...prev, x: Number(e.target.value)}))} />
    <input className={styles.input} type="number" value={Number(customSize.y)}  onChange={(e) => setCustomSize((prev) => ({...prev, y: Number(e.target.value)}))} />

      </li> */}
    </ul>
  );
};

export { OptionComplexity };
