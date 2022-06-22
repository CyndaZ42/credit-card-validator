export default function Card(number) {
  this.number = number;
}

Card.prototype.split = function() {
   this.numArray = this.number.split("");
  return this.numArray;
}

Card.prototype.reverse = function() {
  this.numArray.reverse();
  return this.numArray;
}

Card.prototype.parse = function() {
  this.numArray = this.numArray.map(function(element) {
    return parseInt(element);
   });
   return this.numArray;
}

Card.prototype.double = function() {
  let x = 1;
  let doubledNumber = []
  this.numArray.forEach(function(element) {
    if(x === 1) {
      doubledNumber.push(element * 2);
      x = 0;
    }
    else{
    doubledNumber.push(element)
    x = 1;
   }});
   return doubledNumber;
}

Card.prototype.formula = function() {
  let x = 1;
  let doubledNumber = []
  this.numArray.forEach(function(element) {
    if(x === 1) {
      if ((element* 2) <= 9){
        doubledNumber.push(element * 2);
      }
      else{
        doubledNumber.push((element * 2) - 9);
      }
      x = 0;
    }
    else{
    doubledNumber.push(element)
    x = 1;
   }});
   this.numArray = doubledNumber;
   return this.numArray;
}