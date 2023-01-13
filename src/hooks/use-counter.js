import React, { useState, useEffect } from 'react';

const useCounter = (props) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

    // return counter, so it can be shared among components, where it can be stored in a variable
    return counter;
};

export default useCounter;