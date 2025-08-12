import React from "react";
import { useUser } from "../../utils/useUser";
import Button from "../components/Button";

const LandingPage = () => {
  const { user } = useUser();
  return (
    <div>
      <h1>
        Hola {user.name}, te damos la bienvenida al Planeta de las profesiones
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
