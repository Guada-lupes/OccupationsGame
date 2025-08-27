import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { usePlayer } from "../context/PlayerContext";
import { unlockedChallenge } from "../../utils/unlockedChallenge";
import styles from "../styles/clasification.module.css";

export default function Clasification({ reto, id, next }) {
  const { dispatch } = usePlayer();
  //extraemos valores
  const { instrucciones, elementos, categorias } = reto;

  // Estado inicial: todos los elementos en "porClasificar"
  const initialState = {
    porClasificar: elementos,
    ...Object.keys(categorias).reduce(
      (acc, cat) => ({ ...acc, [cat]: [] }),
      {}
    ),
  };

  const [listas, setListas] = useState(initialState);
  const [resultado, setResultado] = useState(null);

  function onDragEnd(result) {
    if (!result.destination) return;

    const { source, destination } = result;

    // Evitar cambios si es la misma posición
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const sourceList = Array.from(listas[source.droppableId]);
    const destList = Array.from(listas[destination.droppableId]);
    const [moved] = sourceList.splice(source.index, 1);
    destList.splice(destination.index, 0, moved);

    setListas({
      ...listas,
      [source.droppableId]: sourceList,
      [destination.droppableId]: destList,
    });
  }

  function comprobar() {
    let correcto = true;

    for (const categoria in categorias) {
      const correctosEsperados = categorias[categoria];
      const actuales = listas[categoria];
      if (
        correctosEsperados.length !== actuales.length ||
        !actuales.every((item) => correctosEsperados.includes(item))
      ) {
        correcto = false;
        break;
      }
    }
    if (correcto) {
      unlockedChallenge(next, id, dispatch)
    }
    setResultado(
      correcto ? "✅ ¡Todo correcto!" : "❌ Hay elementos mal clasificados"
    );
  }

  function renderLista(id, items) {
    return (
      <Droppable droppableId={id}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{
              background: "var(--color-fondo-o)",
              padding: "10px",
              width: "250px",
              minHeight: "200px",
              borderRadius: "6px",
            }}
          >
            <h4>{id !== "porClasificar" ? id : "Por clasificar"}</h4>
            {items.map((item, index) => (
              <Draggable key={item} draggableId={item} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      background: "var(--color-bordes2-o)",
                      padding: "8px",
                      marginBottom: "8px",
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                      ...provided.draggableProps.style,
                    }}
                  >
                    {item}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  }

  return (
    <div>
      <h3>{instrucciones}</h3>
      <DragDropContext onDragEnd={onDragEnd}>
        <div style={{ display: "flex", gap: "20px", marginTop: "2rem", justifyContent:"center", marginBottom: "2rem" }}>
          {renderLista("porClasificar", listas.porClasificar)}
          {Object.keys(categorias).map((cat) => renderLista(cat, listas[cat]))}
        </div>
      </DragDropContext>

      <button className="btn" onClick={comprobar} style={{ marginTop: "10px" }}>
        Comprobar
      </button>

      {resultado && <p>{resultado}</p>}
    </div>
  );
}

// export default function Clasification({ reto, id, next }) {
//   const { dispatch } = usePlayer();
//   //extraemos valores
//   const { instrucciones, elementos, categorias } = reto;
//   //Nombres de las categorias
//   const categoriasNombres = Object.keys(categorias);
//   // Estado inicial que guarda las elecciones del usuario
//   const [userChoice, setUserChoice] = useState(() => {
//     const inicial = {};
//     categoriasNombres.forEach((categoria) => {
//       inicial[categoria] = [];
//     });
//     return inicial;
//   });
//   let valores = Object.values(userChoice).flat() ?? [];
//   console.log(valores);

//   //Función de los elemntos drageables
//   function dragstar(e) {
//     e.dataTransfer.setData("text/plain", e.target.id);
//   }
//   //Función dragOver y drop en las zonas de descarga
//   function dragOver(e) {
//     e.preventDefault();
//   }
//   //Función drop
//   function drop(e) {
//     e.preventDefault();
//     const data = e.dataTransfer.getData("text/plain");
//     const zone = e.currentTarget.id;
//     //actualiza el estado
//     setUserChoice((prevState) => ({
//       ...prevState,
//       [zone]: [...prevState[zone], data],
//     }));
//   }
//   //Funcion comprobar resultado
//   function checkAnswer() {
//     for (let i = 0; i < categoriasNombres.length; i++) {
//       let cat = categoriasNombres[i];
//       let userArray = userChoice[cat];
//       let correctArray = categorias[cat];
//       // Comprobar si tienen la misma longitud
//       if (userArray.length !== correctArray.length) {
//         alert("Has fallado");
//         return;
//       }
//       // Comprobar si cada elemento del usuario está en la respuesta correcta
//       for (let j = 0; j < userArray.length; j++) {
//         if (!correctArray.includes(userArray[j])) {
//           alert("Has fallado");
//           return;
//         }
//       }
//     }
//     alert("¡Correcto!");
//   }
//   return (
//     <section>
//       <p>{instrucciones}</p>
//       <div className={styles.container}>
//         {/* Elementos drageables */}
//         <div className={styles.drageablesZone}>
//           <h3>Elementos</h3>
//           {elementos
//             .filter((elemento) => !valores?.includes(elemento))
//             .map((e) => (
//               <div
//                 className={styles.drageable}
//                 draggable
//                 key={e}
//                 id={e}
//                 onDragStart={(e) => dragstar(e)}
//               >
//                 {e}
//               </div>
//             ))}
//         </div>
//         <div className={styles.zonesss}>
//           {categoriasNombres.map((categoria, i) => (
//             <div
//               id={categoria}
//               key={i}
//               className={styles.zone}
//               onDragOver={dragOver}
//               onDrop={drop}
//             >
//               <h3>{categoria}</h3>
//               {userChoice[categoria].map((item, i) => (
//                 <div
//                   className={styles.drageable}
//                   draggable
//                   key={item}
//                   id={item}
//                   onDragStart={(e) => dragstar(e)}
//                 >
//                   {item}
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//       <button onClick={checkAnswer}>Comprobar</button>
//     </section>
//   );
// }
