import React, { useState } from 'react';
import Keyboard from './Keyboard'
import Display from './Display';

const Calculator = () => {
  const [result, setResult] = useState(0);

  return (
    <div>
      <Display />
      <Keyboard />
    </div>
  );
};

export default Calculator;
