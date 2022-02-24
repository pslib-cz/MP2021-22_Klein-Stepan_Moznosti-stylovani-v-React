import React, {useContext} from 'react';
import {
    Button
  } from 'reactstrap';
import {SFContext, ADD_BEER} from '../providers/SandwichFeastProvider';

const Seat = ({tblidx, seatidx, value}) => {
    const [, dispatch] = useContext(SFContext);
    return (
        <Button className='mb-1' onClick={e =>
            dispatch({type: ADD_BEER, table: tblidx, seat: seatidx})
        }>{value}</Button>
    );
}

export default Seat;