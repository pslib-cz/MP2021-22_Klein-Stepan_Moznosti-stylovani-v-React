   
import React, {useContext} from 'react';
import classNames from 'classnames';
import styles from "../styles/Table.module.css";
import Seat from "./Seat";
import {SFContext, ADD_SEAT, REMOVE_SEAT, REMOVE_SPECIFIC_TABLE} from '../providers/SandwichFeastProvider';

const Table = ({index, suma}) => {
    const [state, dispatch] = useContext(SFContext);
    //useEffect(()=>{setTotal()},[amount]);
    const seats = state.tables[index].map((itm, idx) => <Seat key={idx} tblidx={index} seatidx={idx} value={itm} />);
    
    let seatsL = seats;
    let splitedSeats = [];
    let condition = true
    let i = 0;
    while (condition) { 
        if(seatsL.length > 1){ 
              splitedSeats[i] = <div key={i} >{seatsL.splice(0,2)}</div>;
          }
        else if(seatsL.length == 1)
          {
              splitedSeats[i] = <div key={i} >{seatsL[0]}</div>;
              condition = false;
          }
         else{
              condition = false;
          }
        i++;
    }

 const seatGrp = splitedSeats; 

    return (
        <div className={styles.table}>
            <div className={styles.head}>
            <button  className={styles.removeBtn} onClick={e =>
                    dispatch({type: REMOVE_SPECIFIC_TABLE, table: index})
                }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19.414" height="19.414" viewBox="0 0 19.414 19.414">
                        <g id="Group_2" data-name="Group 2" transform="translate(-40.793 -142.793)">
                            <line id="Line_1" data-name="Line 1" x2="18" y2="18" transform="translate(41.5 143.5)" fill="none" stroke="red" strokeWidth="2"/>
                            <path id="Path_1" data-name="Path 1" d="M0,18,9.563,8.438,18,0" transform="translate(41.5 143.5)" fill="none" stroke="red" strokeWidth="2"/>
                        </g>
                    </svg>

                </button>
                <h3 className={styles.title}>Stůl: {index+1}</h3>
                <p  className={styles.sum} >{suma}</p>
               
            </div>
            <div  >
                <div className={styles.seats}>{seatGrp}</div>
                <div className={styles.btns}>
                    <button className={styles.plusMinusBtn} onClick={e =>
                        dispatch({type: ADD_SEAT, table: index})
                    }>+</button> 
                    <button  className={styles.plusMinusBtn} onClick={e =>
                        dispatch({type: REMOVE_SEAT, table: index})
                    }>-</button>
                </div>
               
           </div>
        </div>
    );
}

export default Table;