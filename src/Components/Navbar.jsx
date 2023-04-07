import React, { useContext } from 'react'
import { ContextGlobal } from "../Components/utils/global.context";
import { Link } from 'react-router-dom';

const Navbar = () => {

  const {state, dispatch} = useContext(ContextGlobal)

  const cambiarTema = (theme) => {
    dispatch({ type: 'CAMBIAR_TEMA', theme });
  };

  return (
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/favs">Favorites</Link></li>
        <li><Link to="/contact">Contact us</Link></li>
      </ul>
      <button onClick={() => cambiarTema(!state.theme)}>{state.theme ? '🌙':'☀'}</button>
    </nav>
  )
}

export default Navbar