export function logOut(dispatch) {
  dispatch({ type: "reset" });
  localStorage.removeItem("player");
}
export function checkPassword(name, password, dispatch) {
  let p = import.meta.env.VITE_PASSWORD;

  if (password === p) {
    dispatch({ type: "log_in", payload: true });
    dispatch({ type: "set_name", payload: name });
  }
}
