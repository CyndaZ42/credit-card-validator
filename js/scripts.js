//utility logic
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

//buisiness logic
function luhn_algorithm(cardNumber) {
   cardArray = cardNumber.split("");
   cardArray.reverse();
   cardDoubled = [];
   let x = 1;
   cardArray = cardArray.map(function(element) {
     return parseInt(element);
    });
    cardArray.forEach(function(element) {
      if(x === 1) {
        if (element < 5){
          cardDoubled.push(multiply(element, 2));
        }
        else{
          cardDoubled.push(subtract(9, element));
        }
        x = 0;
      }
      else{
      cardDoubled.push(element)
      x = 1;
    }});


 }

