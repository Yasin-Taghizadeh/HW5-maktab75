//Join some Array to one array

let arr1 = ['ali', 23, 'reza', '35'];
let arr2 = ['amir', 12, 'mehrad', 37];


function joinArray(arr1, arr2) {

    createArray = [...arr1, ...arr2];

    return createArray

}

console.log(arr1, arr2)