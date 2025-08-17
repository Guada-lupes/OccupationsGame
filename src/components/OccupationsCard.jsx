import { useEffect } from "react";
import Button from "./Button";
import { usePlayer } from "../context/PlayerContext";
import styles from "../styles/occupations.module.css";

const OccupationsCard = ({ profesiones }) => {
  const { state, dispatch } = usePlayer();

  function saveOccupations(p) {

    dispatch({ type: "saved_occupation", payload: p });
  }

  return (
    <div>
      <h2>
        Tu exploración a dado frutos, aquí tienes las más populares ocupaciones
        de la tribu{" "}
      </h2>
      <div className={styles.container}>
        {profesiones.map((p, i) => {
          // let isSaved = state.saved_occupation.includes(p.nombre)
          return (
            <div className="card" key={i}>
              <h3 className={styles.h3}>{p.nombre}</h3>
              <p>{p.descripcion}</p>
              <div className={styles.button_container}>
                <Button
                  texto={"Saber más"}
                  onClick={() => window.open(p.link, "_blank")}
                />

                <Button onClick={() => saveOccupations(p)} texto={"Guardar"} />
              </div>
            </div>
          );
        })}
      </div>
              <Button texto={"Volver"} link={"/all_tribus"} />
    </div>
  );
};

export default OccupationsCard;
