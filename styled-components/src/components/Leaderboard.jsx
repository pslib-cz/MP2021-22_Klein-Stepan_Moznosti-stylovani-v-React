import React, {useContext, useState } from 'react';

import styled , { css } from 'styled-components';
  import Placement from "./Placement";
  import {SFContext, RESET, CLEAR} from '../providers/SandwichFeastProvider';


  const arrSum = array =>
    array.reduce(
        (sum, num) => sum + (Array.isArray(num) ? arrSum(num) : num * 1),
        0
    );
 
    const LeaderboardStyle = styled.div`
    display: none;
    position: fixed;
    height: 100vh;
    top: 0;
    right: 0;
    width: 100%;
    background-color: #113A87;
    z-index: 50;
    ${(props) => {
      if(props.Show){
        return css`
        display: block;
        `;
      }
      else{
        return css`
        display: none;
        `;
      }
    }}
  
  
    `;
  
    const Content = styled.div`
    margin: 15px auto;
    max-width: 381px;
    `;
  
    const Placements = styled.div`
    height: 50vh;
    overflow-y: auto;
    `;
  
    const Btn = styled.div`
    width: 45%;
    padding: 3px 0px ;
    text-align: center;
    border: 2px solid rgb(255, 255, 255);
   margin-left: 5px;
    border-radius: 4px;
    background-color: #040E21;
    color: rgb(255, 255, 255);
    font-size: 20px;
    `;
  
    const Btns = styled.div`
    display: flex;
    justify-content: space-around;
    `;
  
    const Show = styled.div`
    display: block;
    `;
  
    const Line = styled.div`
    display: block;
    width: 100%;
    height: 2px;
    background-color: #fff;
    `;
  
    const Sum = styled.p`
    display: flex;
    justify-content: space-around;
    `;
  
    const LbBtn = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;
    `;
  
    const Svg = styled.svg`
    position: absolute;
    top: 40px;
    right: calc((100vw - 381px) * 0.5);
    z-index: 100;
    `;
  
   
  
    const Group = styled.g`
    transform: translate(-383.035px, -40px) ;
  
    `;
  
    const Rectangle1 = styled.rect`
  
    ${(props) => {
      if(props.cross){
        return css`
        transform: translate(385.043px, 44.075px) rotate(-45deg)  ;
        height:23px  ;
        fill: red  ;
        width: 2px ;
      
        `;
      }
      else{
        return css`
        transform: translate(382.035px, 49px)  ;
        height:14px  ;
        fill: #fff  ;
        width: 9.076px  ;
       
        
        `;
      }
    }}`;
  
    const Rectangle2 = styled.rect`
    width: 9.076px;
    height:23px;
    ${(props) => {
      if(props.cross){
        return css`
        transform: translate(388.882px, 20px) ;
        fill: rgba(0,0,0,0);
        
        `;
      }
      else{
        return css`
        transform: translate(388.882px, 40px);
        fill: #fff;  
  
        `;
      }
    }}`;
  
    const Rectangle3 = styled.rect`
    
    ${(props) => {
      
      if(props.cross){
        return css`
        transform: translate(401.307px, 42.661px) rotate(45deg)  ;
        height:23px  ;
        fill: red  ;
        width: 2px  ;
       
        `;
      }
      else{
        return css`
        transform: translate(395.958px, 54px) ;
        fill: #fff  ; 
        width: 9.076px   ;
       
      
        `;
      }
    }}`;

  const Leaderboard = () => {
    const [state, dispatch] = useContext(SFContext);
    const PlacementJson = state.tables.map((itm, idx) => 
        [{key:idx, index: idx, tableIndex: idx, suma: arrSum(itm)}][0]);
      const [lbBool,setLbBool] = useState(false)
    const PlacementGrp = PlacementJson.sort((a, b) => b.suma - a.suma).map((place,idx) => <Placement key={place.key} index={idx} tableIndex={place.tableIndex} suma={place.suma} />);
    let total = arrSum(state.tables); 
   

    return (
        <>
          <LbBtn  onClick={()=> setLbBool(!lbBool)}>
            <Svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23">
              <Group cross={lbBool} data-name="Group 3" transform="">
                <g id="Group_20" data-name="Group 20" transform="translate(1)">
                  <Rectangle1 cross={lbBool} style={{transition:" all 0.5s"}} data-name="Rectangle 3" />
                  <Rectangle2 cross={lbBool}style={{transition:" all 0.5s"}} data-name="Rectangle 4"/>
                  <Rectangle3 cross={lbBool} style={{transition:" all 0.5s"}} data-name="Rectangle 5" width="9.076" height="9" transform="translate(395.958 54)" fill="#fff"/>
                </g>
              </Group>
           </Svg>
          </LbBtn>
          <LeaderboardStyle Show={lbBool}>
           <Content >
           <h2 >Leaderboard:</h2>
            <Placements >
            {PlacementGrp}
            </Placements>
            <Line />
            <Sum><span>Celkem: </span><span></span><span>{total}</span></Sum>
            <Btns ><Btn  onClick={e =>
                    dispatch({type: RESET})
                }>Reset</Btn>&nbsp;
               <Btn  onClick={e =>
                    dispatch({type: CLEAR})
                }>Clear</Btn>
            </Btns>
           </Content>
        </LeaderboardStyle>
        </>
    );
}

export default Leaderboard;