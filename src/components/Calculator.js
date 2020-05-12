import React, { useState } from 'react';
import Keyboard from './Keyboard'
import Display from './Display';

const Calculator = () => {
  const [result, setResult] = useState('');

  return (
    <div>
      <Display
        result={result}
        setResult={setResult}
      />
      <Keyboard
        result={result}
        setResult={setResult}
      />
    </div>
  );
};

export default Calculator;
