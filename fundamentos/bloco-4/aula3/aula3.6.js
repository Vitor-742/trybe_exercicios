const n = 17
let primo = true

for (i = 2; i < n; i++) {
    if (n%i == 0) {
        primo = false
    }
}
if (!primo) {
    console.log('O número não é primo')
} else {
    console.log('numero é primo')
}