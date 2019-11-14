import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import Card from './components/Card';
import Loader from '../../../../components/Loader';
import './cardlist.css';
import { FETCH_POKEMONS } from '../../../../services/pokemons/query'

const CardList = () => {
  const { loading, error, data } = useQuery(FETCH_POKEMONS);

  if (loading) { return <Loader /> }
  else if (error) { return `Error! ${error.message}` }
  else {
    console.log(data.pokemons)
    return (
      <div className='container'>
        <div className='card-list'>
          { data.pokemons.map(pokemon => (
            <Card pokemon={ pokemon } key={ pokemon.id } />
          )) }
        </div>
        <div className='btnLoadMore'>
          <button >Load more</button>
        </div>
      </div>
    )
  }
}

export default CardList;
