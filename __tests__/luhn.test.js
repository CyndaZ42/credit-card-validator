import Card from './../src/js/luhn.js';

describe('Card', () => {

  test('should create a card with a number', () => {
    const card = new Card(123456789);
    expect(card.number).toEqual(123456789);
  });

  test('should turn string into an array', () => {
    const card = new Card("0998445533334452");
    expect(card.luhn()).toEqual(["0", "9", "9", "8", "4", "4", "5", "5", "3", "3", "3", "3", "4", "4", "5", "2"]);
  })

});