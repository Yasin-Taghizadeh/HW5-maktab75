
function makeUser() {
    return {
        name : "john" ,
        ref : this
    };
}

let user = makeUser();
alert(user.ref.name); // what is the result?

// Because "this" called by the function and can not read Object 
// block
