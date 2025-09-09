import React from "react";
import { usePlayer } from "../context/PlayerContext";
import styles from "../styles/gameComplete.module.css";

const GameCompletePage = () => {
  const { state } = usePlayer();
  const name = state.name.length > 1 ? ` ${state.name}` : "";
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1>Has superado el juego{name.toUpperCase()}</h1>
        <p>
          ¡Hola! Si has llegado hasta aquí es porque ya descubriste todas las
          tribus y sus ocupaciones ¡Felicidades! La aplicación "El planeta de
          las profesiones" es un proyecto personal que pretende ser una
          herramienta sencilla y accesible para conocer el mercado de trabajo y
          sus principales ocuapciones asi como ofrecer información practica
          sobre titulaciones, competencias, funciones y contratación. Espero que
          haya sido de utilidad para ti. Para seguir mejorando la aplicación te
          voy a pedir que respondas unas pocas preguntas. Tu opinión es de gran
          utilidad para mi. ¡Gracias de antemano!
        </p>
        <p>Cuando finalices, recuerda "Salir" de la aplicación para borrar tu progreso.</p>
        <div>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScE0QAoDQMVNag7hdOmAnrA-L1TGfF9aL53RpwLjvW3pdXmSg/viewform?embedded=true"
            width="640"
            height="2481"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Cargando…
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default GameCompletePage;
