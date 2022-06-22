export default function Card(number) {
  this.number = number;
}

Card.prototype.luhn = function() {
   let cardArray = this.number.split("");
  return cardArray;
}