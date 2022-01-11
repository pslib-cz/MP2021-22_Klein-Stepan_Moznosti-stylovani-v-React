import React, {useContext} from 'react';

import {SFContext, ADD_BEER} from '../providers/SandwichFeastProvider';

const Seat = ({tblidx, seatidx, value}) => {
    const [, dispatch] = useContext(SFContext);
    return (
        <button className='seat' onClick={e =>
            dispatch({type: ADD_BEER, table: tblidx, seat: seatidx})
        }>{value}</button>
    );
}

export default Seat;