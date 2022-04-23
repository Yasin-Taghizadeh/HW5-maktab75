// Put a sentence in the Object as key and value

let fileContent = "12,fatemeh\n" + "22,zahra\n" + "36,ali\n" + "45,reza"

let myArray = fileContent.split('\n')

let result = myArray.map(value => value.split(','))


let test = Object.fromEntries(result)

console.log(test)




