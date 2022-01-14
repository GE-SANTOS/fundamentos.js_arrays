//const arrayVazia = [];

const listaDeChamada = ['joão', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

//listaDeChamada.splice(1, 2, 'Rodrigo'); // o splice deleta os elementos 1 e 2 e add 'Rodrigo'.

//listaDeChamada.splice(2, 0, 'Rodrigo'); // colocando o 0 depois do 2 o splice não deleta não elemento e adiciona 'Rodrigo' depois de Ana.

listaDeChamada.splice(0, 1, 'Rodrigo'); // substitui o elemento 0 do array por 'Rodrigo'.

console.log(`Lista de Chamada: ${ listaDeChamada }`);