import Card from './../src/js/luhn.js';

describe('Card', () => {

  test('should create a card with a number', () => {
    const card = new Card(123456789);
    expect(card.number).toEqual(123456789);
  });

  test('should turn string into an array', () => {
    const card = new Card("0998445533334452");
    expect(card.split()).toEqual(["0", "9", "9", "8", "4", "4", "5", "5", "3", "3", "3", "3", "4", "4", "5", "2"]);
  });

  test('should reverse the number', () => {
    const card = new Card("0998445533334452");
    card.split();
    expect(card.reverse()).toEqual(['2', '5', '4', '4', '3', '3', '3', '3', '5', '5', '4', '4', '8', '9', '9', '0']);
  });

  test('should parse integers from strings', () => {
    const card = new Card("0998445533334452");
    card.split();
    card.reverse();
    expect(card.parse()).toEqual([2, 5, 4, 4, 3, 3, 3, 3, 5, 5, 4, 4, 8, 9, 9, 0]);
  });

  test('should double every other digit', () => {
    const card = new Card("0998445533334452");
    card.split();
    card.reverse();
    card.parse();
    expect(card.double()).toEqual([4, 5, 8, 4, 6, 3, 6, 3, 10, 5, 8, 4, 16, 9, 18, 0]);
  });
});