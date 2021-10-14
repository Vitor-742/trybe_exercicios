let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let num2 = []

for(let i = 0; i < numbers.length; i++) {
    if (i == numbers.length-1) {
        num2.push(numbers[i]*2)
    } else {
     num2.push(numbers[i] * numbers[i+1])
    }
}
console.log(num2)