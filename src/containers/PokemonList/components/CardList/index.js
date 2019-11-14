import React, { useEffect } from 'react';
import Card from './components/Card';
import Loader from '../../../../components/Loader'
import './cardlist.css';

const CardList = () => {
  return (
    <div className='container'>
      <div className='card-list'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className='btnLoadMore'>
        <button onClick="" >Load more</button>
      </div>
    </div>
  )
}

export default CardList;
