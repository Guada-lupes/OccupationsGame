import React, { useState, useEffect } from "react";
import { unlockedChallenge } from "../../utils/unlockedChallenge";
import { usePlayer } from "../context/PlayerContext";
import styles from "../styles/completeWord.module.css";
import { modifyActual, selectAnwer, checkAnswer
 } from "../../utils/completeWordLogic";

export default function CompleteWord({ reto, id, next }) {
  const { dispatch } = usePlayer();
  const { preguntas } = reto;
  const initialState = preguntas.map((pregunta, index) => ({
    id: index,
    correctOption: pregunta.respuestaCorrecta,
    userOption: null,
    result: false,
  }));
  const [userChoice, setUserChoice] = useState(initialState);
  const [result, setResult] = useState(preguntas.map((p) => false));
const [actual, setActual] = useState(0)


  useEffect(() => {
    const win = userChoice.map((p) => p.result).includes(false);

    if (!result.includes(false) && !win) {
      unlockedChallenge(next, id, dispatch);
    }
  }, [result]);

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.carrusel}>
          {preguntas.map((p, ip) => (
            // Cards
            <div className={styles.card} id={ip} key={ip}>
              <h3>Pregunta{ip + 1}</h3>
              <p>{p.enunciado}</p>
              {/* Opciones */}
              <div className={styles.button_container}>
                {p.opciones.map((o, io) => (
                  <button
                    onClick={() => selectAnwer(ip, o, setResult, setUserChoice)}
                    className={`${styles.options} ${userChoice[ip].userOption === o ? styles.select : styles.unselect}`}
                    key={io}
                  >
                    {o}
                  </button>
                ))}
              </div>
              {/*respuesta de comprobacion */}
              {result[ip] && (
                <p>
                  {userChoice[ip].result
                    ? "✅ ¡Correcto!"
                    : "❌ Elección errónea"}
                </p>
              )}
              {/* Boton de comprobacion */}
              <button onClick={() => checkAnswer(ip, result, setResult)} className="btn">
                Probar
              </button>
            </div>
          ))}
        </div>
        <div className={styles.dots_container}>
          {preguntas.map((p, ia) => (
            <a key={ia} onClick={()=>modifyActual(ia, setActual)} className={`${styles.dot} ${actual === ia ? styles.dot_select : styles.no_select}`} href={`#${ia}`}>{ia+1}</a>
          ))}
        </div>
      </div>
    </section>
  );
}
