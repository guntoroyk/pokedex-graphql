import React from 'react';
import { useHistory } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const history = useHistory();
  const goToHome = () => {
    history.push('/');
  };

  return (
    <>
      <div className="nav">
        <div className="nav-header">
          <div className="nav-title" onClick={ goToHome }>
            Pokedex
          </div>
        </div>       
      </div>
    </>
  );
};

export default Navbar;
