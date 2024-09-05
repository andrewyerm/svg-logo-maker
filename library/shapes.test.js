// lib/shapes.test.js
const { Triangle, Circle, Square } = require('./shapes');

// Testing if Triangle render gives the right SVG output
test('Triangle render method should return correct SVG string', () => {
  const shape = new Triangle();
  shape.setColor('blue'); // Setting color to blue
  expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

// Testing if Circle render does its job
test('Circle render method should return correct SVG string', () => {
  const shape = new Circle();
  shape.setColor('red'); // Setting color to red
  expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
});

// Checking if Square render returns the right SVG string
test('Square render method should return correct SVG string', () => {
  const shape = new Square();
  shape.setColor('green'); // Setting color to green
  expect(shape.render()).toEqual('<rect x="50" y="20" width="200" height="200" fill="green" />');
});
