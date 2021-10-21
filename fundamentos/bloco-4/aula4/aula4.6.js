let arr = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']
maior = 0
let n2

for (k of arr) {
    n1 = k.split('')
    cont = n1.length
    console.log(cont)
    if (cont > maior) {
        maior = cont
        n2 = k
    }
}
console.log(n2)