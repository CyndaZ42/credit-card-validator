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

  test('should double every other digit and add digits of numbers over 9', () => {
    const card = new Card("0998445533334452");
    card.split();
    card.reverse();
    card.parse();
    expect(card.formula()).toEqual([4, 5, 8, 4, 6, 3, 6, 3, 1, 5, 8, 4, 7, 9, 9, 0]);
  });

  test('reverse order of digits back to original', () => {
    const card = new Card("0998445533334452");
    card.split();
    card.reverse();
    card.parse();
    card.formula()
    expect(card.reverse()).toEqual([0, 9, 9, 7, 4, 8, 5, 1, 3, 6, 3, 6, 4, 8, 5, 4]);
  });

  test('reverse order of digits back to original', () => {
    const card = new Card("4102080880435620");
    card.split();
    card.reverse();
    card.parse();
    card.formula()
    expect(card.reverse()).toEqual([4, 2, 0, 4, 0, 7, 0, 7, 8, 0, 4, 6, 5, 3, 2, 0]);
  });

  test('should add the digits of a number together and return them', () => {
    const card = new Card("4102080860435620");
    card.split();
    card.reverse();
    card.parse();
    card.formula();
    card.verify();
    expect(card.validator).toEqual(50);
  });

  test('return if the number is "valid"', () => {
    const card = new Card("4102080860435620");
    card.split();
    card.reverse();
    card.parse();
    card.formula();
    card.verify();
    expect(card.isValid).toEqual(true);
  });
  
});