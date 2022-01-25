const notas = [10, 9, 8, 7, 6];

//O metodo map retorna um novo array
const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota);
console.log(notasAtualizadas);