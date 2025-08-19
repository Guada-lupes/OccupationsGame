import React from "react";
import { usePlayer } from "../context/PlayerContext";
import { tribus } from "../../data/tribus";
import Button from "../components/Button";
import styles from "../styles/playerPage.module.css";

const PlayerPage = () => {
  const { state } = usePlayer();

  let unlockedTribus = [];
  for (let i = 0; i < state.doneChallenge.length; i++) {
    tribus.map((t) => {
      if (state.doneChallenge[i] === t.id) {
        unlockedTribus.push(t);
      }
    });
  }

  return (
    <div className={styles.lados}>
      <section className={styles.section}>
        <h1>Revisa tu progreso {state.name}</h1>
        <img
          className={styles.img}
          src="/user.png"
          alt="Imagen de perfil de usuario"
        />
        {/* TRIBUS _______________________________________________________________________*/}
        <h2>Tribus desbloqueadas</h2>
        {unlockedTribus.length <= 0 ? (
          <p style={{ textAlign: "center" }}>
            Aún no has desbloqueado ninguna Tribu
          </p>
        ) : (
          <div className={styles.tribus_container}>
            {unlockedTribus.map((tribu, i) => {
              const Icon = tribu.imagen;
              return (
                <div className={styles.tribu} key={i}>
                  <Icon
                    name={"icono-desbloqueado icono-player"}
                    stroke="green"
                    fill="none"
                  />
                  <h3>{tribu.tribu}</h3>
                </div>
              );
            })}
          </div>
        )}

        <h2>Ocupaciones guardadas</h2>
        {/* ocupaciones _______________________________________________________________________*/}
        {state.savedOccupations <= 0 ? (
          <p style={{ textAlign: "center" }}>
            Aún no has guardado ninguna ocupación
          </p>
        ) : (
          <div className={styles.grid}>
            {state.savedOccupations.map((p, i) => (
              <div className="card" key={i}>
                <h3>{p.nombre}</h3>
                <p>{p.descripcion}</p>
                <div>
                  <Button
                    texto={"Saber más"}
                    onClick={() => window.open(p.link, "_blank")}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default PlayerPage;
