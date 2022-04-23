// Deep copy with out jason

let myObject = {

    name : "john",
    age  : "36"
}

function deepCopy (myObject) {
    var newObj = {}
    for (let key in myObject){

        newObj[key] = myObject[key]

    }
  return newObj;
}

console.log(deepCopy(myObject))