import React, { useState, useEffect } from 'react';

import Card from './Card';
import useCounter from '../hooks/use-counter';

const ForwardCounter = () => {
  // state created in use-counter will be tied to ForwardCounter
  // using useCounter in multiply components: every components will have its own state instead of sharing 1 state among components
 // useCounter();

  // to share state, return value can be used in components
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
