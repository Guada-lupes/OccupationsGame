import React, { useState } from "react";
import { unlockedChallenge } from "../../utils/unlockedChallenge";
import { usePlayer } from "../context/PlayerContext";
import styles from "../styles/completeWord.module.css";

// export default function CompleteWord({ reto, id, next }) {
//   const { dispatch } = usePlayer();
//   const { preguntas } = reto;
//   const [indice, setIndice] = useState(0);
//   const [resultado, setResultado] = useState(null);
//   const [respuestasCorrectas, setRespuestasCorrectas] = useState([]);

//   const preguntaActual = preguntas[indice];

//   function comprobar(opcion) {
//     if (opcion === preguntaActual.respuestaCorrecta) {
//       setResultado("✅ ¡Correcto!");
//       setRespuestasCorrectas((prev) => [...prev, true]);
//     } else {
//       setResultado(
//         `❌ Incorrecto`
//       );
//     }
//   }

//   function reintentar() {
//     setResultado(null);
//   }

//   function siguientePregunta() {
//     if (indice < preguntas.length - 1) {
//       setIndice(indice + 1);
//       setResultado(null);
//     } else {
//       const todasCorrectas = respuestasCorrectas.length === preguntas.length;
//       if (todasCorrectas) {
//         unlockedChallenge(next, id, dispatch);
//       } else {
//         alert("🔁 Has terminado, pero algunas respuestas fueron incorrectas.");
//       }
//     }
//   }

//   return (
//     <div style={{ maxWidth: "500px", margin: "0 auto" }}>
//       <h3>{preguntaActual.enunciado}</h3>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           gap: "10px",
//           marginBottom: "10px",
//           marginTop: "2rem"
//         }}
//       >
//         {preguntaActual.opciones.map((opcion) => (
//           <button
//             key={opcion}
//             onClick={() => comprobar(opcion)}
//             disabled={resultado !== null && resultado.startsWith("✅")}
//             style={{
//               padding: "8px 12px",
//               borderRadius: "6px",
//               border: "1px solid #ccc",
//               cursor: resultado ? "not-allowed" : "pointer",
//               background: resultado ? "var(--color-bordes-o)" : "var(--color-bordes2-o)",
//               textAlign: "left",
//             }}
//           >
//             {opcion}
//           </button>
//         ))}
//       </div>

//       {resultado && (
//         <>
//           <p>{resultado}</p>
//           {resultado.startsWith("✅") ? (
//             <button className="btn" onClick={siguientePregunta}>Siguiente</button>
//           ) : (
//             <button className="btn" onClick={reintentar}>Probar otra vez</button>
//           )}
//         </>
//       )}
//     </div>
//   );
// }
export default function CompleteWord({ reto, id, next }) {
  const { preguntas } = reto;
  const initialState = preguntas.map((pregunta, index) => ({
    preguntas: {
      id: index,
      correctOption: pregunta.respuestaCorrecta,
      userOption: null,
      result: false,
    },
  }));

  const [userChoice, setUserChoice] = useState(initialState);

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.carrusel}>
          {preguntas.map((p, ip) => (
            // Cards
            <div className={styles.card} id={ip} key={ip}>
              <h2>Pregunta{ip + 1}</h2>
              <p>{p.enunciado}</p>
              {/* Opciones */}
              {p.opciones.map((o, io) => (
                <button key={io}>{o}</button>
              ))}
              {/*respuesta de comprobacion */}
              <p></p>
              {/* Boton de comprobacion */}
              <button>Probar</button>
            </div>
          ))}
        </div>
        <div>
          {preguntas.map((p, ia)=>
          (<a href={`#${ia}`}>?</a>)
          )}
          
        </div>
      </div>
    </section>
  );
}
