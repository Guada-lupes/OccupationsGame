import React from "react";
import Challenge from "./Challenge";
import OccupationsCard from "./OccupationsCard";
import { useParams } from "react-router-dom";
import { tribus } from "../../data/tribus";

export const TribuCard = () => {
  //esta es la carta que se despliega cuando entramos en una tribu
  const { id } = useParams();

  const tribu = tribus.find((t) => t.id === id);

  return (
    <div>
      <h1>{tribu.tribu}</h1>
      <h2>{tribu.descripcion}</h2>
      <h3>Resuelve el reto</h3>
      <Challenge reto={tribu.reto} />
      <OccupationsCard profesiones={tribu.profesiones} />
    </div>
  );
};

export default TribuCard;
