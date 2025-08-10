//   const [path, setPath] = useState([sectores.industria]);
//   //path[0] es el primer escalon
//   //path[0].pregunta
//   //path[0].opciones
//   //segundo escalon
//   //obtenemos array con las opciones = path[0].opciones.map((opcion)=>{
//   //     return opcion.respuesta
//   // })
//   //tercer escalon path[0].opciones[1].pregunta
//   // path[0].opciones[1].opciones[0]
//   //cuarto nivel
//   //path[0].opciones[1].opciones[0]


import Button from "./Button";

export const Questions = ({currentNode, path, handleBack, handleOptionClick}) => {
  
  return (
    <div>
      <h1>{currentNode.pregunta}</h1>
      {currentNode.opciones.map((opcion, index) => (
        <Button
        id={index}
          texto={opcion.respuesta}
          onClick={() => handleOptionClick(index)}
        />
      ))}
      {path.length !=1 && <Button texto={"Atrás"} onClick={handleBack} />}
    </div>
  );
};

export default Questions;
