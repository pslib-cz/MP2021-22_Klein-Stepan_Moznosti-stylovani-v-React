import React from 'react';
import './App.css';
//import Navigation from "./components/Navigation";
import Tables from "./components/Tables";
import Leaderboard from "./components/Leaderboard";
import {SFProvider} from "./providers/SandwichFeastProvider";

function App() {
  return (
    <div className="App">
      <SFProvider>
        <Leaderboard />
        
        <Tables />
      </SFProvider>
    </div>
  );
}

export default App;
