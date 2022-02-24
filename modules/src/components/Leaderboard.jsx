import React, {useContext, useState } from 'react';
import styles from "../styles/Leaderboard.module.css";
  import Placement from "./Placement";
  import {SFContext, RESET, CLEAR} from '../providers/SandwichFeastProvider';
import classNames from 'classnames';

  const arrSum = array =>
    array.reduce(
        (sum, num) => sum + (Array.isArray(num) ? arrSum(num) : num * 1),
        0
    );
 


  const Leaderboard = () => {
    const [state, dispatch] = useContext(SFContext);
    const PlacementJson = state.tables.map((itm, idx) => 
        [{key:idx, index: idx, tableIndex: idx, suma: arrSum(itm)}][0]);
      const [lbBool,setLbBool] = useState(false)
    const PlacementGrp = PlacementJson.sort((a, b) => b.suma - a.suma).map((place,idx) => <Placement key={place.key} index={idx} tableIndex={place.tableIndex} suma={place.suma} />);
    let total = arrSum(state.tables); 
   
    return (

        <>
          <div className={styles.lbBtn} onClick={()=> setLbBool(!lbBool)}>
            <svg className={classNames(styles.svg, {[styles.svgCross]: lbBool})} xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23">
              <g className={styles.group} data-name="Group 3" transform="">
                <g id="Group_20" data-name="Group 20" transform="translate(1)">
                  <rect className={styles.rectangle1} data-name="Rectangle 3" />
                  <rect className={styles.rectangle2} data-name="Rectangle 4"/>
                  <rect className={styles.rectangle3} data-name="Rectangle 5" width="9.076" height="9" transform="translate(395.958 54)" fill="#fff"/>
                </g>
              </g>
           </svg>
          </div>
          <div className={classNames(styles.leaderboard, {[styles.show]: lbBool})}>
           <div className={styles.content}>
           <h2 className={styles.title}>Leaderboard:</h2>
            <div className={styles.placements}>
            {PlacementGrp}
            </div>
            <div className={styles.line} />
            <p className={styles.sum}><span>Celkem: </span><span></span><span>{total}</span></p>
            <div className={styles.btns}><button className={styles.btn} onClick={e =>
                    dispatch({type: RESET})
                }>Reset</button>&nbsp;
               <button className={styles.btn} onClick={e =>
                    dispatch({type: CLEAR})
                }>Clear</button>
            </div>
           </div>
        </div>
        </>
    );
}

export default Leaderboard;