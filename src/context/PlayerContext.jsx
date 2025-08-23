import React from "react";
import { createContext, useContext, useReducer, useEffect } from "react";
import { initialState, playerReduce } from "../reduce/playerReduce";

// Cargar del localStorage si existe
function loadFromStorage() {
  const saved = localStorage.getItem("player");
  return saved ? JSON.parse(saved) : initialState;
}

const PlayerContext = createContext();
export const PlayerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    playerReduce,
    initialState,
    loadFromStorage
  );
  let copie = [...state.savedOccupations]
  console.log(copie);
  
  // Guardar en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem("player", JSON.stringify(state));
  }, [state]);




  return (
    <PlayerContext.Provider value={{ state, dispatch }}>
      {children}
    </PlayerContext.Provider>
  );
};

export function usePlayer() {
  return useContext(PlayerContext);
}
