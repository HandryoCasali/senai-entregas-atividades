// Sistema para validação de peças de computador
let listaPecas = [
    ["Memoria ram", 120], ["Hard Disk", 320],
    ["SSD", 110], ["Processador", 90],
    ["Cooler", 200], ["Placa de Vídeo" , 1000],
    ["Placa Mãe", 500], ["Gabinete", 1150],
    ["Fonte de Alimentação", 800] ]

let listaPecasCadastradas = []

for(let i = 0; i < listaPecas.length; i++) {
    let peso = listaPecas[i][1]
    let nomePeca = listaPecas[i][0]

    if(listaPecasCadastradas.length >= 6) {
        console.log("Não tem mais espaço na lista, não é possível cadastrar!")
    } else if(peso < 100){
        console.log(`A peça "${nomePeca}" deve ter no mínimo 100g para ser cadastrada!`)
    } else switch(nomePeca.length) {
        case 0:
            console.log(`O nome da peça "${nomePeca}" não pode estar vazio!`)
            break
        case 1:
        case 2:
        case 3:
            console.log(`O nome da peça "${nomePeca}" deve ter mais de 3 caracteres!`)
            break
        default:
            listaPecasCadastradas.push(listaPecas[i])
            console.log(`A peça "${nomePeca}" foi cadastrada com sucesso!!!`)
    }   
}
