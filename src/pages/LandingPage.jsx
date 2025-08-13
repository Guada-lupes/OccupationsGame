import React from "react";
import Button from "../components/Button";
import { usePlayer } from "../context/PlayerContext";

const LandingPage = () => {
const {state} = usePlayer();
  return (
    <div>
      <h1>
        Hola {state.name}, te damos la bienvenida al Planeta de las profesiones
      </h1>
      <h3>
        En este pais cada tribu pertenece a una profesión. Descubre las 14
        tribus y sus peculiaridades superando retos y desbloqueando nuevos
        territorios.
      </h3>
      <h4>Estas ready?</h4>
      <Button texto={"Comenzar"} link={"/all_tribus"} />
    </div>
  );
};

export default LandingPage;
