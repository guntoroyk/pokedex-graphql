import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { GET_POKEMON_DETAILS } from '../../../../services/pokemons/query';
import './detail.css';
import Loader from '../../../../components/Loader';

const Detail = () => {
  const { name } = useParams()
  const { loading, error, data } = useQuery(GET_POKEMON_DETAILS, 
    {
      variables: {
        name: name
      }
    },  
  );

  if (loading) return <Loader />;
  else if (error) return `Error! ${error.message}`;
  else {
    // console.log(data)
    return (
    <div className="detail-container">
      <h1>{ data.pokemon.name } #{ data.pokemon.number }</h1>
      <div className="first">
        <div className="detail-image">
          <img src={ data.pokemon.image } alt="pokemon"/>
        </div>
        <div className="detail-basic">
          <div className="detail-desc">
            <div className="left">
              <div className="name">Height</div>
              <div className="info">{ data.pokemon.height.minimum }</div>
              <div className="name">Weight</div>
              <div className="info">{ data.pokemon.weight.minimum }</div>
              <div className="name">Classification</div>
              <div className="info">{ data.pokemon.classification }</div>
            </div>
            <div className="right">
              <div className="name">Flee Rate</div>
              <div className="info">{ data.pokemon.fleeRate }</div>
              <div className="name">Maximum CP</div>
              <div className="info">{ data.pokemon.maxCP }</div>
              <div className="name">Maximum HP</div>
              <div className="info">{ data.pokemon.maxHP }</div>
            </div>
          </div>
          <div className="detail-type">
            <h4>Type</h4>
            { data.pokemon.types.map(type => (
              <span className="type-name">{ type }</span>
            )) }
          </div>
        </div>
      </div>
    </div>
    );
  }
};

export default Detail;
