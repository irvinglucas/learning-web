//Strings in Javascript

/* 
We can delimit string in three ways:

1 - "Like this"
2 - 'Like this' and
3 - `Like this`
*/

const school = "Cod3r"

console.log(school.charAt(4)) //returns the char on string position 4.
console.log(school.charAt(5)) //returns no string and no errors

console.log(school.charCodeAt(3)) //returns ASCII value of a char

console.log(school.indexOf('3')) //returns the index of a char

//substring returns the string that starts at a specific index interval
console.log(school.substring(1)) //start at index 1 and goes to the end
console.log(school.substring(0,3)) //start at index 0 and goes to index 3(not including index 3)

console.log('School '.concat(school).concat("!")) //concatenating strings.
console.log('3' + 2) //this will concatenate, and not to sum numbers. String RULES!

console.log(school.replace(3, 'e')) // replacing char with char. We can use regex here.

console.log('Ana, Maria, Pedro'.split(',')) //spliting strings into an ARRAY. Can be used with REGEX too.

//----------


