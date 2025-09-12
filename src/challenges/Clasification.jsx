import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { usePlayer } from "../context/PlayerContext";
import { unlockedChallenge } from "../../utils/unlockedChallenge";
import styles from "../styles/clasification.module.css";

// export default function Clasification({ reto, id, next }) {
//   const { dispatch } = usePlayer();
//   //extraemos valores
//   const { instrucciones, elementos, categorias } = reto;

//   // Estado inicial: todos los elementos en "porClasificar"
//   const initialState = {
//     porClasificar: elementos,
//     ...Object.keys(categorias).reduce(
//       (acc, cat) => ({ ...acc, [cat]: [] }),
//       {}
//     ),
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
//     destList.splice(destination.index, 0, moved);

//     setListas({
//       ...listas,
//       [source.droppableId]: sourceList,
//       [destination.droppableId]: destList,
//     });
//   }

//   function comprobar() {
//     let correcto = true;

//     for (const categoria in categorias) {
//       const correctosEsperados = categorias[categoria];
//       const actuales = listas[categoria];
//       if (
//         correctosEsperados.length !== actuales.length ||
//         !actuales.every((item) => correctosEsperados.includes(item))
//       ) {
//         correcto = false;
//         break;
//       }
//     }
//     if (correcto) {
//       unlockedChallenge(next, id, dispatch)
//     }
//     setResultado(
//       correcto ? "✅ ¡Todo correcto!" : "❌ Hay elementos mal clasificados"
//     );
//   }

//   function renderLista(id, items) {
//     return (
//       <Droppable droppableId={id}>
//         {(provided) => (
//           <div
//             ref={provided.innerRef}
//             {...provided.droppableProps}
//             style={{
//               background: "var(--color-fondo-o)",
//               padding: "10px",
//               width: "250px",
//               minHeight: "200px",
//               borderRadius: "6px",
//             }}
//           >
//             <h4>{id !== "porClasificar" ? id : "Por clasificar"}</h4>
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
//                       marginBottom: "8px",
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
//     <div>
//       <h3>{instrucciones}</h3>
//       <DragDropContext onDragEnd={onDragEnd}>
//         <div style={{ display: "flex", gap: "20px", marginTop: "2rem", justifyContent:"center", marginBottom: "2rem" }}>
//           {renderLista("porClasificar", listas.porClasificar)}
//           {Object.keys(categorias).map((cat) => renderLista(cat, listas[cat]))}
//         </div>
//       </DragDropContext>

//       <button className="btn" onClick={comprobar} style={{ marginTop: "10px" }}>
//         Comprobar
//       </button>

//       {resultado && <p>{resultado}</p>}
//     </div>
//   );
// }

// export default function Clasification({ reto, id, next }) {
//   const { dispatch } = usePlayer();
//   //extraemos valores
//   const { instrucciones, elementos, categorias } = reto;
//   //Nombres de las categorias
//   const categoriasNombres = Object.keys(categorias);
//   //Lista de elementos en la zona principal
//   const [list, setList] = useState(elementos);
//   // Estado inicial que guarda las elecciones del usuario
//   const [userChoice, setUserChoice] = useState(() => {
//     const inicial = {};
//     categoriasNombres.forEach((categoria) => {
//       inicial[categoria] = [];
//     });
//     return inicial;
//   });
//   const [resultado, setResultado] = useState(null);
//   let valores = Object.values(userChoice).flat() ?? [];

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

//     if (zone === "elementos") {
//       // Solo limpiar de categorías
//       setUserChoice((prevState) => {
//         const newState = { ...prevState };
//         Object.keys(newState).forEach((clave) => {
//           newState[clave] = newState[clave].filter((item) => item !== data);
//         });
//         return newState;
//       });
//       return;
//     }

//     if (userChoice[zone]?.includes(data)) return;
//     // Mover a nueva categoría
//     setUserChoice((prevState) => {
//       const newState = { ...prevState };
//       // Remover de todas las zonas
//       Object.keys(newState).forEach((clave) => {
//         newState[clave] = newState[clave].filter((item) => item !== data);
//       });
//       // Añadir a la nueva zona
//       newState[zone] = [...newState[zone], data];
//       return newState;
//     });
//   }

//   //Funcion comprobar resultado
//   function checkAnswer() {
//     let correcto = true;
//     for (let i = 0; i < categoriasNombres.length; i++) {
//       let cat = categoriasNombres[i];
//       let userArray = userChoice[cat];
//       let correctArray = categorias[cat];

