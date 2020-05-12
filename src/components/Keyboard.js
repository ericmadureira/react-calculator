import React, { useMemo } from 'react';

import { calcKeys } from '../constants';
import Key from './Key';

const Keyboard = () => {
  const keyboard = useMemo(() => (
    calcKeys.map(key => <Key label={key} />)
  ), []);

  return (
    <div className='keyboard'>
      {keyboard}
    </div>
  );
}

export default Keyboard;
