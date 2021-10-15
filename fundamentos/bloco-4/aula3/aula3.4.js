const n = 9
const ast = '*'
const esp = ' '

for (i = 0; i < n; i += 2) {
    console.log(esp.repeat((n-i)/2), ast.repeat(i+1), esp.repeat((n-i)/2))
}