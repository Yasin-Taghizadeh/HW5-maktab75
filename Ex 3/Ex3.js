//Creat Website domain
myArray = ['com' , 'net' , 'org' , 'ir']
let a = 'google.'
let b = 'yahoo.'
let  c = 'maktab.'
let d = 'apple.'
function createGoSite (com,net,org,ir){
return {
 com : a + com ,
 net : a + net , 
 org : a + org ,
 ir: a + ir   
 
}
}
console.log(createGoSite(myArray[0],myArray[1],myArray[2],myArray[3]))
function createYoSite (com,net,org,ir){
    return {
     com : b + com ,
     net : b + net , 
     org : b + org ,
     ir: b + ir   
     
    }
    }
    console.log(createYoSite(myArray[0],myArray[1],myArray[2],myArray[3]))
    function createMaSite (com,net,org,ir){
        return {
         com : c + com ,
         net : c + net , 
         org : c + org ,
         ir: c + ir   
         
        }
        }
        console.log(createMaSite(myArray[0],myArray[1],myArray[2],myArray[3]))
        function createApSite (com,net,org,ir){
            return {
             com : d + com ,
             net : d + net , 
             org : d + org ,
             ir: d + ir   
             
            }
            }
            console.log(createApSite(myArray[0],myArray[1],myArray[2],myArray[3]))
