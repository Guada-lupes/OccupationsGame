export function modifyActual(index, setActual) {
  setActual(index)
}
export function selectAnwer(index, option, setResult, setUserChoice) {
    //limpiamos resultados   
    setResult((prev) => {
      const newArray = [...prev];
      newArray.splice(index, 1, false);
      return newArray;
    });
    //modificamos seleccion
    setUserChoice((prev) =>
      prev.map((p) =>
        p.id === index
          ? {
              ...p,
              userOption: option,
              result: p.correctOption === option,
            }
          : p
      )
    );
  }
export function checkAnswer(index, result, setResult) {
    //cambiamos a true para indicar que hay resultado
    const newResult = [...result];
    newResult[index] = true;
    // Actualizamos el estado
    setResult(newResult);
    //constante para verificar si hay falsos en las respuestas
  }