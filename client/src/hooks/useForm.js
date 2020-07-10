// write your custom hook here to control your checkout form
import React, { useState } from 'react';

const useForm = (initial, handleChange) => {
  const [values, setValues] = useState(initial);
  const handleChanges = (e) => {
    setValues(e.target.value);
    };
  
  return[values, setValues, handleChanges];
}


export default useForm