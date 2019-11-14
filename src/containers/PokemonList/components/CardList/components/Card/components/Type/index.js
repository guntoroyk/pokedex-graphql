import React from 'react';
import './type.css';

const Type = (props) => {
  const { type } = props;
  
  return (
    <div className='box-type'>
      <span> { type ? type : '' } </span>
    </div>
  );
};

export default Type;
