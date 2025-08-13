

export function searchActivity(id, objeto) {
  const claveEncontrada = Object.keys(objeto).find(clave => clave === id);
  return claveEncontrada ? objeto[claveEncontrada] : null;
}

