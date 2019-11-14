import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';
import './card.css';
import Type from './components/Type';

const Card = (props) => {
  const { pokemon } = props;  

  return (
    <>
      <div className='card' onClick="" >
        <div className='card-image'>
         <img src="https://img.pokemondb.net/artwork/butterfree.jpg" alt="avatar"></img>
        </div>
        <div className='card-container'>
          <h4><b>Bulbasaur</b></h4>
          <div className='type-list'>
            <Type type={ { type: 'Grass' } } />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
