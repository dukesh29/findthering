import React from 'react';

interface Count {
  count:number;
}

const Count:React.FC<Count> = ({count}) => {

  return (
    <div>
      Count: <span>{count}</span>
    </div>
  );
};

export default Count;