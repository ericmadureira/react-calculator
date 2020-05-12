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
      if(label === 'Clear') {
        setResult('');
        return;
      }
      setResult(result + label)
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
