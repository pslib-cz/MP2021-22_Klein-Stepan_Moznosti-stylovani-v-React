import React, {useContext} from 'react';

  import Table from "./Table";
  import {SFContext, ADD_TABLE, REMOVE_TABLE} from '../providers/SandwichFeastProvider';

  const arrSum = array =>
    array.reduce(
        (sum, num) => sum + (Array.isArray(num) ? arrSum(num) : num * 1),
        0
    );

  const Tables = () => {
    const [state, dispatch] = useContext(SFContext);
    const tablesGrp = state.tables.map((itm, idx) => <Table key={idx} index={idx} suma={arrSum(itm)} />);
    return (
        <div className='tables'>
            <h1 className='tables__h1'>{state.name}</h1>
          
              
          
            <div className='tables__grp'>
                {tablesGrp}
            </div>
            <button className='tables__btn' onClick={e =>
                    dispatch({type: ADD_TABLE})
                }>+</button>
        </div>
    );
}

export default Tables;