import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { usePlayer } from "../context/PlayerContext";
import { unlockedChallenge } from "../../utils/unlockedChallenge";
import styles from "../styles/clasification.module.css";


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
    <section className={styles.section}>
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
                <h3>Elementos</h3>
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
      <button className="btn button" onClick={checkAnswer}>
        Comprobar
      </button>
    </section>
  );
}