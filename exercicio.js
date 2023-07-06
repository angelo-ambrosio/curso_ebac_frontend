const listaAlunos = [
    {nome: 'Carlos',
     nota: 2},
    {nome: 'Mariana',
     nota: 9},
    {nome: 'João Pedro',
     nota: 4},
    {nome: 'Bárbara',
     nota: 5},
    {nome: 'Cecília',
     nota: 10},
    {nome: 'Augusto',
     nota: 9},
]

const aprovados = []

function listaAprovados(){
    for(let index = 0; index < listaAlunos.length; index++){
        if(listaAlunos[index].nota >= 6){            
            let alunoAprovado = listaAlunos[index].nome;
            aprovados.push(alunoAprovado);
        }
    }

    aprovados.forEach((elemento) => {
        console.log(elemento);
    })
}

listaAprovados();
