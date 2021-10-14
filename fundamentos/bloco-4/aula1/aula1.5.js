const peca = "Cavalo"

switch (peca.toLowerCase()){
    case "torre":
        console.log("anda em retas sem limite de casas")
        break
    case "rainha":
        console.log("Anda sem limites nas diagonais e retas")
        break
    case "peao":
        console.log("Anda apenas uma casa para frente e só pode comer uma casa na diagonal")
        break
    case "rei":
        console.log("pode se mover em todas as direções, mas apenas uma casa")
        break
    case "bispo":
        console.log("pode andar qualquer casas quiser na diagonal")
        break
    case "cavalo":
        console.log("Anda em L, sempre uma casa reta e um diagonal")
        break
    default:
        console.log("ERRO, peça não idetificada")
}