import React from "react";
import { createContext, useContext, useReducer } from "react";
import { initialState, playerReduce } from "../reduce/PlayerReduce";

  // Cargar del localStorage si existe
  function loadFromStorage(initialState) {
    const saved = localStorage.getItem("player");
    return saved ? JSON.parse(saved) : initialState;
  }

const PlayerContext = createContext();
export const PlayerProvider = ({ children }) => {

    const [state, dispatche] = useReducer(playerReduce, initialState, loadFromStorage);


  // Guardar en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem("player", JSON.stringify(state));
  }, [state]);

  return (
<PlayerContext.Provider value={{stat, dispatche}}>
{children}
</PlayerContext.Provider>
  )
};

export function usePlayer(){
return useContext(PlayerContext)
};
