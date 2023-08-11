// JavaScript code for the Room of Music webpage

// Get a reference to the buttons
const buttons = document.querySelectorAll('.button');

// Add a click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert(`You clicked the ${button.textContent} button.`);
    });
});

