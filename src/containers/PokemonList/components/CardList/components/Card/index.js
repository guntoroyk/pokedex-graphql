import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';
import './card.css';
import Type from './components/Type';

const Card = (props) => {
  const { pokemon } = props;  

  return (
    <>
      <div className='card' >
        <div className='card-image'>
         <img src={ pokemon.image } alt="avatar"></img>
        </div>
        <div className='card-container'>
          <h4><b> { pokemon.name } </b></h4>
          <div className='type-list'>
            { pokemon.types.map((type, i) => (
              <Type type={ type } key={ i } />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
