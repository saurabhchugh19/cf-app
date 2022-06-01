import React from 'react';

export const Label = props => {
  const { text, className } = props;

  return <label className={className}>{text}</label>;
};

export default Label;
