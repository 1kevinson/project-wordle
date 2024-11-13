import React from 'react';

function KeyCap({ style, children }) {
  const keyStyle = style ? `key-cap ${style}` : "key-cap";

  return <div className={keyStyle}>{children}</div>;
}

export default KeyCap;
