import React, { useCallback } from 'react';
import styled from 'styled-components';

const Key = styled.button`
  height: 30px;
  padding: 0 4px;
  width: 70px;
`;

const Container = ({ label, result, setResult }) => {
  const updateDisplay = useCallback(
    () => {
      switch(label) {
        case 'Clear':
          setResult('');
          return;
        case '=':
          setResult(eval(result));
          return;
        default:
          setResult(result + label);
      }
    },
    [label, result, setResult],
  );

  return (
    <Key onClick={updateDisplay}>
      {label}
    </Key>
  );
};

export default Container;
