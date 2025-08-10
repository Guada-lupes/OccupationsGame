//renderizar tarjetas de actividades económicas
import { Link } from "react-router-dom";
import actividadesEconomicas from "../../data/actividadesEconomicas"
import { useUser } from "../../utils/useUser";


export const ActivitiesCards = () => {
    const {user} = useUser();
    return (
        <>
        <h1>Hola {user.name}</h1>
        <h3>Explora las actividades economicas, descubre profesiones</h3>
      {Object.entries(actividadesEconomicas).map(([clave, valor], index) => (
        <Link key={index} to={`/${clave}`}>
          <div>{valor}</div>
        </Link>
      ))}
    </>
    );
}
