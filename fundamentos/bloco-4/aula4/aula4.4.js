function verificaPalindrome(word) {
    arrWord = word.split('')
    arrWord.reverse()
    contra = arrWord.join('')
    if (word == contra) {
        return true
    } else {
        return false
    }

}

console.log(verificaPalindrome('arara'))