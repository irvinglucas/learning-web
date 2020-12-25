/**
 * Fundamentals of Number types
 */

 const peso1 = 1.0 //this value is a integer even if the atttribuition has a dot.
 const peso2 = Number('2.0') //here this happens too

 console.log(peso1,peso2)
 console.log (Number.isInteger(peso1))
 console.log (Number.isInteger(peso2))

 const avaliacao1 = 9.871
 const avaliacao2 = 6.871

 const total = avaliacao1 * peso1 + avaliacao2 * peso2
 const media = total / (peso1+peso2)

 console.log(media.toFixed(2)) //increase the point float precision
 console.log(media.toString()) //cast to string

 console.log(typeof media) //returns the type of the variable 'media'

 /**
  * Be careful with these details
  */

  console.log(7/0) //returns infinity
  console.log("10"/2) //returns 5 because JS cast the string to int
  console.log("Show" * 2) //returns NaN

  //point float issues
  console.log(0.1 + 0.7) //returns 0.7999999 because performance issues, IEEE specification

  //console.log(10.toString()); //does not work with literal this way, syntax error

  console.log((10.345.toFixed)); //this way works with literals

