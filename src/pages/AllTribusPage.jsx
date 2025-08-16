import React from "react";
import { tribus } from "../../data/tribus";
import { Link } from "react-router-dom";

const AllTribusPage = () => {
  return (
    <div >
      {tribus.map((tribu, index) => {
        const Icon = tribu.imagen;
        return (
          <Link to={`/${tribu.id}`} key={index}>
            <Icon stroke="green" fill="none" />
          </Link>
        );
      })}
    </div>
  );
};
//   return (
//     <>
//       {tribus.map((tribu, index) =>
//         // tribu.desbloqueada ?
//         (

//         )
//         // : (
//         //   <div key={index}>{tribu.tribu}</div>
//         // )
//       )}
//     </>
//   );
// };

export default AllTribusPage;
