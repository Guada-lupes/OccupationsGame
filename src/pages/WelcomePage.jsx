import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export const WelcomePage = () => {
  const [input, setInput] = useState("hola");
  const navigate = useNavigate();

  function getInput(e) {
    setInput(e.target.value);
  }

  function checkPassword() {
    if (input === import.meta.env.VITE_PASSWORD) {
      console.log("hola"); navigate("/userconfig")
    }
  }
  return (
    <div>
      <h1>Descubre tu profesión</h1>
      <h3>
        Explora actividades económicas, descubre ocupaciones y encuentra tu
        futuro.
      </h3>
      <label htmlFor="password">Introduce contraseña</label>
      <input
        type="password"
        name="password"
        id="password"
        value={input}
        // onChange={(e) => getInput(e)}
      />
      <button onClick={checkPassword}>Enviar</button>
    </div>
  );
};

export default WelcomePage;
