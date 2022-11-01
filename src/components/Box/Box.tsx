import React, {MouseEventHandler} from 'react';
import './Box.css';

interface Box {
  findEl:string
  key: string;
  divClassName:string;
  openDiv:MouseEventHandler;
}

const Box:React.FC<Box> = ({findEl, openDiv, divClassName}) => {

  return (
    <div className={divClassName} onClick={openDiv}>
      <div className={findEl}></div>
    </div>
  );
};

export default Box;