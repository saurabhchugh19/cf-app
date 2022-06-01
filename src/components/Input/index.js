import React, { useState } from 'react';

export const Input = props => {
  const {
    inputType,
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
