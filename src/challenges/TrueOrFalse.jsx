import React from "react";
import { useState, useEffect } from "react";
import { usePlayer } from "../context/PlayerContext";
import { unlockedChallenge } from "../../utils/unlockedChallenge";
import styles from "../styles/trueOrFalse.module.css";

const TrueOrFalse = ({ reto, id, next }) => {
  const { dispatch } = usePlayer();
  const { preguntas } = reto;
  const [actualPosition, setActualPosition] = useState(0);
  const [translate, setTranslate] = useState(0);
  //Crea un array con un string vacio por cada pregunta y guarda las respuestas que da el usuario
  const [respuestas, setRespuestas] = useState(
    Array(reto?.preguntas?.length).fill("")
  );
  //Crea un array con null como resultado para cada respuesta
  //este nos indicará si el reto esta superado
  const [resultados, setResultados] = useState(
    Array(reto.preguntas.length).fill(null)
  );

  const handleChange = (index, value) => {
    //hace una copia de respuestas
    const nuevasRespuestas = [...respuestas];
    //modifica el valor de la respuesta segun su index
    nuevasRespuestas[index] = value;
    //actualiza las respuestas
    setRespuestas(nuevasRespuestas);
  };

  const verificarRespuesta = (index) => {
    //compara la respuesta segun su indice con la respuesta correcta
    const esCorrecta =
      respuestas[index] === reto.preguntas[index].respuestaCorrecta;
    const nuevosResultados = [...resultados];
    nuevosResultados[index] = esCorrecta;
    //Actualiza resultados
    setResultados(nuevosResultados);
  };

  useEffect(() => {
    if (resultados[0] && resultados[1]) {
      unlockedChallenge(next, id, dispatch);
    }
  }, [resultados]);

  function handleNext() {
    if (actualPosition === preguntas.length - 1) return;
    setTranslate((prev) => prev + 50);
    setActualPosition((prev) => prev + 1);
  }
  function handlePrev() {
    if (actualPosition === 0) return;
    setTranslate((prev) => prev - 50);
    setActualPosition((prev) => prev - 1);
  }

  return (
    <>
      <div className={styles.carrusel_container}>
        {actualPosition != 0 && (
          <div
            className={`${styles.buttons} ${styles.back}`}
            onClick={handlePrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
        )}
        <div
          className={styles.carrusel}
          style={{
            transform: `translateX(-${translate}%`,
            transition: "transform 0.3s ease",
          }}
        >
          {reto.preguntas.map((p, i) => (
            // empieza Card
            <div className={styles.card} key={i} id={i}>
              <p>{p.enunciado}</p>
              <label className={styles.label}>
                <input
                  className={styles.input}
                  type="radio"
                  name={`pregunta-${i}`}
                  value="Verdadero"
                  checked={respuestas[i] === "Verdadero"}
                  onChange={(e) => handleChange(i, e.target.value)}
                />
                Verdadero
              </label>
              <label className={styles.label}>
                <input
                  className={styles.input}
                  type="radio"
                  name={`pregunta-${i}`}
                  value="Falso"
                  checked={respuestas[i] === "Falso"}
                  onChange={(e) => handleChange(i, e.target.value)}
                />
                Falso
              </label>
              <div className={styles.button_container}>
                <button className="btn" onClick={() => verificarRespuesta(i)}>
                  Probar
                </button>
              </div>

              {resultados[i] !== null && (
                <p className={styles.p}>
                  {resultados[i] ? "¡Correcto!" : "Incorrecto"}
                </p>
              )}
            </div>
            // termina Card
          ))}
        </div>
        {actualPosition != 1 && (
          <div
            onClick={handleNext}
            className={`${styles.buttons} ${styles.next}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
        )}
      </div>
    </>
  );
};

export default TrueOrFalse;
