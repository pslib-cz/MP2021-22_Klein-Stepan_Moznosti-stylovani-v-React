import React, {useContext, useState } from 'react';

  import Placement from "./Placement";
  import {SFContext, RESET, CLEAR} from '../providers/SandwichFeastProvider';
import classNames from 'classnames';

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

        <>
          <div className='leaderboard_btn ' onClick={()=> setLbBool(!lbBool)}>
            <svg className={classNames("leaderboard_btn__svg", {"leaderboard_btn__svg--cross": lbBool})} xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23">
              <g id="Group_3" data-name="Group 3" transform="">
                <g id="Group_20" data-name="Group 20" transform="translate(1)">
                  <rect id="Rectangle_3" data-name="Rectangle 3" />
                  <rect id="Rectangle_4" data-name="Rectangle 4"/>
                  <rect id="Rectangle_5" data-name="Rectangle 5" width="9.076" height="9" transform="translate(395.958 54)" fill="#fff"/>
                </g>
              </g>
           </svg>
          </div>
          <div className={classNames("leaderboard", {leaderboard_show: lbBool})}>
           <div className='leaderboard__content'>
           <h2 className='leaderboard__title'>Leaderboard:</h2>
            <div className='leaderboard__placements'>
            {PlacementGrp}
            </div>
            <div className='leaderboard__line' />
            <p className='leaderboard__sum'><span>Celkem: </span><span></span><span>{total}</span></p>
            <div className='leaderboard__btns'><button className='leaderboard__btns__btn' onClick={e =>
                    dispatch({type: RESET})
                }>Reset</button>&nbsp;
               <button className='leaderboard__btns__btn' onClick={e =>
                    dispatch({type: CLEAR})
                }>Clear</button>
            </div>
           </div>
        </div>
        </>
    );
}

export default Leaderboard;