import { useEffect, useState } from "react";
import Button from "./Button";
import OccupationSingleComponent from "./OccupationSingleComponent";
import styles from "../styles/occupations.module.css";
import { usePlayer } from "../context/PlayerContext";

const OccupationsCard = ({ profesiones }) => {
const {state} = usePlayer();
const [finished, setFinished] = useState(false);

useEffect(()=>{
  if(state.doneChallenge.length === 14){
    console.log("terminado", state.doneChallenge.length);
    
    setFinished(true)
  }
}, [state.doneChallenge])

  return (
    <div className={styles.container}>
      <p>
        “¡Has ganado la confianza de la tribu! Ellos, agradecidos por tu valor y
        sabiduría, te revelan aquello que solo comparten con quienes superan sus
        pruebas: sus ocupaciones sagradas, los roles que mantienen vivo su modo
        de vida y aportan al planeta. Escucha con atención… quizás entre estas
        tareas descubras una que resuene con tu propio destino.”
      </p>
      <div className={styles.grid}>
        {profesiones.map((p, i) => {
          // let isSaved = state.saved_occupation.includes(p.nombre)
          return (
            <OccupationSingleComponent i={i} p={p}/>
          );
        })}
      </div>
      <Button texto={"Volver"} link={`${finished ? "/finished" : "/all_tribus"} `} />
    </div>
  );
};

export default OccupationsCard;
