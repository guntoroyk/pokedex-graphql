import React from 'react';
import { css } from '@emotion/core';
import { BounceLoader } from 'react-spinners';
import './loader.css';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

export default (props) => {
  const loading = props.loading;
  
  return (
    <div className='sweet-loading' id="box-loader">
      <BounceLoader
        css={ override }
        sizeUnit={"px"}
        size={60}
        color={'#71c9ce'}
        loading={loading}
      />
    </div> 
  );
};
