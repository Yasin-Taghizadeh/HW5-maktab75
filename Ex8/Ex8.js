const stateObject = {
    karaj: ["karaj", "kordan"],
}

const addState = (...states) => {
   states.forEach(state => stateObject[state] = [] );
    return stateObject
}


const addCity = (state, ...cities) => {
    stateObject[state] = [...stateObject[state], ...cities];
}


addState('azerbaijan', 'khuzestan')

addCity('azerbaijan', 'tabriz', 'jolfa','mahabad')

addCity('khuzestan', 'ahwaz', 'abadan')

console.log(stateObject)