const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

//Tambem conhecida como callback por ser uma função que recebe outra função como parâmetro
notas.forEach(nota => {
        somaDasNotas += nota
    })
    //Percorre o array automaticamente quando o mesmo é especificado.

/*
Também pode ser feito da forma abaixo, mais a forma apresentada acima é a mais usada.

notas.forEach(function(nota){
    somaDasNotas += notas
})
 */
let media = somaDasNotas / notas.length;

console.log(media);