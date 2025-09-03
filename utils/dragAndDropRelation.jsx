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
  console.log(initialState.userResult, to);
  if(initialState.userResult[to] !== "") return
  
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
// de categoria a categoria
export function changeCategorie(setInitialState, from, to, item, initialState) {
  if(initialState.userResult[to] !== "")return
  setInitialState((prev)=>
(  {
    ...prev,
    userResult:{
...prev.userResult,
[from]: "",
[to]: item
    }
  }))
}
export function checkAnswer(initialState, respuestaCorrecta, setResultado) {

  let verify = Object.entries(initialState.userResult).every(([key, value]) =>
respuestaCorrecta[key] === value
  )
  if(!verify){

    return false
  }
return true
}
