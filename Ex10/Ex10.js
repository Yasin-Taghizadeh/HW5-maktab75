
   user =  {
          name : ['bahram','reza','ali'],
        lastName : ['bahrami','rezaei','alipor'],
        age : [23,32,14],
    
        
    }

//////////////////////////////////////////////////////
let age = 1 ;
let name = 2 ;
let lastName = 3;
/////////////////////////////////////////////////////

const add = (name) => {

    user.push(name)

add(name)
}
/////////////////////////////////////////////////////

function removeAddress(inputWords) {
    const filtered = user.name.filter((value) => {
    value !== name;
    });
    }
   console.log(removeAddress(name))

////////////////////////////////////////////////////
 function createAgeSort (age1) {
   
      if (age1 === 1){
  const sel = user.age.sort((value1,value2) => value2 - value1);
      console.log(sel)
      }
    }   

 //////////////////////////////////////////////////////   

    function createNameSort (addName) {

        if (addName === 2){
            const seh = user.name.sort();
            console.log(seh)
          }
    }

///////////////////////////////////////////////////////

    function createLastNameSort (family){
       
        if (family === 3){
            const result = user.lastName.sort()
            console.log(result)
        }
    }
    createAgeSort(age);
    createNameSort(name); 
    createLastNameSort(lastName);
    
     








 
    