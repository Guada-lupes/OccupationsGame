//funcion reodenar la lista
export function changeOrder(
  startIndex,
  endIndex,
  item,
  setInitialState,
  initialState
) {
  const newList = Array.from(initialState.list);
  newList.splice(startIndex, 1);
  newList.splice(endIndex, 0, item);
  setInitialState((prev) => ({
    ...prev,
    list: newList,
  }));
}
//de item a categoria
export function userChoice(setInitialState, to, item, initialState) {
  if (initialState.userResult[to] !== "") return;

  const newList = Array.from(initialState.list).filter((e) => e !== item);

  setInitialState((prev) => ({
    list: newList,
    userResult: {
      ...prev.userResult,
      [to]: item,
    },
  }));
}
//función de categorias a lista
export function bringBack(setInitialState, initialState, endIndex, item, from) {
  const newList = Array.from(initialState.list);
  newList.splice(endIndex, 0, item);

  setInitialState((prev) => ({
    list: newList,
    userResult: {
      ...prev.userResult,
      [from]: "",
    },
  }));
}
// de categoria a categoria vacia
export function changeCategorie(setInitialState, from, to, item, initialState) {
  if (initialState.userResult[to] !== "") return;
  console.log("categoria a categoria");

  setInitialState((prev) => ({
    ...prev,
    userResult: {
      ...prev.userResult,
      [from]: "",
      [to]: item,
    },
  }));
}
//de categoria a categoria ocupada
export function changeBetweenCategories(setInitialState, from, to, item, initialState) {
  if (initialState.userResult[to] === "") return;
  const item2 = initialState.userResult[to];
  console.log();

  setInitialState((prev) => ({
    ...prev,
    userResult: {
      ...prev.userResult,
      [from]: item2,
      [to]: item,
    },
  }));
}

//comprobar respuesta
export function checkAnswer(initialState, respuestaCorrecta, setResultado) {
  let verify = Object.entries(initialState.userResult).every(
    ([key, value]) => respuestaCorrecta[key] === value
  );
  if (!verify) {
    return false;
  }
  return true;
}
