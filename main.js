let inputA = document.querySelector('#inputA')
let inputB = document.querySelector('#inputB')
let button = document.querySelector('button')

button.addEventListener('click', (e) => {
    e.preventDefault();

    if(parseInt(inputB.value) > parseInt(inputA.value)){
        alert('Valores enviados com sucesso!')
        inputA.value = '';
        inputB.value = '';
        return
    } else if (parseInt(inputB.value) <= parseInt(inputA.value)){
        alert('O valor de B precisa ser maior que o valor de A.\n\nClique em ok para tentar novamente.')
        inputA.value = '';
        inputB.value = '';
        return
    } else {
        alert('Os dados informados não são compatíveis.\n\n Clique em ok para tentar novamente.')
        inputA.value = '';
        inputB.value = '';
        return
    }
})