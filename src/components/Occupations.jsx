import React from "react";
import Button from "./button";
import { Link } from "react-router-dom";

export const Occupations = ({ currentNode, handleBack }) => {

  return (
    <div>
      <h1>Ocupaciones encontradas:</h1>
      <ul>
        {currentNode.ocupaciones.map((o, i) => (
          <>
            <a href={o.link} target="_blank">
              <li key={i}>{o.nombre}</li>
            </a>
            <p>{o.descripcion}</p>
          </>
        ))}
      </ul>
      <Button onClick={handleBack} texto={"Atrás"} />
    </div>
  );
};

export default Occupations;
