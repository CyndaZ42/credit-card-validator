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