import React from 'react';

const Anchor = props => {
  const {
    text = '',
    url = '#',
    target = '_self',
    rel = 'noopener noreferrer',
    className = '',
    children,
    beforeAnchorClick = () => {},
  } = props || {};

  return (
    <a href={url} target={target} rel={rel} className={className} onClick={beforeAnchorClick}>
      {text}
      {children}
    </a>
  );
};

export default Anchor;
