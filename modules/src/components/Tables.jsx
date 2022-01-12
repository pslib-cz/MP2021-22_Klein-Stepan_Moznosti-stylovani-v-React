import React, {useContext} from 'react';
import styles from "../styles/Tables.module.css";
  import Table from "./Table";
  import {SFContext, ADD_TABLE} from '../providers/SandwichFeastProvider';

  const arrSum = array =>
    array.reduce(
        (sum, num) => sum + (Array.isArray(num) ? arrSum(num) : num * 1),
        0
    );

  const Tables = () => {
    const [state, dispatch] = useContext(SFContext);
    const tablesGrp = state.tables.map((itm, idx) => <Table key={idx} index={idx} suma={arrSum(itm)} />);
    return (
        <div className={styles.tables}>
            <h1 className={styles.h1}>{state.name}</h1>
          
              
          
            <div className={styles.grp}>
                {tablesGrp}
            </div>
            <button className={styles.btn} onClick={e =>
                    dispatch({type: ADD_TABLE})
                }>+</button>
        </div>
    );
}

export default Tables;