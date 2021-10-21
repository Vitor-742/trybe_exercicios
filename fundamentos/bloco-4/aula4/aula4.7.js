let arr = [2, 3, 3, 5, 3, 2, 3]
let moda = 0
let contTotal = 0

for (index in arr) {
    let cont = 0
    for (index2 in arr) {
        if (arr[index] === arr[index2])
        cont += 1
    }
    if (cont > contTotal) {
        contTotal = cont
        moda = arr[index]
    }
}

console.log(moda)