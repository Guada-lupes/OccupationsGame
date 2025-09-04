export function unlockedChallenge(next, id, dispatch) {
    {
      const modal = document.getElementById("reto_desbloqueado");
      const handleClose = () => {
        dispatch({ type: "unlocked_tribe", payload: next });
        dispatch({ type: "done_challenge", payload: id });
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        })
      };
      modal.addEventListener("close", handleClose);
      modal.showModal();
    }
}