import { useState } from 'react';
import './App.css';

import {Board} from "./components/Board";
import { Display } from './components/Display';



function App() {
  const [value , Setvalue] = useState(new String("")) ;
  return (
    <div className="App">
      <span className='Display'><Display value = {value}/></span>
      <span className='Board'><Board value = {value} Setvalue = {Setvalue}/></span>
    </div>
  );
}

export default App;
