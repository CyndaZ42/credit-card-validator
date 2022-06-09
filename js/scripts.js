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
   luhnOutput = 0;
   let x = 1;
   cardArray = cardArray.map(function(element) {
     return parseInt(element);
    });
    cardArray.forEach(function(element) {
      if(x === 1) {
        if (multiply(element, 2) < 10){
          cardDoubled.push(multiply(element, 2));
        }
        else{
          console.log(subtract(9, element));
          cardDoubled.push(subtract(9, element));
        }
        x = 0;
      }
      else{
      cardDoubled.push(element)
      x = 1;
     }});
      cardDoubled.reverse();
      console.log(cardDoubled);
      cardDoubled.forEach(function (element){
        luhnOutput += element;
        console.log(luhnOutput);
      });
      return luhnOutput;
 }

 //ui logic

