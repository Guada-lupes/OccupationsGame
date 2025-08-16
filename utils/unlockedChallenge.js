export function unlockedChallenge(next, id, dispatch) {
    {
      const modal = document.getElementById("reto_desbloqueado");
      const handleClose = () => {
        dispatch({ type: "unlocked_tribe", payload: next });
        dispatch({ type: "done_challenge", payload: id });
      };
      modal.addEventListener("close", handleClose);
      modal.showModal();
    }
}