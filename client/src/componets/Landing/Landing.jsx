import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';
import sound from './pokemon-3.mp3';
import pokemon from './pokemon.webp'

const LandingPage = () => {
  const handleClick = () => {
    const audio = new Audio(sound);
    audio.play();
    setInterval(() => {
      audio.pause();
    }, 5000);
  };



  return (
    <div className="container">
      <div className='text'>
        <h2>Embárcate en una Épica Aventura Pokémon:</h2>
        <h4>Descubre, Crea y Conviértete en el Maestro Pokémon</h4>
        <Link to="/home">
          <button onClick={handleClick} className="button"> Ingresa a la batalla </button>
        </Link>
      </div>
      <div className='content-image'>
        <img src={pokemon} alt="" />
      </div>
    </div>
  );
};

export default LandingPage;
