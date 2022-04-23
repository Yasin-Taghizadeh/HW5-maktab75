//Get from input this data and them Create object

let information = {};

let input = 0;

while (input !== null && input !== "") {

    input = prompt('name family father Name father job');

    myArray = input.split(' ');

    if (input !== null && input !== "") {

        information[01] = createObj(myArray[0], myArray[1], myArray[2], myArray[3]);

    } else {
        break
    }
    input = prompt('name family father Name father job');

    myArray = input.split(' ');

    if (input !== null && input !== "") {

        information[02] = createObj(myArray[0], myArray[1], myArray[2], myArray[3]);

    } else {
        break
    }

    console.log(information)

    break
}

function createObj(name, family, fatherName, fatherJob) {
    return {
        "name": name,
        "family": family,
        "father Name": fatherName,
        "father Job": fatherJob
    }
}