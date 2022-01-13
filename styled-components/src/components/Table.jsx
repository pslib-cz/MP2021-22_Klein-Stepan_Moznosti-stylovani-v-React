   
import React, {useContext} from 'react';

import styled from 'styled-components';
import Seat from "./Seat";
import {SFContext, ADD_SEAT, REMOVE_SEAT, REMOVE_SPECIFIC_TABLE} from '../providers/SandwichFeastProvider';




const TableStyle = styled.div`
position: relative;
width: 375px;
height: 220px;
border: 3px solid rgb(255, 255, 255);
border-radius: 15px;
color: rgb(255, 255, 255);
margin: 10px auto;
@media (min-width: 1041px) {
    margin: 5px;
}

`;

const Head = styled.div`
display: flex;
height: 32px;
justify-content: space-evenly;
margin-bottom: 20px;
margin-top: 5px;
`;

const RemoveBtn = styled.button`
padding: 0;
border: 0;
background: none;
`;

const Title = styled.h3`
font-size: 25px;
margin: 0;
margin-right: 200px; 
`;

const Sum = styled.p`
margin: 0;
font-size: 20px;
`;

const Seats = styled.div`
display: flex;
justify-content: space-evenly;
& div{
 display: flex;
 flex-direction: column;
}

`;

const Btns = styled.div`
display: inline-block;
position: absolute;
right: 5px;
bottom: 5px;
z-index: 10;
`;

const PlusMinusBtn = styled.button`
width: 38px;
height: 30px;
padding: 0px;
text-align: center;
border: 2px solid rgb(255, 255, 255);
margin-left: 5px;
border-radius: 4px;
background-color: #113A87;
color: rgb(255, 255, 255);
font-size: 20px;
`;


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
        <TableStyle >
            <Head >
            <RemoveBtn   onClick={e =>
                    dispatch({type: REMOVE_SPECIFIC_TABLE, table: index})
                }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19.414" height="19.414" viewBox="0 0 19.414 19.414">
                        <g id="Group_2" data-name="Group 2" transform="translate(-40.793 -142.793)">
                            <line id="Line_1" data-name="Line 1" x2="18" y2="18" transform="translate(41.5 143.5)" fill="none" stroke="red" strokeWidth="2"/>
                            <path id="Path_1" data-name="Path 1" d="M0,18,9.563,8.438,18,0" transform="translate(41.5 143.5)" fill="none" stroke="red" strokeWidth="2"/>
                        </g>
                    </svg>

                </RemoveBtn>
                <Title >Stůl: {index+1}</Title>
                <Sum  >{suma}</Sum>
               
            </Head>
            <div  >
                <Seats >{seatGrp}</Seats>
                <Btns >
                    <PlusMinusBtn  onClick={e =>
                        dispatch({type: ADD_SEAT, table: index})
                    }>+</PlusMinusBtn> 
                    <PlusMinusBtn  onClick={e =>
                        dispatch({type: REMOVE_SEAT, table: index})
                    }>-</PlusMinusBtn>
                </Btns>
               
           </div>
        </TableStyle>
    );
}

export default Table;