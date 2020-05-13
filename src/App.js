import React from 'react';
import Calculator from './components/Calculator';
import Credits from './components/Credits';

import './App.css';

const App = () => {

  return (
    <div className='App'>
      <h1>Calculator</h1>
      <Calculator />
      <Credits />
    </div>
  );
}

export default App;
