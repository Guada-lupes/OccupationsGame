import React, { useState } from "react";
import { usePlayer } from "../context/PlayerContext";
import { unlockedChallenge } from "../../utils/unlockedChallenge";

// export default function MultipleChoice({ reto, id, next }) {
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
//       setResultado(`❌ Incorrecto`);
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
//       unlockedChallenge(next, id, dispatch);
//       } else {
//         alert("🔁 Has terminado, pero algunas respuestas fueron incorrectas.");
//       }
//     }
//   }

//   return (
//     <div>
//       <h4>{preguntaActual.enunciado}</h4>
//       <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "10px", marginTop: "2rem" }}>
//         {preguntaActual.opciones.map((opcion) => (
//           <button
//             key={opcion}
//             onClick={() => comprobar(opcion)}
//             disabled={resultado !== null}
//             style={{
//               padding: "8px 12px",
//               borderRadius: "6px",
//               border: "1px solid #ccc",
//               cursor: resultado ? "not-allowed" : "pointer",
//               background: resultado ? "var(--color-bordes-o)" : "var(--color-bordes2-o)",
//               textAlign: "left"
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
export default function MultipleChoice({ reto, id, next }) {
  const { dispatch } = usePlayer();

  
}
