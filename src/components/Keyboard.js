import React, { useMemo } from 'react';
import styled from 'styled-components';

import { calcKeys } from '../constants';
import Key from './Key';

const Keyboard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Container = ({ result, setResult }) => {
  const keyboard = useMemo(() => (
    calcKeys.map(key =>
      <Key
        label={key}
        result={result}
        setResult={setResult}
      />
    )
  ), [result, setResult]);

  return (
    <Keyboard>
      {keyboard}
    </Keyboard>
  );
}

export default Container;
