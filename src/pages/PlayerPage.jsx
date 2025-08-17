import React from "react";
import { usePlayer } from "../context/PlayerContext";
import { tribus } from "../../data/tribus";

const PlayerPage = () => {
  const { state } = usePlayer();

  let unlockedTribus = [];
  for (let i = 0; i < state.doneChallenge.length; i++) {
    tribus.map((t) => {
      if (state.doneChallenge[i] === t.id) {
        unlockedTribus.push(t.tribu);
      }
    });
  }

  return (
    <section>
          <div>
      <h1>Revisa tu progreso {state.name}</h1>
      <h2>Tribus desbloqueadas</h2>
      {unlockedTribus.length<=0 ? (<p>Aún no has desbloqueado ninguna Tribu</p>) :
(              <ul>
        {unlockedTribus.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>)
      }

      <h2>Ocupaciones guardadas</h2>
      {state.savedOccupations<=0 ? (<p>Aún no has guardado ninguna ocupación</p>) :
      (      <ul>
        {state.savedOccupations.map((o, i) => (
          <li key={i}>
            <h3>{o.nombre}</h3>
            <p>{o.descripcion}</p>
            <a href={o.link}>Más información</a>
          </li>
        ))}
      </ul> )
      }

    </div>
    </section>

  );
};

export default PlayerPage;
