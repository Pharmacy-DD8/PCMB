function printRecipe() {
    window.print();
}

// function pinRecipeAndRedirect() {
//     pinRecipe(); // Execute your function
//     window.location.href = 'non-haz.html'; // Redirect to the link
// }

function calculate() {
    const input = document.getElementById('calculator-input').value;
    const result = document.getElementById('calculator-result');
    
    if (input > 0) {
        const calculatedValue = (input / 21).toFixed(2);
        result.textContent = 'Withdraw: ' + calculatedValue + ' mL';
    } else {
        result.textContent = 'Please enter a positive number.';
    }
}
