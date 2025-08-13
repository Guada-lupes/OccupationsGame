import React, { useState } from "react";

export default function FindStrange({ reto }) {
  const { preguntas } = reto;

  const [indice, setIndice] = useState(0);
  const [resultado, setResultado] = useState(null);

  const preguntaActual = preguntas[indice];

  function comprobar(opcion) {
    if (opcion === preguntaActual.respuestaCorrecta) {
      setResultado("✅ ¡Correcto!");
    } else {
      setResultado(`❌ Incorrecto. La respuesta era: ${preguntaActual.respuestaCorrecta}`);
    }
  }

  function siguiente() {
    setResultado(null);
    if (indice < preguntas.length - 1) {
      setIndice(indice + 1);
    } else {
      alert("🏆 Has terminado todas las preguntas");
    }
  }

  return (
    <div style={{ padding: "10px", maxWidth: "500px" }}>
      <h3>{preguntaActual.enunciado}</h3>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {preguntaActual.opciones.map((opcion) => (
          <button
            key={opcion}
            onClick={() => comprobar(opcion)}
            disabled={resultado !== null}
            style={{
              padding: "8px 12px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              background: "#e71919ff",
              cursor: "pointer"
            }}
          >
            {opcion}
          </button>
        ))}
      </div>

      {resultado && (
        <div style={{ marginTop: "10px" }}>
          <p>{resultado}</p>
          <button onClick={siguiente}>Siguiente</button>
        </div>
      )}
    </div>
  );
}
