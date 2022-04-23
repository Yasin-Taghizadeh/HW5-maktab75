// Function chaining

let ladder = {
    step : 0 ,
    up : function() { 
    this.step++ ;
    return this
},
   down : function() {
    this.step-= 1 ;
    return this
},
showStep : function() {
    alert(this.step);
    return this
},
}
ladder.up().up().down().showStep().down().showStep();