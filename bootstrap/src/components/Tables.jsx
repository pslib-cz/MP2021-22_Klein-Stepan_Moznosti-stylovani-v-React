import React, {useContext} from 'react';

  import Table from "./Table";
  import {SFContext, ADD_TABLE, REMOVE_TABLE} from '../providers/SandwichFeastProvider';
import { Button, CardGroup, Container } from 'reactstrap';

  const arrSum = array =>
    array.reduce(
        (sum, num) => sum + (Array.isArray(num) ? arrSum(num) : num * 1),
        0
    );

  const Tables = () => {
    const [state, dispatch] = useContext(SFContext);
    const tablesGrp = state.tables.map((itm, idx) => <Table key={idx} index={idx} suma={arrSum(itm)} />);
    return (
        <Container >
            <h1 >{state.name}</h1>
            <CardGroup>
                {tablesGrp}
            </CardGroup>
            <Button onClick={e =>
                    dispatch({type: ADD_TABLE})
                }>+</Button>
        </Container>
    );
}

export default Tables;