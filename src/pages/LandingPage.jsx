import React from "react";
import Button from "../components/Button";
import { usePlayer } from "../context/PlayerContext";

const LandingPage = () => {
const {state} = usePlayer();
  return (
    <section>
          <div>
      <h1>
        Hola {state.name}, te damos la bienvenida al Planeta de las profesiones
      </h1>
      <p>
        En este pais cada tribu pertenece a una profesión. Descubre las 14
        tribus y sus peculiaridades superando retos y desbloqueando nuevos
        territorios. 
      </p>
      <p>¿Estas preparada para comenzar la aventura?</p>
      <Button texto={"Comenzar"} link={"/all_tribus"} />
    </div>
    </section>

  );
};

export default LandingPage;
