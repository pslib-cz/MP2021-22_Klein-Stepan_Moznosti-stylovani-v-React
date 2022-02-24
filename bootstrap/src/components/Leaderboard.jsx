import React, {useContext, useState } from 'react';

  import Placement from "./Placement";
  import {SFContext, RESET, CLEAR} from '../providers/SandwichFeastProvider';
import { Button, Collapse, Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';


  const arrSum = array =>
    array.reduce(
        (sum, num) => sum + (Array.isArray(num) ? arrSum(num) : num * 1),
        0
    );
 


  const Leaderboard = () => {
    const [state, dispatch] = useContext(SFContext);
    const PlacementJson = state.tables.map((itm, idx) => 
        [{key:idx, index: idx, tableIndex: idx, suma: arrSum(itm)}][0]);
      const [lbBool,setLbBool] = useState(false)
    const PlacementGrp = PlacementJson.sort((a, b) => b.suma - a.suma).map((place,idx) => <Placement key={place.key} index={idx} tableIndex={place.tableIndex} suma={place.suma} />);
    let total = arrSum(state.tables); 
   
    return (

        <Navbar className='m-3' >
          <NavbarBrand></NavbarBrand>
          <NavbarToggler onClick={()=> setLbBool(!lbBool)}>
            Leaderboard
          </NavbarToggler>
          <Collapse isOpen={lbBool} navbar >
           <div >
           <h2 >Leaderboard:</h2>
            <div >
            {PlacementGrp}
            </div>
            <div/>
            <p><span>Celkem: </span><span></span><span>{total}</span></p>
            <div><Button  onClick={e =>
                    dispatch({type: RESET})
                }>Reset</Button>&nbsp;
               <Button onClick={e =>
                    dispatch({type: CLEAR})
                }>Clear</Button>
            </div>
           </div>
        </Collapse>
        </Navbar>
    );
}

export default Leaderboard;