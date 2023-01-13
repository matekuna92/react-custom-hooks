import React, { useState, useEffect } from 'react';

const useCounter = (forwards = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        if(forwards) {
            setCounter((prevCounter) => prevCounter + 1);
        }
        else {
            setCounter((prevCounter) => prevCounter - 1);
        }
      }, 1000);
  
      return () => clearInterval(interval);
    }, [forwards]);         // rerun if forwards changes

    // return counter, so it can be shared among components, where it can be stored in a variable
    return counter;
};

export default useCounter;