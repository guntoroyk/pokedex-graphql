import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import Card from './components/Card';
import Loader from '../../../../components/Loader';
import Spinner from './components/Spinner'
import './cardlist.css';
import { FETCH_POKEMONS } from '../../../../services/pokemons/query';

const CardList = () => {
  const { loading, error, data, fetchMore } = useQuery(
    FETCH_POKEMONS,
    {
      variables: {
        first: 20
      },
      fetchPolicy: "cache-and-network"
    }
  );
  
  const fetchMorePokemons = () => {
    fetchMore({
      variables: {
        first: data.pokemons.length + 20,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return fetchMoreResult
      },
    });
  };

  if (!data) { return <Loader /> }
  else if (error) { return `Error! ${error.message}` }
  else {
    // console.log(data.pokemons)
    return (
      <div className='container'>
        <div className='card-list'>
          { data.pokemons.map(pokemon => (
            <Card pokemon={ pokemon } key={ pokemon.id } />
          )) }
        </div>
        <div className='load-more'>
          { loading && <Spinner /> }
          <button onClick={ fetchMorePokemons } >Load more</button>
        </div>
      </div>
    )
  }
}

export default CardList;
