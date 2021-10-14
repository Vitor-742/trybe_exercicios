const sal = 5200

if (sal > 0 && sal < 1556.94) {
    salBase = sal*0.92
} else if (sal < 2594.92) {
    salBase = sal*0.91
} else if (sal < 5189.82) {
    salBase = sal*0.89
} else if (sal > 5189.82) {
    salBase = sal-570.88
} else {
    console.log("ERRO1")
}

if (salBase < 1903.99) {
    salLiq = salBase
} else if (salBase < 2826.65) {
    aliq = salBase*0.075-142.8
    salLiq = salBase - aliq
} else if (salBase < 3751.06) {
    aliq = salBase*0.15-354.8
    SalLiq = salBase - aliq
} else if (salBase < 4664.68) {
    aliq = salBase*0.225-636.13
    salLiq = salBase - aliq
} else if (salBase > 4664.68) {
    aliq = salBase*0.275-869.36
    salLiq = salBase - aliq
} else {
    console.log("ERRO2")
}
console.log("O salário liquido é igual a", salLiq)