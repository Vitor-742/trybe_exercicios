let arr = [0, 31, 6, 7, 10, 1]
let maior = 0

for (k in arr) {
    if (k == 0) {
        maior = k
        continue
    }
    if (arr[k] > arr[maior]) {
        maior = k
    }
}
console.log(maior)