var listaPecas = ["Freio", "Cambio","motor","Radiado","Disco de Freio", "Amortecedor"]


if(listaPecas.length < 10){
    console.log("É possível cadastrar mais peças")
} else {
    console.log("Não é possível cadastrar")
}


let peso = 50;

if (peso.length < 100){
    console.log("A peça deve pesar no minimo 100g")
} else {
    console.log("A peça possui peso adequado")
}


let nomePeca = "discode Freio"

if(nomePeca.length > 3) {
    console.log("Nome de peça está adequado para o cadastro!")
} else if (nomePeca.length == 0) {
    console.log("O nomeda peça não pode ser vazio")

} else {
    console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado!")
}

switch (nomePeca.length > 3) {
    case 0:
        console.log("O nomeda peça não pode ser vazio")
        break;
    case 1:  
    case 2:
    case 3:
        console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado!")
        break;
    default:
        console.log("Nome de peça está adequado para o cadastro!")
        break;
}