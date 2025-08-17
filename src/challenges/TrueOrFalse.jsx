import React from "react";
import { useState, useEffect } from "react";
import { usePlayer } from "../context/PlayerContext";
import { unlockedChallenge } from "../../utils/unlockedChallenge";
import styles from "../styles/trueOrFalse.module.css"

const TrueOrFalse = ({ reto, id, next }) => {
  const { dispatch } = usePlayer();

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

  return (
    <>
      {reto.preguntas.map((p, i) => (
        <div className={styles.container} key={i}>
          <p>{p.enunciado}</p>
          <label >
            <input
              type="radio"
              name={`pregunta-${i}`}
              value="Verdadero"
              checked={respuestas[i] === "Verdadero"}
              onChange={(e) => handleChange(i, e.target.value)}
            />
            Verdadero
          </label>
          <label>
            <input
              type="radio"
              name={`pregunta-${i}`}
              value="Falso"
              checked={respuestas[i] === "Falso"}
              onChange={(e) => handleChange(i, e.target.value)}
            />
            Falso
          </label>
          <div className={styles.button_container}>
            <button className="btn" onClick={() => verificarRespuesta(i)}>Probar</button>
          </div>
          {resultados[i] !== null && (
            <p className={styles.p}>{resultados[i] ? "¡Correcto!" : "Incorrecto"}</p>
          )}
        </div>
      ))}
    </>
  );
};

export default TrueOrFalse;
