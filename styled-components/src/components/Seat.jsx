import React, {useContext} from 'react';

import {SFContext, ADD_BEER} from '../providers/SandwichFeastProvider';
import styled from 'styled-components';

const SeatBtn = styled.button`
    width: 42px;
    height: 42px;
    padding: 0px;
    text-align: center;
    border: 2px solid rgb(255, 255, 255);
    margin: 5.76px;
    margin-bottom: 15px;
    border-radius: 4px;
    background-color: #113A87;
    color: rgb(255, 255, 255);
    font-size: 20px;
`;



const Seat = ({tblidx, seatidx, value}) => {
    const [, dispatch] = useContext(SFContext);

    
    return (
        <SeatBtn onClick={e =>
            dispatch({type: ADD_BEER, table: tblidx, seat: seatidx})
        }>{value}</SeatBtn>
    );
}

export default Seat;