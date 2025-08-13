import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

export default function Clasification({ reto }) {
  const { instrucciones, elementos, categorias } = reto;
  
  // Estado inicial: todos los elementos en "porClasificar"
  const initialState = {
    porClasificar: elementos,
    ...Object.keys(categorias).reduce((acc, cat) => ({ ...acc, [cat]: [] }), {})
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
      [destination.droppableId]: destList
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

    setResultado(correcto ? "✅ ¡Todo correcto!" : "❌ Hay elementos mal clasificados");
  }

  function renderLista(id, items) {
    return (
      <Droppable droppableId={id}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{
              background: "#ae0707ff",
              padding: "10px",
              width: "250px",
              minHeight: "200px",
              borderRadius: "6px"
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
                      background: "#6fe45dff",
                      padding: "8px",
                      marginBottom: "8px",
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                      ...provided.draggableProps.style
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
        <div style={{ display: "flex", gap: "20px" }}>
          {renderLista("porClasificar", listas.porClasificar)}
          {Object.keys(categorias).map((cat) =>
            renderLista(cat, listas[cat])
          )}
        </div>
      </DragDropContext>

      <button onClick={comprobar} style={{ marginTop: "10px" }}>
        Comprobar
      </button>

      {resultado && <p>{resultado}</p>}
    </div>
  );
}
