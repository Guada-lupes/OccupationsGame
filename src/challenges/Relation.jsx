import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { usePlayer } from "../context/PlayerContext";
import { unlockedChallenge } from "../../utils/unlockedChallenge";
import styles from "../styles/relation.module.css";

// export default function Relation({ reto, id, next }) {
//   const { dispatch } = usePlayer();
//   const { instrucciones, columnaA, columnaB, respuestaCorrecta } = reto;

//   // Estado inicial: todos los ejemplos en la lista "disponibles"
//   const initialState = {
//     disponibles: columnaB,
//     ...columnaA.reduce((acc, comercio) => ({ ...acc, [comercio]: [] }), {}),
//   };

//   const [listas, setListas] = useState(initialState);
//   const [resultado, setResultado] = useState(null);

//   function onDragEnd(result) {
//     if (!result.destination) return;

//     const { source, destination } = result;

//     // Evitar cambios si es la misma posición
//     if (
//       source.droppableId === destination.droppableId &&
//       source.index === destination.index
//     ) {
//       return;
//     }

//     const sourceList = Array.from(listas[source.droppableId]);
//     const destList = Array.from(listas[destination.droppableId]);
//     const [moved] = sourceList.splice(source.index, 1);

//     // Si el destino es una fila y ya tenía un elemento, lo regresamos a disponibles
//     if (destination.droppableId !== "disponibles" && destList.length > 0) {
//       const reemplazado = destList[0];
//       listas.disponibles.push(reemplazado);
//     }

//     destList.splice(destination.index, 0, moved);

//     setListas({
//       ...listas,
//       [source.droppableId]: sourceList,
//       [destination.droppableId]: destList,
//     });
//   }

//   function comprobar() {
//     let correcto = true;
//     for (const comercio of columnaA) {
//       const asignado = listas[comercio][0];
//       if (asignado !== respuestaCorrecta[comercio]) {
//         correcto = false;
//         break;
//       }
//     }
//     if (correcto) {
//       unlockedChallenge(next, id, dispatch);
//     }
//     setResultado(
//       correcto ? "✅ ¡Todo correcto!" : "❌ Hay errores en la relación"
//     );
//   }

//   function renderLista(id, items, isSlot = false) {
//     return (
//       <Droppable droppableId={id}>
//         {(provided) => (
//           <div
//             ref={provided.innerRef}
//             {...provided.droppableProps}
//             style={{
//               background: isSlot
//                 ? "var(--color-fondo-o)"
//                 : "var(--color-fondo-o)",
//               padding: "10px",
//               width: isSlot ? "250px" : "250px",
//               minHeight: "50px",
//               borderRadius: "6px",
//               border: "1px dashed #ccc",
//               display: "block",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             {items.map((item, index) => (
//               <Draggable key={item} draggableId={item} index={index}>
//                 {(provided) => (
//                   <div
//                     ref={provided.innerRef}
//                     {...provided.draggableProps}
//                     {...provided.dragHandleProps}
//                     style={{
//                       background: "var(--color-bordes2-o)",
//                       padding: "8px",
//                       borderRadius: "4px",
//                       border: "1px solid #ccc",
//                       ...provided.draggableProps.style,
//                     }}
//                   >
//                     {item}
//                   </div>
//                 )}
//               </Draggable>
//             ))}
//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable>
//     );
//   }

//   return (
//     <section>
//               <h3>{instrucciones}</h3>
//       <div style={{ display: "grid" , gridTemplateColumns:"repeat(auto-fill,minmax(400px,1fr))", gap: "2rem", margin: "2rem 0", justifyItems: "center"}}>

//         <DragDropContext onDragEnd={onDragEnd}>
//           <div
//             style={{ display: "flex", flexDirection: "column", gap: "10px" }}
//           >
//             {columnaA.map((comercio) => (
//               <div
//                 key={comercio}
//                 style={{ display: "flex", gap: "10px", alignItems: "center", width:"fit-content" }}
//               >
//                 <div style={{ width: "250px" }}>{comercio}</div>
//                 {renderLista(comercio, listas[comercio], true)}
//               </div>
//             ))}
//           </div>
//           <div style={{textAlign: "left", width:"fit-content"}}>
//             <h4 style={{ marginTop: "20px" }}>Opciones disponibles</h4>
//             {renderLista("disponibles", listas.disponibles)}
//           </div>
//         </DragDropContext>
//         {resultado && <p>{resultado}</p>}
//       </div>
//       <button className="btn" onClick={comprobar} style={{ marginTop: "10px" }}>
//         Comprobar
//       </button>
//     </section>
//   );
// }
export default function Relation({ reto, id, next }) {
  const { dispatch } = usePlayer();
  const { instrucciones, columnaA, columnaB, respuestaCorrecta } = reto;
  const [initialState, setInitialState] = useState({
    list: columnaB,
    // .map crea parejas [categoria, ""]
    // objecto.fromentries convierte en objetos las parejas ["", ""]. El resultado es un solo objeto.
    userResult: Object.fromEntries(columnaA.map((comercio) => [comercio, ""])),
  });
  function onDragEnd(result) {
    const { source, destination } = result;
  }
  return (
    <section>
      <DragDropContext onDragEnd={onDragEnd}>
        {/* elementos disponibles en horizontal columna B*/}
        {/* COLUMNA B */}
        <Droppable droppableId="columnaB">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {columnaB.map((e, i) => (
                <Draggable key={e} draggableId={e} index={i}>
                  {(provided) =>
                  <div
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                  >{e}</div>}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </section>
  );
}
