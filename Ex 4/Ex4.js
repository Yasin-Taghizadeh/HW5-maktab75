let withRec = 10;
let lengthRec = 20;

 let myArray = [];
 let myObject = {}

 myArray[0] = withRec;
 myArray[1] = lengthRec;

 let area = myArray.reduce((width,height) => width * height);

 let perimeter = myArray.reduce((width,height) => (width + height) *2 );


function calculate (area , perimeter) {

    return {
        area ,
        perimeter
    }
}
console.log(calculate(area , perimeter))
 


