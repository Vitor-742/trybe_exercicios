let numbers = [5, 9, 3, 90, 70, 8, 100, 2, 35, 27];

for(let i = 1; i < numbers.length; i++) {
    // outro for só pra ir tirando o ultimo
    for(let x = 0; x < numbers.length - i; x++) {
        if (numbers[x] > numbers[x+1]) {
            let position = numbers[x+1]
            numbers[x+1] = numbers[x]
            numbers[x] = position
        }
    }
}
console.log(numbers)