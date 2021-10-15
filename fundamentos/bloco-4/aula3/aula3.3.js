const n = 5
const ast = '*'
const esp = ' '

for (i = 0; i < n; i++) {
    console.log(esp.repeat(n-(i+1)), ast.repeat(i+1))
}