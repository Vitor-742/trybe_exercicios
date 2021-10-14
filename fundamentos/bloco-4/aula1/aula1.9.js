const n1 = 10
const n2 = 20

if (n1 > 0 && n2 > 0) {
    valorCustoTotal = n1*1.2
    lucro = n2 - valorCustoTotal
    lucroMil = lucro*1000
    console.log("O valor de lucro em cima de mil produtos vendidos é de ", lucroMil)
} else {
    console.log("Valor negativo")
}