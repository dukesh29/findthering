import React, {MouseEventHandler} from 'react';
import './Button.css';

interface ButtonDesc {
  onReset:MouseEventHandler;
}

const Button:React.FC<ButtonDesc> = ({onReset}) => {
  return (
    <button type="button" onClick={onReset} className="btn-1">Reset</button>
  );
};

export default Button;