import React, {useContext} from 'react';
import styled from 'styled-components';
  import Table from "./Table";
  import {SFContext, ADD_TABLE} from '../providers/SandwichFeastProvider';

  const TablesStyle = styled.div`
    margin: 0px;
    margin-bottom: 80px;
    margin-top: 20px;
    @media (min-width: 651px) {
       margin: 20px 15px;
       width: calc(67% - 30px);
       margin-bottom: 80px;

    }

    @media (min-width: 1041px) {
        margin: 20px 5px;
        width: calc(100% - 260px);
        margin-bottom: 80px;
       
    }
    `;

    const Grp = styled.div`
    width: 100%;

    @media (min-width: 1041px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    `;

    const H1 = styled.h1`
    width: 381px;
    margin: 0 auto;
    @media (min-width: 1041px) {
        margin: 5px;
    }
    `;

    const Btn  = styled.button`
    position: fixed;
    bottom: 10px;
    right: 10px;
    width: 55px;
    height: 55px;
    padding: 0px;
    text-align: center;
    border: 2px solid rgb(255, 255, 255);
   z-index: 20;
    border-radius: 50%;
    background-color: #113A87;
    color: rgb(255, 255, 255);
    font-size: 40px;

    `;


  const arrSum = array =>
    array.reduce(
        (sum, num) => sum + (Array.isArray(num) ? arrSum(num) : num * 1),
        0
    );

  const Tables = () => {
    const [state, dispatch] = useContext(SFContext);
    const tablesGrp = state.tables.map((itm, idx) => <Table key={idx} index={idx} suma={arrSum(itm)} />);


  


    return (
        <TablesStyle>
            <H1 >{state.name}</H1>
            <Grp>
                {tablesGrp}
            </Grp>
            <Btn  onClick={e =>
                    dispatch({type: ADD_TABLE})
                }>+</Btn>
        </TablesStyle>
    );
}

export default Tables;