import { useState } from "react";
import { usePlayer } from "../context/PlayerContext";
import { unlockedChallenge } from "../../utils/unlockedChallenge";

export default function FindStrange({ reto, next, id }) {
  const { dispatch } = usePlayer();
  const [respuestas, setRespuestas] = useState({});

  const handleSelect = (preguntaIndex, opcion) => {
    const esCorrecta =
      opcion === reto.preguntas[preguntaIndex].respuestaCorrecta;

    setRespuestas((prev) => ({
      ...prev,
      [preguntaIndex]: { opcion, esCorrecta },
    }));
  };

  const comprobarRespuestas = () => {
    const todasRespondidas =
      Object.keys(respuestas).length === reto.preguntas.length;
    const todasCorrectas = reto.preguntas.every(
      (pregunta, i) => respuestas[i]?.esCorrecta === true
    );

    if (!todasRespondidas) {
      alert("Responde todas las preguntas antes de enviar.");
      return;
    }
    if (todasCorrectas) {
      unlockedChallenge(next, id, dispatch);
    }
  };

  return (
    <section>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))", gap: "20px", margin: "2rem 0",  }}>
        {reto.preguntas.map((pregunta, index) => {
          const respuestaUsuario = respuestas[index];
          return (
            <div
              key={index}
              style={{
                padding: "15px",
                border: "1px solid #ddd",
                borderRadius: "12px",
                background: "var(--color-fondo-secundario-o)",
                width: "fit-content",
                minWidth: "-webkit-fill-available"
              }}
            >
              <h3>{pregunta.enunciado}</h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  marginTop: "10px",
                }}
              >
                {pregunta.opciones.map((opcion, i) => {
                  const seleccionada = respuestaUsuario?.opcion === opcion;
                  return (
                    <button
                      key={i}
                      onClick={() => handleSelect(index, opcion)}
                      style={{
                        padding: "10px",
                        border: "1px solid #888",
                        borderRadius: "8px",
                        cursor: "pointer",
                        background: seleccionada
                          ? "var(--color-bordes-o)"
                          : "var(--color-bordes2-o)",
                        color: seleccionada ? "white" : "black",
                        transition: "0.2s",
                      }}
                    >
                      {opcion}
                    </button>
                  );
                })}
              </div>

              {/* Feedback inmediato debajo de las opciones */}
              {respuestaUsuario && (
                <p
                  style={{
                    marginTop: "8px",
                    fontWeight: "bold",
                    color: respuestaUsuario.esCorrecta ? "#28a745" : "#dc3545",
                  }}
                >
                  {respuestaUsuario.esCorrecta
                    ? "Correcto ✅"
                    : "Incorrecto ❌"}
                </p>
              )}
            </div>
          );
        })}
      </div>
      <button className="btn" onClick={comprobarRespuestas}>
        Enviar respuestas
      </button>
    </section>
  );
}
