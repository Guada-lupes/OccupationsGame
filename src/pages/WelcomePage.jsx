import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useUser } from "../../utils/useUser";

export const WelcomePage = () => {
  const [password, setPassword] = useState("hola");
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false); // <-- nuevo estado
  const { updateName } = useUser();
  const [name, setName] = useState("");

  //guardar contraseña
  function getPassword(e) {
    setPassword(e.target.value);
  }
  //verificar contraseña
  function checkPassword() {
    let p = import.meta.env.VITE_PASSWORD;
    if (password === p) {
setIsAuth(true)
    }
  }

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
    if (isAuth) {
      navigate("/landing");
    }
  }, [isAuth, navigate]);
  return (
    <div>
      <h1>Explora el planeta de las profesiones</h1>
      <input
        type="text"
        onChange={(e) => getName(e)}
        value={name}
        placeholder="Elige un nombre"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Introduce contraseña"
        value={password}
        onChange={(e) => getPassword(e)}
      />
      <Button onClick={checkPassword} texto={"Comenzar"} />
    </div>
  );
};

export default WelcomePage;
