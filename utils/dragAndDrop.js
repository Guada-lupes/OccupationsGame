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
//funcion elección de usuario
export function userChoice({ setInitialState, to, item, initialState }) {
    const newList = Array.from(initialState.list).filter(e=> e !== item);

  setInitialState((prev) => ({
    list : newList,
    userResult: {
        ...prev.userResult,
        [to]: item,
    },
    
  }));
      console.log(to, item, initialState);
}
