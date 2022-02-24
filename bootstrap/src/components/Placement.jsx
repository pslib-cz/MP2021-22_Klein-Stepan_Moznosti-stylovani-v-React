   
import React, {useContext} from 'react';
import {SFContext} from '../providers/SandwichFeastProvider';
import {
    Progress,
  } from 'reactstrap';
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
        <div >
                
                <Progress className='mb-1' value={width()}>{index + 1}. Stůl: {tableIndex+1} {suma} </Progress>
                
        </div>
    );
}

export default Placement;