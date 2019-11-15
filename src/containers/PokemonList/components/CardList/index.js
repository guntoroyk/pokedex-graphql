import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import Card from './components/Card';
import Loader from '../../../../components/Loader';
import Spinner from './components/Spinner';
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
    },
  );
  const [search, setSearch] = useState('');
  const [dataPokemons, setDataPokemons] = useState(null);
  
  const fetchMorePokemons = () => {
    fetchMore({
      variables: {
        first: data.pokemons.length + 20,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return fetchMoreResult;
      },
    });
  };

  useEffect(() => {
    if (!search) {
      if (data) {
        setDataPokemons(data.pokemons);
      }
    } else {
      // let pokemonName = new RegExp(search, 'i');
      // let pokemonType = new RegExp(search, 'i');
      // let filtered = data.pokemons.filter(el => {
      //   // console.log(el.types, pokemonType)
      //   return el.types.includes(pokemonType);
      // });
      // setDataPokemons(filtered);

      let pokemonsTypes = search ? search.replace(/\s+/g, '').split(',') : [];
      let filtered = [];

      for (let i = 0; i < data.pokemons.length; i++) {
        for (let j = 0; j < data.pokemons[i].types.length; j++) {
          if (pokemonsTypes.includes(data.pokemons[i].types[j])) {
            filtered.push(data.pokemons[i]);
          };
        };
      };
      setDataPokemons(filtered);
    };
    // eslint-disable-next-line
  }, [data, search]);

  if (!dataPokemons) { return <Loader /> }
  else if (error) { return `Error! ${error.message}` }
  else {
    console.log(data.pokemons)
    return (
      <div className='container'>
        <div className='filter'>
          <input 
            type='text' 
            placeholder='search by type, eg: Grass, Poison'
            value={ search }
            onChange={ e  => setSearch(e.target.value) }
          />
        </div>
        <div className='card-list'>
          { dataPokemons.map(pokemon => (
            <Card pokemon={ pokemon } key={ pokemon.id } />
          )) }
        </div>
        <div className='load-more'>
          { loading && <Spinner /> }
          <button onClick={ fetchMorePokemons } >Load more</button>
        </div>
      </div>
    );
  };
};

export default CardList;
