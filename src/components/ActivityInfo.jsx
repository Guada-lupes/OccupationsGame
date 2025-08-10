import descripcionActividades from "../../data/descripcionActividades";
import { searchActivity } from "../../utils/searchActivity";
import { useParams } from "react-router-dom";
import { Button } from "./Button";

export const ActivityInfo = () => {
  const { id } = useParams();

  const actividadData = searchActivity(id, descripcionActividades);
  
  const { titulo, intro, parrafos, imagen } = actividadData;

  return (
    <>
      <h1>{titulo}</h1>
      <img src={imagen} alt="" />
      <h3>{intro}</h3>
      {parrafos.map((p, i) =>
       (<p key={i}>{p}</p>))}
      <Button texto={"Volver"} link={"/activities"}/>
      <Button texto={"Siguiente"} link={`/${id}/questions`}/>
    </>
  );
};
