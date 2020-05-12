import React, { useCallback } from 'react';
import styled from 'styled-components';

const Display = styled.input`
  font-size: 2em;
  margin-bottom: 10px;
  padding: 4px;
`;

const Container = ({ result, setResult }) => {
  const updateDisplay = useCallback(
    e => setResult(result + e.key),
    [result, setResult],
  );

  return (
    <Display
      type='text'
      value={result}
      onKeyPress={updateDisplay}
    />
  )
};

export default Container;
