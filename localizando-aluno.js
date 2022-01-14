//const arrayVazia = [];

const alunos = ['joão', 'Juliana', 'Caio', 'Ana'];

const mediaDosAlunos = [10, 7, 9, 6];

let listaDeNotasEAlunos = [alunos, mediaDosAlunos];

const exibeNomeNota = (nomeDoAluno) => {
    // includes faz uma busca por um elemento dentro do array solicitado, retorna true ou false
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
        // indexOf informa a posição do elemento dentro do array solicitado e guarda no indice
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)

        return listaDeNotasEAlunos[0][indice] + ', sua média é ' + listaDeNotasEAlunos[1][indice]
    } else {
        return "Aluno não cadastrado."
    }
}

console.log(exibeNomeNota("Ana"));