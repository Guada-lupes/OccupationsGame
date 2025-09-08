import React from 'react';
import { usePlayer } from '../context/PlayerContext';
import styles from "../styles/gameComplete.module.css"

const GameCompletePage = () => {
  const { state } = usePlayer();
  const name = state.name.length > 1 ? ` ${state.name}` : "";
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                          <h1>Has superado el juego{name.toUpperCase()}</h1>
            <p>Tu viaje por el planeta de las profesiones a finalizado. Has tenido la oportunidad de conocer otras culturas y costumbres, pero sobretodo, actividades económicas y ocupaciones.</p>
            <p>Espero que te hayas llenado de sabiduría. Antes de marcharte te voy a pedir que respondas una encuesta para seguir mejorando la experiencia. Mucha suerte en tus próximos viajes, saludos.</p>
            <div>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScE0QAoDQMVNag7hdOmAnrA-L1TGfF9aL53RpwLjvW3pdXmSg/viewform?embedded=true" width="640" height="2481" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
            </div>  
            </div>

        </section>
    );
};

export default GameCompletePage;