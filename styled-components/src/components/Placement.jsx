import styled , { css } from 'styled-components';
import React, {useContext} from 'react';
import {SFContext} from '../providers/SandwichFeastProvider';
const arrSum = array =>
array.reduce(
    (sum, num) => sum + (Array.isArray(num) ? arrSum(num) : num * 1),
    0
);
const PlacementDiv = styled.div`
position: relative;
width: 100%;
height: 30px;
margin: 10px 0;
`;

const Bg = styled.div`
position: absolute;
left: 0;
top: 0;
width:100% ;
height: 100% ;
background-color: #040E21;
border-radius: 4px;
z-index: 70;

`;
const Content = styled.div`
position: absolute;
left: 0;
top: 0;
width:100% ;
height: 100% ;
z-index: 100;
display: flex;
justify-content: space-around;

`;
const Table = styled.span`
margin-right: 20px;
`;
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
        <PlacementDiv>
                <Bg style={{  
                 width: `${width()}%`,
                transition: "width 0.3s"
            }}></Bg>
                <Content ><span>{index + 1}.</span>  <Table >Stůl: {tableIndex+1}</Table> <span>{suma}</span></Content>
                
        </PlacementDiv>
    );
}

export default Placement;