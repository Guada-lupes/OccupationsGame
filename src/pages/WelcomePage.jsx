import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePlayer } from "../context/PlayerContext";
import { checkPassword } from "../../utils/login";
import styles from "../styles/welcomePage.module.css";
import { gsap } from "gsap";

export const WelcomePage = () => {
  const { state, dispatch } = usePlayer();
  const [password, setPassword] = useState("hola");
  const [arrancar, setArrancar] = useState(false);

  const navigate = useNavigate();
  const [name, setName] = useState("");

  //guardar contraseña
  function getPassword(e) {
    setPassword(e.target.value);
  }
  //verificar contraseña
  //obtener nombre
  function getName(e) {
    const value = e.target.value;
    setName(value);
  }

  useEffect(() => {
    if (state.login) {
      setArrancar(true);
      setTimeout(() => {
        navigate("/landing");
      }, 2000);
    }
  gsap.to("#moneda", {
    duration: 3,
    rotation: 360,
    scale: 2
  })

  }, [state.login]);


  return (
    <section className={styles.section}>
      <form
        onSubmit={() => checkPassword(name, password, dispatch)}
        className={styles.container}
      >
        <h1 className={styles.h1}>Explora el planeta de las profesiones</h1>
        <input
          required
          spellCheck="false" //No corrige la ortografía
          autoComplete="off" // Mejor para nombres
          autoCapitalize="words" // Capitaliza cada palabra
          id="name"
          minLength="3" //Mínimo de letras
          type="text"
          onChange={(e) => getName(e)}
          value={name}
          placeholder="Tu nombre"
        />
        <input
          required
          type="password"
          name="password"
          id="password"
          placeholder="Introduce la contraseña"
          value={password}
          onChange={(e) => getPassword(e)}
        />
        <button type="submit" className="btn">
          Comenzar
        </button>
        
      </form>
      <img
        className={`${styles.img} ${arrancar ? styles.img_arrancar : ""}`}
        src="/jeep.avif"
        alt="Un jeep que se vibra"
        width="1024"
        height="1024"      />
    </section>
  );
};

export default WelcomePage;
