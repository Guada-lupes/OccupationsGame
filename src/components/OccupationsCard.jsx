import { useEffect } from "react";
import Button from "./Button";
import OccupationSingleComponent from "./OccupationSingleComponent";
import styles from "../styles/occupations.module.css";

const OccupationsCard = ({ profesiones }) => {


  return (
    <div>
      <h2>
        “¡Has ganado la confianza de la tribu! Ellos, agradecidos por tu valor y
        sabiduría, te revelan aquello que solo comparten con quienes superan sus
        pruebas: sus ocupaciones sagradas, los roles que mantienen vivo su modo
        de vida y aportan al planeta. Escucha con atención… quizás entre estas
        tareas descubras una que resuene con tu propio destino.”
      </h2>
      <div className={styles.container}>
        {profesiones.map((p, i) => {
          // let isSaved = state.saved_occupation.includes(p.nombre)
          return (
            <OccupationSingleComponent i={i} p={p}/>
          );
        })}
      </div>
      <Button texto={"Volver"} link={"/all_tribus"} />
    </div>
  );
};

export default OccupationsCard;
