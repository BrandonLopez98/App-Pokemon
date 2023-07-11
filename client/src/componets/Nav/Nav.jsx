import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetPokemonsHome, setButtons } from '../../redux/action';

const Nav = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(resetPokemonsHome());
    dispatch(setButtons(['all', 'all', 'id']));
  };

  return (
    <div className="nav">
      <Link to="/">
          <button onClick={handleClick} type="button">Cerrar sesion</button>
        </Link>

        <Link to="/create">
          <button className="link-one">Crea tu propio pokemon</button>
        </Link>

        <Link to="/home">
          <button className="link-two" onClick={handleClick}>Inicio</button>
        </Link>

        <Link to="/about">
          <button className="link-three">sobre mi</button>
        </Link>

    </div>
  );
};

export default Nav;
