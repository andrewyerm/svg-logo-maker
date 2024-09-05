// index.js
const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

// Main function to run the script
async function run() {
  // Prompting the user for input
  const answers = await inquirer.prompt([
    { 
      name: 'text', 
      message: 'Enter text for the logo (up to 3 characters):', 
      validate: input => input.length <= 3 // Ensures text isn't too long
    },
    { name: 'textColor', message: 'Enter text color (keyword or hexadecimal):' },
    { name: 'shapeType', type: 'list', message: 'Choose a shape:', choices: ['Circle', 'Triangle', 'Square'] },
    { name: 'shapeColor', message: 'Enter shape color (keyword or hexadecimal):' },
  ]);

  let shape; // Placeholder for the chosen shape object
  // Determine which shape the user selected
  switch (answers.shapeType) {
    case 'Circle':
      shape = new Circle();
      break;
    case 'Triangle':
      shape = new Triangle();
      break;
    case 'Square':
      shape = new Square();
      break;
  }

  // Set the shape's color
  shape.setColor(answers.shapeColor);

  // Build the SVG content with the shape and text
  const svgContent = `
  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
  </svg>
  `;

  // Save the SVG to a file
  fs.writeFileSync('logo.svg', svgContent.trim());
  console.log('Generated logo.svg'); // Notify the user that the file has been created
}

// Execute the main function
run();
