let result = true
function verificaPalavra(palavra, fimPalavra){
    arrPalavra = palavra.split('').reverse()
    arrFimPalavra = fimPalavra.split('').reverse()
    for (i = 0; i < arrFimPalavra.length; i++ ) {
        if (arrPalavra[i] === arrFimPalavra[i]) {
            result = true
        } else {
            result = false
            break
        }
    }
        return result
}

verificaPalavra('trybe', 'be')
console.log(result)