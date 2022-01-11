   
import React, {useContext} from 'react';
import {SFContext} from '../providers/SandwichFeastProvider';
const arrSum = array =>
array.reduce(
    (sum, num) => sum + (Array.isArray(num) ? arrSum(num) : num * 1),
    0
);

const Placement = ({index, tableIndex, suma }) => {
    const [state, dispatch] = useContext(SFContext);
    const max = Math.max(...state.tables.map((itm, idx)=>arrSum(itm)));
    const min = Math.min(...state.tables.map((itm, idx)=>arrSum(itm)));
        const width = ()=>{
            if(max == 0)
                return 0;

            if(max==min)
            return 100;
            else
            return ( (suma ) / (max ))*100;

        }  ;

    return (
        <div className='placement'>
                <div style={{  
                 width: `${width()}%`,
                transition: "width 0.3s"
            }}  className='placement__bg'></div>
                <div  className='placement__content'><span>{index + 1}.</span>  <span className='placement__content__table'>Stůl: {tableIndex+1}</span> <span>{suma}</span></div>
                
        </div>
    );
}

export default Placement;