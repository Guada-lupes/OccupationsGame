import React, { useState } from "react";
import Button from "./Button";
import { usePlayer } from "../context/PlayerContext";
import styles from "../styles/occupations.module.css";

const OccupationSingleComponent = ({ p, i }) => {
  const { state, dispatch } = usePlayer();
  const isSaved = state.savedOccupations.some((o) => o.nombre === p.nombre);

  function saveOccupations(p) {
    if (isSaved) {
      dispatch({ type: "removed_occupation", payload: p });
      setSave(false);
      return;
    } else {
      dispatch({ type: "saved_occupation", payload: p });
      setSave(true);
    }
  }
  return (
    <div className="card" key={i}>
      <h3>{p.nombre}</h3>
      <p>{p.descripcion}</p>
      <div className={styles.button_container}>
        <Button
          texto={"Saber más"}
          onClick={() => window.open(p.link, "_blank")}
        />
        <Button
          onClick={() => saveOccupations(p)}
          texto={isSaved ? "Eliminar" : "Guardar"}
        />
      </div>
    </div>
  );
};

export default OccupationSingleComponent;
