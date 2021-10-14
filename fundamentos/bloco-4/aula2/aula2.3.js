let numbers = [5, 9, 3, 90, 70, 8, 100, 2, 35, 27];

//for (let num of numbers) {
//  console.log(num)
//}

adic = 0
cont = 0
//for (let num of numbers) {
//    adic += num
//}
//console.log(adic)

/* for (let num of numbers) {
    adic += num
    cont++
}
if (adic/cont > 20) {
    console.log("valor maior q 20")
} else {
    console.log("Valor menor que 20")
} */

/* maior = 0
for (let num of numbers) {
    if (num > maior)
    maior = num
}
console.log(maior) */

/* for (let num of numbers) {
    if (num%2 == 1) {
        adic += 1
    }
}
if (adic == 0) {
    console.log("Nenhum valor ímpar encontrado")
} else {
    console.log(adic)
} */

/* for(let num of numbers) {
    if (cont == 0) {
        menor = num
    }
    if (num < menor) {
        menor = num
    }
    cont++
}
console.log(menor) */

let arrNum = []
for (let cont = 1; cont <= 25; cont++) {
    arrNum.push(cont)
}
console.log(arrNum)

for (let i of arrNum) {
    console.log(i/2)
}