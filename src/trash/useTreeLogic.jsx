import React from "react";
import { useState } from "react";
import sectores from "../../data/sectores"
import { useNavigate } from "react-router-dom";

const useTreeLogic = (id) => {
  const [path, setPath] = useState([sectores[id]]);
  const navigate = useNavigate();

  const currentNode = path[path.length - 1];

  function handleOptionClick(index) {
    const nextNode = currentNode.opciones[index];
    setPath([...path, nextNode]);
    console.log(path);
    
  }

  function handleBack() {
    if((path.length -1) === 0){
        console.log(id);
        
navigate(`/${id}`)
    }
    if (path.length >= 1) {
      let end = path.length - 1;
      setPath(path.slice(0, end));
    }
  }

  return {currentNode, handleOptionClick, handleBack, path};
};

export default useTreeLogic;
