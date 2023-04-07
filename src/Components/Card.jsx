import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id }) => {

  const {state , dispatch} = useContext(ContextGlobal);
  
  const addFav = (dentist) => {
    dispatch({type:"ADD_DENTIST_FAV" , dentist})
    alert(`Se añadio a ${name} a tus favoritos`)
  }

  const removeFav = (dentist) => {
    dispatch({ type: "REMOVE_DENTIST", dentist});
    alert(`Se eliminó a ${name} de tus favoritos`);
  };

  const isFav = state.favsDentists.find((dentist) => dentist.id === id);

  return (
    <div className="card">
      <Link to={`/detail/${id}`}>
        <div>
          <img className="doctor" src="../images/doctor.jpg" alt="doctor" width="100x" height="100px" />
          <h4>{id} - {name}</h4>
          <h5>{username}</h5>
        </div>
      </Link>
      <div>
        <button onClick={() => addFav({id: id, name: name, username: username})} className="favButton" disabled={isFav}>⭐Add fav</button>
        <button onClick={() => removeFav({id:id})} className="removeButton" disabled={!isFav}>❌Remove</button>
      </div>
    </div>
  );
};

export default Card;
