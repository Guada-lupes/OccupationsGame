import React from "react";
import { usePlayer } from "../context/PlayerContext";
import styles from "../styles/gameComplete.module.css";
import { logOut } from "../../utils/login";
import Button from "../components/Button";

const GameCompletePage = () => {
  const { state, dispatch } = usePlayer();
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
          sus principales ocupaciones asi como ofrecer información practica
          sobre titulaciones, competencias, funciones y contratación. Espero que
          haya sido de utilidad para ti. Para seguir mejorando la aplicación te
          voy a pedir que respondas unas pocas preguntas. Tu opinión es de gran
          utilidad para mi. 
        </p>
        <p>¡Gracias de antemano!</p>
        <div>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScE0QAoDQMVNag7hdOmAnrA-L1TGfF9aL53RpwLjvW3pdXmSg/viewform?embedded=true"
            width="640"
            height="2155"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Cargando…
          </iframe>
        </div>
        <Button link={"/"} onClick={() => logOut(dispatch)} texto={"Salir"}/>
      </div>
    </section>
  );
};

export default GameCompletePage;
