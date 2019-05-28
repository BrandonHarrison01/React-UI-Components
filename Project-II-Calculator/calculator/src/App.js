import React from 'react';
import './App.css';

import ActionButton from './components/ButtonComponents/ActionButton'
import Operators from './components/ButtonComponents/Operators'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'

const App = () => {
  return (
    <div className='App'>
      <CalculatorDisplay />
      <div className='Buttons'>
        <ActionButton />
        <Operators />
      </div>
    </div>
  );
};

export default App;
