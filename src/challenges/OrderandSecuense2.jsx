import React, { useState } from "react";

const OrderAndSecuence = ({ reto }) => {
  const [opciones, setOpciones] = useState(() =>
    mezclar([...reto.preguntas[0].opciones])
  );
  const respuestasCorrectas = reto.preguntas[0].respuestaCorrecta;

  function mezclar(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function startDrag(e, index) {
    e.dataTransfer.setData("text/plain", index);
  }

  function drop(e, destinoIndex) {
    e.preventDefault();
    const origenIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);
    if (origenIndex === destinoIndex) return;

    const nuevasOpciones = [...opciones];
    const [moved] = nuevasOpciones.splice(origenIndex, 1);
    nuevasOpciones.splice(destinoIndex, 0, moved);
    setOpciones(nuevasOpciones);
  }

  function items() {
    return opciones.map((item, index) => (
      <div
        key={index}
        draggable="true"
        onDragStart={(e) => startDrag(e, index)}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => drop(e, index)}
        style={{
          padding: "8px",
          border: "1px solid #ccc",
          marginBottom: "4px",
          background: "#a21414ff",
        }}
      >
        {item}
      </div>
    ));
  }

  function comprobar() {
    const esCorrecto =
      JSON.stringify(opciones) === JSON.stringify(respuestasCorrectas);
    alert(esCorrecto ? "Correcto" : "Inténtalo otra vez");
  }

  return (
    <div>
      <h3>{reto.preguntas[0].enunciado}</h3>
      <div>{items()}</div>
      <button onClick={comprobar}>Confirmar</button>
    </div>
  );
};

export default OrderAndSecuence;
