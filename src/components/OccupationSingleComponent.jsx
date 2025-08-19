import React, { useState } from "react";
import Button from "./Button";
import { usePlayer } from "../context/PlayerContext";
import styles from "../styles/occupations.module.css";

const OccupationSingleComponent = ({ p, i }) => {
  const { dispatch } = usePlayer();
  const [save, setSave] = useState("Guardar");

  function saveOccupations(p) {
    if (save === "Guardar") {
      dispatch({ type: "saved_occupation", payload: p });
      setSave("Guardado");
    } else {
    //   dispatch({ type: "removed_occupation", payload: p });
    //   setSave("Guardar");
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

        <Button onClick={() => saveOccupations(p)} texto={save} />
      </div>
    </div>
  );
};

export default OccupationSingleComponent;