//       // Comprobar si tienen la misma longitud
//       if (userArray.length !== correctArray.length) {
//         correcto = false;
//         break;
//       }
//       // Comprobar si cada elemento del usuario está en la respuesta correcta
//       for (let j = 0; j < userArray.length; j++) {
//         if (!correctArray.includes(userArray[j])) {
//           correcto = false;
//           break;
//         }
//       }
//     }
//     if (correcto) {
//       unlockedChallenge(next, id, dispatch);
//     }
//     setResultado(
//       correcto ? "✅ ¡Todo correcto!" : "❌ Hay elementos mal clasificados"
//     );
//   }
//   return (
//     <section>
//       <p className={styles.p}>{instrucciones}</p>
//       <div className={styles.container}>
//         <div
//           // Zona de elementos drageables
//           id="elementos"
//           className={styles.zone}
//           onDragOver={dragOver}
//           onDrop={drop}
//         >
//           <h3>Elementos</h3>
//           <div className={styles.items_grid}>
//             {elementos
//               .filter((elemento) => !valores?.includes(elemento))
//               .map((e) => (
//                 // Elementos drageables

//                 <div
//                   className={styles.drageable}
//                   draggable
//                   key={e}
//                   id={e}
//                   onDragStart={(e) => dragstar(e)}
//                 >
//                   {e}
//                 </div>
//               ))}
//           </div>
//         </div>
//         {categoriasNombres.map((categoria, i) => (
//           <div
//             className={styles.zone}
//             id={categoria}
//             key={i}
//             onDragOver={dragOver}
//             onDrop={drop}
//           >
//             <h3>{categoria}</h3>
//             <div className={styles.items_grid}>
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
//           </div>
//         ))}
//       </div>
//       <p>{resultado}</p>
//       <button className="btn" onClick={checkAnswer}>
//         Comprobar
//       </button>
//     </section>
//   );
// }


export default function Clasification({ reto, id, next }) {
  const { dispatch } = usePlayer();
  const { elementos, categorias } = reto;
  const [resultado, setResultado] = useState(null);
  const [userChoice, setUserChoice] = useState(() => {
    const inicial = { elementos: elementos }; // Lista principal
    Object.keys(categorias).forEach(cat => {
      inicial[cat] = [];
    });
    return inicial;
  });

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination, draggableId } = result;
    
    if (source.droppableId === destination.droppableId) return;

    setUserChoice(prev => {
      const newState = { ...prev };
      
      // Remover del origen
      newState[source.droppableId] = newState[source.droppableId].filter(
        item => item !== draggableId
      );
      
      // Añadir al destino
      newState[destination.droppableId] = [
        ...newState[destination.droppableId],
        draggableId
      ];
      
      return newState;
    });
  };

  // Función para comprobar respuestas
  const checkAnswer = () => {
    let correcto = true;
    
    for (let categoria of Object.keys(categorias)) {
      const userArray = userChoice[categoria];
      const correctArray = categorias[categoria];
      
      // Comprobar si tienen la misma longitud
      if (userArray.length !== correctArray.length) {
        correcto = false;
        break;
      }
      
      // Comprobar si cada elemento del usuario está en la respuesta correcta
      for (let item of userArray) {
        if (!correctArray.includes(item)) {
          correcto = false;
          break;
        }
      }
      
      if (!correcto) break;
    }
    
    if (correcto) {
      unlockedChallenge(next, id, dispatch); 

    } 
        setResultado(
      correcto ? "✅ ¡Todo correcto!" : "❌ Hay elementos mal clasificados"
    );
  };

  return (
    <section>
      <p>{reto.instrucciones}</p>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className={styles.container}>
          {/* Zona de elementos */}
          <Droppable droppableId="elementos">
            {(provided) => (
              <div 
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={styles.zone}
              >
                <h4>Elementos</h4>
                {userChoice.elementos.map((item, index) => (
                  <Draggable key={item} draggableId={item} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`${styles.drageable} ${snapshot.isDragging ? styles.dragging : ''}`}
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

          {/* Zonas de categorías */}
          {Object.keys(categorias).map(categoria => (
            <Droppable key={categoria} droppableId={categoria}>
              {(provided) => (
                <div 
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={styles.zone}
                >
                  <h3>{categoria}</h3>
                  {userChoice[categoria].map((item, index) => (
                    <Draggable key={item} draggableId={item} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`${styles.drageable} ${snapshot.isDragging ? styles.dragging : ''}`}
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
          ))}
        </div>
      </DragDropContext>
      <p>{resultado}</p>
      <button className="btn" onClick={checkAnswer}>
        Comprobar
      </button>
    </section>
  );
}