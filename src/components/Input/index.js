import React, { useState } from 'react';

const Input = props => {
  const {
    inputType = 'text',
    data,
    value = '',
    placeholder = '',
    onChangeHandler,
    className = '',
    disabled = false,
    // inputRef,
  } = props;

  const [inputValue, setInputValue] = useState(value);

  const onInputChange = event => {
    const { target: { value } = {} } = event;
    setInputValue(value);
    onChangeHandler && onChangeHandler({ event, data });
  };

  return (
    <input
      type={inputType}
      value={inputValue}
      onChange={onInputChange}
      disabled={disabled}
      className={className}
      placeholder={placeholder}
      // ref={inputRef}
    />
  );
};

export default Input;
