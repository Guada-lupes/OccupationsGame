import { Link } from "react-router-dom";

export function openActivity(elemento) {
    //ruta dinamica que diriga al componente ActivityInfo pasando el parametro de elemento
    return(
        <Link to="/:id"></Link>
    )
}