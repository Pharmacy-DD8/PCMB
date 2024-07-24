function calculate() {
    const input1 = parseFloat(document.getElementById('calculator-input1').value);
    const input2 = parseFloat(document.getElementById('calculator-input2').value);
    const result = document.getElementById('calculator-result');
    
    if (input1 > 0 && input2 > 0) {
        const calculatedValue1 = (input1 / 50).toFixed(2);
        const calculatedValue2 = (input2 - calculatedValue1).toFixed(2);
        result.innerHTML = calculatedValue1 + ' mL of 5FU<br>' + calculatedValue2 + ' mL of 0.9% NS';
    } else {
        result.textContent = 'Please enter positive numbers.';
    }
}
