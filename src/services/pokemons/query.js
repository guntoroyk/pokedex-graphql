import { gql } from 'apollo-boost';

export const FETCH_POKEMONS = gql`
  query 
    getPokemons ($first: Int!) {
      pokemons (first: $first) {
      id,
      number,
      name,
      types,
      image
     }
    }
`;

export const GET_POKEMON_DETAILS = gql`
  query 
    getPokemonDetails ($name: String) {
      pokemon (name: $name) {
        number,
        name,
        height {
          minimum
        },
        weight {
          minimum
        },
        classification,
        fleeRate,
        maxCP,
        maxHP,
        types,
        image
      }
    }
`;
