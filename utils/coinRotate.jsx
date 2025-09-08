import styles from "../src/styles/challenge.module.css"

export function rotateCoin(wrapperRef, intervalMs = 1000) {
  const wrapper = wrapperRef?.current;
  if (!wrapper) return () => {};

  const flipClass = styles.flipped;

  // asegurar estado inicial (sin flipped)
  wrapper.classList.remove(flipClass);

  const id = setInterval(() => {
    wrapper.classList.toggle(flipClass);
  }, intervalMs);

  return () => clearInterval(id);
}