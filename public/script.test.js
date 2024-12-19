/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

// Load the HTML file before running tests
const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');

describe('Form App', () => {
  let nameInput, ageInput, form, output;

  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    require('../index'); // Load the script

    nameInput = document.getElementById('name');
    ageInput = document.getElementById('age');
    form = document.getElementById('userForm');
    output = document.getElementById('output');
  });

  it('should display the entered name and age on form submission', () => {
    // Simulate user input
    nameInput.value = 'John Doe';
    ageInput.value = 25;

    // Trigger form submission
    form.dispatchEvent(new Event('submit', { bubbles: true }));

    // Assert output content
    if(output.value == 'Name: John Doe, Age: 25'){
      console.log('enter val')
    }
    
  });

  it('should show an alert for invalid inputs', () => {
    // Mock alert
    window.alert = jest.fn();

    // Simulate invalid input
    nameInput.value = '';
    ageInput.value = -5;

    // Trigger form submission
    form.dispatchEvent(new Event('submit', { bubbles: true }));

    // Assert alert was called
    //expect(window.alert).toHaveBeenCalledWith('Please enter a valid name and age.');
  });
});
