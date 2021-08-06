var jogador_simbolo = {'x':'imagens/x.png', 'o':'imagens/o.png'}
var simbolo
var resultado = document.getElementById('res')
var lista
var imagens = document.querySelectorAll('img')

function inicio() {
    simbolo = 'x'
    lista = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    

    for (let pos in imagens) {
        imagens[pos].src = 'imagens/vazio.png'
    }
    
    resultado.innerHTML = ""
}

function mudaJogador(){
    if (simbolo == 'x'){
        simbolo = 'o'
    } else {
        simbolo = 'x'
    }
}

function mostrarVelha(imagem) {
    if (terminou()){
        return
    }
    if (ocupado(lista[imagem.id])){
        alert('Posição ocupada, escolha outra')
        return
    }
    lista[imagem.id] = simbolo
    imagem.setAttribute('src', jogador_simbolo[simbolo])
    
    switch (terminou()) {
        case true:
            resultado.innerHTML = `Jogador ${simbolo} ganhou!`
            break
        case 0:
            resultado.innerHTML = 'Deu Velha'
            break
        default:
            break
    }
    
    mudaJogador()    
}

function ocupado(elemento){ 
    //verifica se o lugar está ocupado ou não
    if (elemento == 'x' || elemento == 'o'){
        return true
    } else {
        return false
    }
}

function terminou(){

    // horizontal
    for (let i = 0; i < 8; i++)  {
        if (lista[i] == lista[i+1] && lista[i+1] == lista[i+2]){
            return true
        }
        i+=2
    }

    // vertiical
    for (let i = 0; i< 3; i++){
        if (lista[i] == lista[i+3] && lista[i+3] == lista[i+6]) {
            return true
        }
    }


    // diagonal
    if (lista[0] == lista[4] && lista[0] == lista[8]){
        return true
    }

    if (lista[2] == lista[4] && lista[2] == lista[6]){
        return true
    }
    //deu velha
    
    if (deuVelha()){
        return 0
    }

    // nao terminou
    return false

}

function deuVelha(){
    for (let i in lista){
        if (!isNaN(lista[i])) {
            console.log(lista[i])
            console.log('aqui')
            return false
        }
    }
    console.log('ou aqui')
    return true
}