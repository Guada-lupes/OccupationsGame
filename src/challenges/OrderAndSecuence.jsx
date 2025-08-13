import React from 'react';
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useState } from 'react';


const OrderAndSecuence = ({reto}) => {
  const pregunta = reto.preguntas[0]; 
  const [items, setItems] = useState(shuffleArray(pregunta.opciones));
  const [resultado, setResultado] = useState(null);

  function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const reordered = Array.from(items);
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);

    setItems(reordered);
  }

  function comprobarRespuesta() {
    const correcto = JSON.stringify(items) === JSON.stringify(pregunta.respuestaCorrecta);
    setResultado(correcto ? "✅ ¡Correcto!" : "❌ Intenta de nuevo");
  }

  return (
    <div>
      <h3>{pregunta.enunciado}</h3>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="opciones">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef} style={{ listStyle: "none", padding: 0 }}>
              {items.map((opcion, index) => (
                <Draggable key={opcion} draggableId={opcion} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        background: "#a20606ff",
                        padding: "10px",
                        marginBottom: "8px",
                        borderRadius: "4px",
                        ...provided.draggableProps.style
                      }}
                    >
                      {opcion}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>

      <button onClick={comprobarRespuesta} style={{ marginTop: "10px" }}>
        Comprobar
      </button>

      {resultado && <p>{resultado}</p>}
    </div>
  );
};

export default OrderAndSecuence;