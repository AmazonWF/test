// Select the button and animated box
const animateButton = document.getElementById('animateButton');
const animatedBox = document.getElementById('animatedBox');

// Add event listener for button click
animateButton.addEventListener('click', () => {
    // Add animation class to the box
    animatedBox.classList.add('box-animate');
    
});

