// Algoritmo de validação para a empresa Savinis
// Cadastro de Participantes para o evento

var anoAtual = new Date().getFullYear()
var anoEvento = 2023
var listaInscritos = [
    ['João', 18], ['Augusto', 13],
    ['Pedro', 14], ['Ana', 22],
    ['Mateus', 20], ['Vitória', 19]]

var listaPalestrantes = ['Marcos', 'Mariana']
var listaParticipantes = []
var quantidadeParticipantes = 100
if (anoAtual > anoEvento) {
    console.log('Cadastro não será permitido por data inválida!')
} else {
    for(let i = 0; i < listaInscritos.length; i++){
        let nome = listaInscritos[i][0]
        let idade = listaInscritos[i][1]
        if(idade >= 18){
            if(listaParticipantes.length <= quantidadeParticipantes){
                listaParticipantes.push(nome)
                console.log(`${nome} foi adicionado(a) a lista de participantes.`)
            } else {
                console.log('Cadastro não permitido, pois excedeu o limite de participantes!')
            }
        } else {
            console.log(`Cadastro não será permitido, pois o inscrito ${nome} é menor de idade!`)
        }
    }
}
console.log(`A lista final dos participantes em ordem alfabética é ${listaParticipantes.sort()}.`)
