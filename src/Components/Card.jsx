import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = ({ name, username, id }) => {

  const { state, dispatch } = useContext(ContextGlobal);

  const addFav = (dentist) => {
    dispatch({ type: "ADD_DENTIST_FAV", dentist })
    toast.success(`Se añadio a ${name} a tus favoritos`)
  }

  const removeFav = (dentist) => {
    dispatch({ type: "REMOVE_DENTIST", dentist });
    toast.error(`Se eliminó a ${name} de tus favoritos`);
  };

  const isFav = state.favsDentists.find((dentist) => dentist.id === id);

  return (
    <div className="card">
      {state.theme ? <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      /> : <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />}
      <Link to={`/detail/${id}`}>
        <div>
          <img src="../images/doctor.jpg" alt="doctor" width="100x" height="100px" />
          <h4>{id} - {name}</h4>
          <h5>{username}</h5>
        </div>
      </Link>
      <div>
        {!isFav ? <button onClick={() => addFav({ id: id, name: name, username: username })} className="favButton" >⭐Add fav</button> : <button onClick={() => removeFav({ id: id })} className="removeButton" >❌Remove</button>}
      </div>
    </div>
  );
};

export default Card;
