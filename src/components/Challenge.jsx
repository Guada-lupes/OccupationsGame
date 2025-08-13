import React from "react";
import TrueOrFalse from "../challenges/TrueOrFalse";
import OrderAndSecuence from "../challenges/OrderAndSecuence";
import Clasification from "../challenges/Clasification";
import Relation from "../challenges/Relation";
import FindStrange from "../challenges/FindStrange";
import CompleteWord from "../challenges/CompleteWord";
import MultipleChoice from "../challenges/MultipleChoice";

const Challenge = ({ reto }) => {
  //tenemos el cuenta el tipo de reto y generamos componentes segun el

  return (
    <div>
      {reto.tipo === "verdadero-falso" && <TrueOrFalse reto={reto} />}
      {reto.tipo === "ordenar-secuencia" && <OrderAndSecuence reto={reto} />}
      {reto.tipo === "clasificar" && <Clasification reto={reto} />}
      {reto.tipo === "relacionar" && <Relation reto={reto} />}
      {reto.tipo === "encuentra-impostor" && <FindStrange reto={reto} />}
      {reto.tipo === "completar-frases" && <CompleteWord reto={reto} />}
            {reto.tipo === "multiple-choice" && <MultipleChoice reto={reto} />}
    </div>
  );
};

export default Challenge;
