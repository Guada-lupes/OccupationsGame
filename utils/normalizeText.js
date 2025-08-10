export function normalizeText(texto) {
  return texto
    .normalize("NFD") // separa letras de sus acentos
    .replace(/[\u0300-\u036f]/g, "") // elimina los acentos
    .toLowerCase(); // convierte a minúsculas
}

