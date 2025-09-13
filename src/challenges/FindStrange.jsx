import { useState } from "react";
import { usePlayer } from "../context/PlayerContext";
import { unlockedChallenge } from "../../utils/unlockedChallenge";
import styles from "../styles/findeStrange.module.css";

export default function FindStrange({ reto, next, id }) {
  const { dispatch } = usePlayer();
  const { preguntas } = reto;
  const initialState = preguntas.map((pregunta, i) => ({
    id: i,
    userOption: null,
    correctAnswer: pregunta.respuestaCorrecta,
    result: false,
  }));
  const [userResult, setUserResult] = useState(false);
  const [userChoice, setUserChoice] = useState(initialState);
  function chosen(option, iq) {
    setUserResult(false);
    setUserChoice((prev) =>
      prev.map((question) =>
        question.id === iq
          ? {
              ...question,
              userOption: option,
              result: question.correctAnswer === option,
            }
          : question
      )
    );
  }
  function checkAnswer() {
    let isCorrect = true;
    const userResult = userChoice.filter(
      (pregunta) => pregunta.result === true
    );
    if (userResult.length != 2) {
      isCorrect = false;
    } else {
      unlockedChallenge(next, id, dispatch);
    }
    setUserResult(true);
  }

  return (
    <section className={styles.section}>
      {/* Mapeamos las preguntas */}
      {preguntas.map((question, iq) => (
        <div key={iq} id={iq} className={styles.question_container}>
          <p>{question.enunciado}</p>
          {/* Mapeamos las opciones */}
          {question.opciones.map((option, i) => (
            <button
              className={`${styles.button} ${userChoice[iq].userOption === option ? styles.select : styles.unSelect}`}
              onClick={() => chosen(option, iq)}
              id={iq}
              key={i}
            >
              {option}
            </button>
          ))}
          {/* Al resolver mostramos si es correcta o no */}
          {userResult && (
            <p>
              {userChoice[iq].result ? "✅ ¡Correcto!" : "❌ Elección errónea"}
            </p>
          )}
        </div>
      ))}
      {/* Boton para comprobar respuestas */}
      <button className="btn button" onClick={checkAnswer}>
        Comprobar
      </button>
    </section>
  );
}
