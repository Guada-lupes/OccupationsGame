import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { usePlayer } from "../context/PlayerContext";
import { unlockedChallenge } from "../../utils/unlockedChallenge";
import {
  bringBack,
  changeOrder,
  userChoice,
  changeCategorie,
  checkAnswer,
  changeBetweenCategories,
} from "../../utils/dragAndDropRelation.jsx";
import styles from "../styles/relation.module.css";

export default function Relation({ reto, id, next }) {
  const { dispatch } = usePlayer();
  const { instrucciones, columnaA, columnaB, respuestaCorrecta } = reto;
  const [initialState, setInitialState] = useState({
    list: columnaB,
    userResult: Object.fromEntries(
      columnaA.map((comercio, i) => [comercio, ""])
    ),
  });
  const [resultado, setResultado] = useState(null);

  function onDragEnd(result) {
    const { source, destination, draggableId } = result;
    const from = source.droppableId;
    const to = destination.droppableId;
    const startIndex = source.index;
    const endIndex = destination.index;
    const item = draggableId;

    if (!destination) return;
    if (from === to && startIndex === endIndex) return;
    //Posición en la lista
    if (to === "items" && from === "items") {
      changeOrder(startIndex, endIndex, item, setInitialState, initialState);
      return;
    }
    //de items a categoria
    if (from === "items" && to !== "items")
      userChoice(setInitialState, to, item, initialState);
    //de categoria a items
    if (from !== "items" && to === "items") {
      console.log("si es");
      bringBack(setInitialState, initialState, endIndex, item, from);
    }
    //de cateogoria a categoria vacia
    if (from !== "items" && to !== "items") {
      if (initialState.userResult[to] === "") {
        changeCategorie(setInitialState, from, to, item, initialState);
      }
      changeBetweenCategories(setInitialState, from, to, item, initialState);
    }
  }
  function check() {
    let correcto = true;
    let answer = checkAnswer(initialState, respuestaCorrecta, setResultado);
    if (!answer) {
      correcto = false;
    }
    if (answer) {
      unlockedChallenge(next, id, dispatch);
    }
    setResultado(
      correcto ? "✅ ¡Todo correcto!" : "❌ Hay elementos mal clasificados"
    );
  }
  return (
    <section className={styles.section}>
      <p>{reto.instrucciones}</p>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className={styles.container}>
          {/* elementos disponibles en horizontal columna B*/}
          {/* COLUMNA B */}
          <Droppable droppableId="items" direction="horizontal">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={styles.zone_items}
                data-on-dragging={snapshot.isDraggingOver}
              >
                {initialState.list.map((e, i) => (
                  <Draggable key={e} draggableId={e} index={i}>
                    {(provided, snapshot) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className={styles.draggable}
                      >
                        <p>{e}</p>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          {/* ColumnaA */}
          <div className={styles.zone_categories}>
            {Object.keys(initialState.userResult).map((c, i) => (
              <p key={i}><strong>{c}</strong></p>
            ))}
          </div>
          {/* User-Choice */}
          <div className={styles.zone_useChoice}>
            {Object.entries(initialState.userResult).map(
              ([categoria, elemento], i) => (
                <Droppable droppableId={categoria} key={categoria}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className={styles.categorie_drop}
                      data-on-dragging={snapshot.isDraggingOver}
                    >
                      {elemento && (
                        <Draggable
                          key={`selected${elemento}`}
                          draggableId={elemento}
                          index={0}
                        >
                          {(provided) => (
                            <div
                              {...provided.draggableProps}
                              ref={provided.innerRef}
                              className={styles.draggable}
                            >
                              <p {...provided.dragHandleProps}>{elemento}</p>
                            </div>
                          )}
                        </Draggable>
                      )}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              )
            )}
          </div>
        </div>
      </DragDropContext>
      <p>{resultado}</p>
      <button className="btn" onClick={check}>
        Comprobar
      </button>
    </section>
  );
}
