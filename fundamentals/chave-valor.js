const saudacao = 'Opa' //contexto léxico 1

function exec(){
    const saudacao = 'Falaaa' //contexto léxico 2
    return saudacao
}

//objetos são grupos aninhados de pares chave-valor

const cliente = {
    nome:'Pedro',
    idade:32,
    peso:90,
    endereco:{
        logradouro:'Rua muito legal',
        numero:123
    }
}

console.log(saudacao) //contexto léxico 1
console.log(exec()) //contexto léxico 2
console.log(cliente) //contexto léxico 3