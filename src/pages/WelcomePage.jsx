import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useUser } from "../trash/useUser";
import { usePlayer } from "../context/PlayerContext";
import { checkPassword } from "../../utils/login";
import styles from "../styles/welcomePage.module.css";

export const WelcomePage = () => {
  const { state, dispatch } = usePlayer();
  const [password, setPassword] = useState("hola");
  const [arrancar, setArrancar] = useState(false);

  const navigate = useNavigate();
  const { updateName } = useUser();
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
  //actualiza el nombre bien
  useEffect(() => {
    updateName(name);
  }, [name]);

  useEffect(() => {
    if (state.login) {
      setArrancar(true);
      setTimeout(() => {
        navigate("/landing");
      }, 2000);
    }
  }, [state.login]);
  return (
    <div className={styles.container}>
      <h1>Explora el planeta de las profesiones</h1>
      <input
        type="text"
        onChange={(e) => getName(e)}
        value={name}
        placeholder="Introduce tu nombre"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Introduce la contraseña"
        value={password}
        onChange={(e) => getPassword(e)}
      />
      <Button
        onClick={() => checkPassword(name, password, dispatch)}
        texto={"Comenzar"}
      />
      <img
        className={`${styles.img} ${arrancar ? styles.img_arrancar : ""}`}
        src="..\..\public\jeep.png"
        alt="Un jeep que se vibra"
      />
    </div>
  );
};

export default WelcomePage;
