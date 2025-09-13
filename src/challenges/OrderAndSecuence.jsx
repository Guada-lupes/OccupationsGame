import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { usePlayer } from "../context/PlayerContext";
import { unlockedChallenge } from "../../utils/unlockedChallenge";
import styles from "../styles/orderSecuence.module.css";

export default function OrdenarSecuencia({ reto, id, next }) {
  const { dispatch } = usePlayer();

  //guardamos la pregunta
  const pregunta = reto.preguntas[0];
  //guardamos los items mezclados
  const [items, setItems] = useState(shuffleArray(pregunta.opciones));

  const [resultado, setResultado] = useState(null);
  //ordenamos de forma aleatoria las opciones
  function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }
  //maneja todo lo que suceda en el contexto de drageo
  function handleOnDragEnd(result) {
    //si destino es null es que no hay cambio
    if (!result.destination) return;
    //hacemos una copia del array de opciones para manipularla
    const reordered = Array.from(items);
    //cortamos el elemento que se esta moviendo. Cortar genera un array, en este caso con sólo un elemento, por eso const [moved] es igual a move[0]
    const [moved] = reordered.splice(result.source.index, 1);
    //integramos el elemento en su nueva posición
    reordered.splice(result.destination.index, 0, moved);
    //actualizamos el estado de items
    setItems(reordered);
  }

  function comprobarRespuesta() {
    //para poder comparar ambos arrays los convertimos a string
    const correcto =
      JSON.stringify(items) === JSON.stringify(pregunta.respuestaCorrecta);
    setResultado(correcto ? "✅ ¡Correcto!" : "❌ Intenta de nuevo");
    if (correcto) {
      unlockedChallenge(next, id, dispatch);
    }
  }

  return (
    <section className={styles.section}>
      <p className={styles.p}>{pregunta.enunciado}</p>
      <div className={styles.container}>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="opciones">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {items.map((opcion, index) => (
                  <Draggable key={opcion} draggableId={opcion} index={index}>
                    {(provided) => (
                      <li
                        className={styles.li}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          background: "var(--color-bordes2-o)",
                          padding: "10px",
                          marginBottom: "8px",
                          borderRadius: "4px",
                          ...provided.draggableProps.style,
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
        {resultado && <p>{resultado}</p>}
      </div>
      <button
        className="btn"
        onClick={comprobarRespuesta}
        style={{ marginTop: "10px" }}
      >
        Comprobar
      </button>
    </section>
  );
}
