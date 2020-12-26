//boolean type in JS

//is a boolean
let isActive = false
console.log(isActive)

//is a boolean
isActive = true
console.log(isActive)

//is not a boolean, but Number
isActive = 1
console.log(isActive) //returns '1'

//is a boolean
isActive = 1
console.log(!!isActive) //returns true, if we deny 2 times, the result becomes true

console.log('Os verdadeiros eu sei quem são...');

//these returns true
console.log(!!3) //numbers
console.log(!!-1) //negative numbers
console.log(!!' ') //string with at least one char
console.log(!![])  //array
console.log(!!{})  //object
console.log(!!Infinity)
console.log(!!(isActive = 10))


//these returns false
console.log("Os falsos eu sei quem são...")
console.log(!!0)  //zero
console.log(!!'') //empty string
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isActive = false))

console.log("Pra finalizar...")
console.log(!!('' || null || 0 || ' ')) //return true

let nome = ''

console.log(nome || 'Desconhecido')

