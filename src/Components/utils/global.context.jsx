import { useState, useEffect, useReducer } from "react";
import { createContext } from "react";


export const initialState = { 
  theme: localStorage.getItem('tema'), 
  favsDentists: [] 
}

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {

  const getFavsFromStorage = () => {
    const localData = localStorage.getItem("favs");
    return localData ? JSON.parse(localData) : [];
  };

  const saveFavsFromStorage = (fav) => {
    localStorage.setItem("favs", JSON.stringify(fav));
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_DENTIST_FAV': {
        const existsDentist = state.favsDentists.find((dentist) => dentist.id === action.dentist.id);
        if (existsDentist) {
          return state;
        }
        const newFavsDentists = [...state.favsDentists, action.dentist];
        saveFavsFromStorage(newFavsDentists)
        return { ...state, favsDentists: newFavsDentists };
      }
      case 'LOAD_DENTISTS_FAVS': {
        return { ...state, favsDentists: getFavsFromStorage() };
      }
      case 'REMOVE_DENTIST': {
        const newFavsDentists = state.favsDentists.filter((dentist) => dentist.id !== action.dentist.id);
        saveFavsFromStorage(newFavsDentists);
        return { ...state, favsDentists: newFavsDentists };
      }
      case 'REMOVE_ALL_DENTIST': {
        localStorage.removeItem("favs");
        return { ...state, favsDentists: [] };
      }
      case 'CAMBIAR_TEMA': {
        localStorage.setItem('tema', action.theme);
        return { ...state, theme: action.theme };
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const [dentists, setDentists] = useState([]);
  const getDentists = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setDentists(data)
  };

  useEffect(() => {
    getDentists();
    dispatch({ type: "LOAD_DENTISTS_FAVS" });
  }, [])


  return (
    <ContextGlobal.Provider value={{ dentists, state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
