import React from "react";
import { tribus } from "../../data/tribus";
import { Link } from "react-router-dom";

const AllTribusPage = () => {
  //aqui se presentan los iconos de todas las tribus
  return (
    <>
      {tribus.map((tribu, index) =>
        // tribu.desbloqueada ? 
        (
          <Link to={`/${tribu.id}`}>
            <div key={index}>{tribu.tribu}</div>
          </Link>
        ) 
        // : (
        //   <div key={index}>{tribu.tribu}</div>
        // )
      )}
    </>
  );
};

export default AllTribusPage;
