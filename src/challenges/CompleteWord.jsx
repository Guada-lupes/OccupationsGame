import React, { useState } from "react";
import { unlockedChallenge } from "../../utils/unlockedChallenge";
import { usePlayer } from "../context/PlayerContext";

export default function CompleteWord({ reto, id, next }) {
  const { dispatch } = usePlayer();
  const { preguntas } = reto;
  const [indice, setIndice] = useState(0);
  const [resultado, setResultado] = useState(null);
  const [respuestasCorrectas, setRespuestasCorrectas] = useState([]);

  const preguntaActual = preguntas[indice];

  function comprobar(opcion) {
    if (opcion === preguntaActual.respuestaCorrecta) {
      setResultado("✅ ¡Correcto!");
      setRespuestasCorrectas((prev) => [...prev, true]);
    } else {
      setResultado(
        `❌ Incorrecto`
      );
    }
  }

  function reintentar() {
    setResultado(null);
  }

  function siguientePregunta() {
    if (indice < preguntas.length - 1) {
      setIndice(indice + 1);
      setResultado(null);
    } else {
      const todasCorrectas = respuestasCorrectas.length === preguntas.length;
      if (todasCorrectas) {
        unlockedChallenge(next, id, dispatch);
      } else {
        alert("🔁 Has terminado, pero algunas respuestas fueron incorrectas.");
      }
    }
  }

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h3>{preguntaActual.enunciado}</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          marginBottom: "10px",
        }}
      >
        {preguntaActual.opciones.map((opcion) => (
          <button
            key={opcion}
            onClick={() => comprobar(opcion)}
            disabled={resultado !== null && resultado.startsWith("✅")}
            style={{
              padding: "8px 12px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              cursor: resultado ? "not-allowed" : "pointer",
              background: resultado ? "#bf2424ff" : "#2a8a31ff",
              textAlign: "left",
            }}
          >
            {opcion}
          </button>
        ))}
      </div>

      {resultado && (
        <>
          <p>{resultado}</p>
          {resultado.startsWith("✅") ? (
            <button onClick={siguientePregunta}>Siguiente</button>
          ) : (
            <button onClick={reintentar}>Probar otra vez</button>
          )}
        </>
      )}
    </div>
  );
}
