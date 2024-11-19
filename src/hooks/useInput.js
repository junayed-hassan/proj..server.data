import { useState } from "react";

function useInput(initValue) {
  const [value, setValue] = useState(initValue);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClear = () => {
    setValue("");
  };

  return {
    attr:{
       value: value,
        onChange: handleChange, 
    },
    onClear: handleClear,
  };
 
}
export default useInput;
