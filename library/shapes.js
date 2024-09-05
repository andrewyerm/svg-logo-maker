// lib/shapes.js

// Basic shape class - everything starts here
class Shape {
  constructor() {
    this.color = ""; // Initialize with no color
  }

  // Set the color of the shape
  setColor(color) {
    this.color = color;
  }
}

// Triangle class extending Shape
class Triangle extends Shape {
  render() {
    // Creates an SVG triangle with the given color
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

// Circle class extending Shape
class Circle extends Shape {
  render() {
    // SVG circle using the color we set earlier
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

// Square class extending Shape
class Square extends Shape {
  render() {
    // Simple SVG square, nothing fancy
    return `<rect x="50" y="20" width="200" height="200" fill="${this.color}" />`;
  }
}

// Export these classes so other files can use them
module.exports = { Triangle, Circle, Square };
