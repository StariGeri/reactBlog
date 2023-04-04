import React from 'react';
import './Button_basic.css';

interface buttonProps {
    text: string;
}

const Button_basic: React.FC<buttonProps> = ({ text}) => {
  return (
    <button className="basicButton">{text}</button>
  );
}

export default Button_basic;
