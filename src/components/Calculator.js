import React, { useState } from 'react';
import styled from 'styled-components';

import Keyboard from './Keyboard'
import Display from './Display';

const Calculator = styled.div`
  align-items: center;
  border: 1px #888888 solid;
  box-shadow: 1px 1px 1px #888888;
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 250px;
`;

const Container = () => {
  const [result, setResult] = useState('');

  return (
    <Calculator>
      <Display
        result={result}
        setResult={setResult}
      />
      <Keyboard
        result={result}
        setResult={setResult}
      />
    </Calculator>
  );
};

export default Container;
