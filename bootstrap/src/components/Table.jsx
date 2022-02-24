   
import React, {useContext} from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Button,
    Container,
    Row,
    Col
  } from 'reactstrap';
import Seat from "./Seat";
import {SFContext, ADD_SEAT, REMOVE_SEAT, REMOVE_SPECIFIC_TABLE} from '../providers/SandwichFeastProvider';

const Table = ({index, suma}) => {
    const [state, dispatch] = useContext(SFContext);
    //useEffect(()=>{setTotal()},[amount]);
    const seats = state.tables[index].map((itm, idx) => <Col className='p-0'><Seat key={idx} tblidx={index} seatidx={idx} value={itm} /></Col>);
    const seatGrp =seats; 

    return (
        <Card className='m-1' style={{flexGrow: 0, flexBasis: "280px"}}>
           <CardBody>
           <Row xs="3">
            
            <CardTitle style={{whiteSpace: "nowrap"}} tag="h3">Stůl: {index+1}</CardTitle>
            <CardText style={{fontSize: "20px",}}>{suma}</CardText>
            
            <Col xs="2">
            <Button onClick={e =>
                dispatch({type: REMOVE_SPECIFIC_TABLE, table: index})
            }>
                <svg xmlns="http://www.w3.org/2000/svg" width="19.414" height="19.414" viewBox="0 0 19.414 19.414">
                    <g id="Group_2" data-name="Group 2" transform="translate(-40.793 -142.793)">
                        <line id="Line_1" data-name="Line 1" x2="18" y2="18" transform="translate(41.5 143.5)" fill="none" stroke="red" strokeWidth="2"/>
                        <path id="Path_1" data-name="Path 1" d="M0,18,9.563,8.438,18,0" transform="translate(41.5 143.5)" fill="none" stroke="red" strokeWidth="2"/>
                    </g>
                </svg>

            </Button>
            </Col>
        </Row>
           </CardBody>
            <CardBody>
                <Row xs="7">{seatGrp}</Row>
                <div>
                    <Button className="m-1" onClick={e =>
                        dispatch({type: ADD_SEAT, table: index})
                    }>+</Button> 
                    <Button className="m-1" onClick={e =>
                        dispatch({type: REMOVE_SEAT, table: index})
                    }>-</Button>
                </div>
               
            </CardBody>
        </Card>
    );
}

export default Table;