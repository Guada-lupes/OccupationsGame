import styles from "../src/styles/challenge.module.css"
export function rotateCoin(coin1, coin2) {
  const coinA = coin1.current;
  const coinB = coin2.current;
  let swicht = true;
  
  function applyStyles() {
    if (swicht) {
      // Mostrar moneda A
      coinA.className = `${styles.coin_a_visible} ${styles.coin}`;
      coinB.className = `${styles.coin_b_hidden} ${styles.coin}`;
    } else {
      // Mostrar moneda B
      coinA.className = `${styles.coin_a_hidden} ${styles.coin}`;
      coinB.className = `${styles.coin_b_visible} ${styles.coin}`;
    }
  }
  
  // Aplicar estilos iniciales
  applyStyles();
  
  // Crear el intervalo
  const interval = setInterval(() => {
    swicht = !swicht;
    applyStyles();
  }, 2000);
  
  // Retornar función de limpieza
  return () => clearInterval(interval);
}