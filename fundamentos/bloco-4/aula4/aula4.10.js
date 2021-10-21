let num = 'XL'
numArr = num.split('')
console.log(numArr)
let soma = 0

for (i in numArr) {
    switch (numArr[i]) {
        case 'I' : 
            numArr[i] = 1;
            break
        case 'V':
            numArr[i] = 5;
            break
        case 'X':
            numArr[i] = 10;
            break
        case 'L':
            numArr[i] = 50;
            break
    }
}
console.log(numArr)
for (i in numArr) {
    console.log(numArr[i], numArr[i+1])
    if (numArr[i] < numArr[i+1]){
        continue
    } else if (numArr[i] > numArr[i-1]) {
        soma += numArr[i] - numArr[i-1]
    } else {
        soma += numArr[i]
    }
}

console.log(soma)
