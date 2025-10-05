import React from "react";
import { Helmet } from "react-helmet";
import { tribus } from "../../data/tribus";
import { Link } from "react-router-dom";
import { usePlayer } from "../context/PlayerContext";
import styles from "../styles/allTribus.module.css";

const AllTribusPage = () => {
  const { state } = usePlayer();
  const unlockTribes = (id) => state.unlockedTribe.includes(id);
  const challengeUnresolved = (id) => state.doneChallenge.includes(id);
  const theClass = (id) =>
    `icono-desbloqueado icono ${challengeUnresolved(id) ? "" : "unresolved"}`;

  return (
    <>
      <Helmet>
        <title>Tribus | Juego de Profesiones</title>
      </Helmet>
      <section className={styles.section}>
        <h1>El planeta de las profesiones</h1>
        <div className={styles.text_container}>
          <div className={styles.p}>
            <p>
              <strong>La aventura ha comenzado.</strong>
            </p>
            <p>
              Solo podrás visitar las tribus cuando estén desbloqueadas; lo
              sabrás porque aparecerán en rojo. Haz clic en la tribu para
              entrar. Dentro te espera un reto difícil: si lo superas, la tribu
              te mostrará las ocupaciones con mayor demanda de empleo. Si
              seleccionas <strong>“Saber más”</strong>, accederás a información
              adicional. También puedes <strong>“Guardar”</strong> la ocupación
              para revisarla más tarde.
            </p>
            <p></p>
            <p>
              Cuando termines, regresa a la página principal y verás que has
              desbloqueado una nueva tribu. Al finalizar el juego, te pediremos
              que respondas unas breves preguntas sobre tu experiencia para
              ayudarnos a mejorar la aplicación.
            </p>
            <p>¡Mucha suerte!</p>
          </div>
        </div>
        <div className={styles.grid}>
          {tribus.map((tribu, index) => {
            const Icon = tribu.imagen;
            return unlockTribes(tribu.id) ? (
              <Link to={`/${tribu.id}`} key={index}>
                <Icon name={theClass(tribu.id)} stroke="green" fill="none" />
              </Link>
            ) : (
              <Icon
                key={index}
                name="icono-bloqueado icono"
                stroke="green"
                fill="none"
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default AllTribusPage;
