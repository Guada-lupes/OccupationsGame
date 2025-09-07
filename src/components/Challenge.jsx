import React from "react";
import { useRef, useEffect } from "react";
import TrueOrFalse from "../challenges/TrueOrFalse";
import OrderAndSecuence from "../challenges/OrderAndSecuence";
import Clasification from "../challenges/Clasification";
import Relation from "../challenges/Relation";
import FindStrange from "../challenges/FindStrange";
import CompleteWord from "../challenges/CompleteWord";
import MultipleChoice from "../challenges/MultipleChoice";
import { rotateCoin } from "../../utils/coinRotate";
import styles from "../styles/challenge.module.css";

const Challenge = ({ reto, id, next, profesiones }) => {
  //tenemos el cuenta el tipo de reto y generamos componentes segun el
  const coin1 = useRef(null);
  const coin2 = useRef(null);
  useEffect(() => {
    const cleanup = rotateCoin(coin1, coin2);
    return cleanup;
  }, []);
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.h2}>Resuelve el reto</h2>
        {reto.tipo === "verdadero-falso" && (
          <TrueOrFalse
            reto={reto}
            id={id}
            next={next}
            profesiones={profesiones}
          />
        )}
        {reto.tipo === "ordenar-secuencia" && (
          <OrderAndSecuence reto={reto} id={id} next={next} />
        )}
        {reto.tipo === "clasificar" && (
          <Clasification reto={reto} id={id} next={next} />
        )}
        {reto.tipo === "relacionar" && (
          <Relation reto={reto} id={id} next={next} />
        )}
        {reto.tipo === "encuentra-impostor" && (
          <FindStrange reto={reto} id={id} next={next} />
        )}
        {reto.tipo === "completar-frases" && (
          <CompleteWord reto={reto} id={id} next={next} />
        )}
        {reto.tipo === "multiple-choice" && (
          <MultipleChoice reto={reto} id={id} next={next} />
        )}
      </div>
      <dialog id="reto_desbloqueado" className={styles.modal}>
        <div className={styles.text_container}>
          <p className={styles.p}>¡Reto superado!</p>
          <div className={styles.coin_container}>
            <img ref={coin1} src="/cara_a.png" alt="moneda" />
            <img ref={coin2} src="/cara_b.png" alt="moneda" />
          </div>
          <button
            className="btn"
            onClick={() => document.getElementById("reto_desbloqueado").close()}
          >
            Aceptar
          </button>
        </div>
      </dialog>
    </>
  );
};

export default Challenge;
