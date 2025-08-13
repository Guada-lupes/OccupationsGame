import React from 'react';
import { useState } from 'react';

const TrueOrFalse = ({reto}) => {


const [respuestas, setRespuestas] = useState(Array(reto?.preguntas?.length).fill(""));
  const [resultados, setResultados] = useState(Array(reto.preguntas.length).fill(null));

  const handleChange = (index, value) => {
    const nuevasRespuestas = [...respuestas];
    nuevasRespuestas[index] = value;
    setRespuestas(nuevasRespuestas);
  };

  const verificarRespuesta = (index) => {
    const esCorrecta =
      respuestas[index] === reto.preguntas[index].respuestaCorrecta;
    const nuevosResultados = [...resultados];
    nuevosResultados[index] = esCorrecta;
    setResultados(nuevosResultados);
  };

  return (
    <>
      {reto.preguntas.map((p, i) => (
        <div key={i}>
          <p>{p.enunciado}</p>

          <label>
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

          <div>
            <button onClick={() => verificarRespuesta(i)}>Probar</button>
          </div>

          {resultados[i] !== null && (
            <p>
              {resultados[i] ? "¡Correcto!" : "Incorrecto"}
            </p>
          )}
        </div>
      ))}
    </>
  );


};

export default TrueOrFalse;