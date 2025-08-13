import React, { useState } from "react";

export default function MultipleChoice({ reto }) {
  const { preguntas } = reto;
  const [indice, setIndice] = useState(0);
  const [resultado, setResultado] = useState(null);

  const preguntaActual = preguntas[indice];

  function comprobar(opcion) {
    if (opcion === preguntaActual.respuestaCorrecta) {
      setResultado("✅ ¡Correcto!");
    } else {
      setResultado(`❌ Incorrecto. La respuesta correcta es: ${preguntaActual.respuestaCorrecta}`);
    }
  }

  function siguientePregunta() {
    if (indice < preguntas.length - 1) {
      setIndice(indice + 1);
      setResultado(null);
    } else {
      alert("🏆 ¡Has completado el reto!");
    }
  }

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h3>{preguntaActual.enunciado}</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "10px" }}>
        {preguntaActual.opciones.map((opcion) => (
          <button
            key={opcion}
            onClick={() => comprobar(opcion)}
            disabled={resultado !== null}
            style={{
              padding: "8px 12px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              cursor: resultado ? "not-allowed" : "pointer",
              background: resultado ? "#de2d2dff" : "#31b84aff",
              textAlign: "left"
            }}
          >
            {opcion}
          </button>
        ))}
      </div>
      {resultado && (
        <>
          <p>{resultado}</p>
          <button onClick={siguientePregunta}>Siguiente</button>
        </>
      )}
    </div>
  );
}
