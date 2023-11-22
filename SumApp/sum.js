const calculateButton = document.getElementById('calculate');
const result = document.getElementById('result');
const clearButton = document.getElementById('clear');

// function to calculate the sum
calculateButton.addEventListener('click', function() {
    //getting values
    const number1 = document.getElementById('number1').value;
    const number2 = document.getElementById('number2').value;

    //chicking if inputs are correct
    if (number1 === '' || number2 === '') {
        result.innerHTML = 'Please enter a number';
        return;
    } else if (isNaN(number1) || isNaN(number2)) {
        result.innerHTML = 'Please enter a valid number';
        return;
    //calculating the sum
    }  else {
        const sum = parseFloat(number1) + parseFloat(number2);
        result.innerHTML = 'The result is ' + sum;
    }  
})

//function to clear calculation
clearButton.addEventListener('click', function(){
    result.innerHTML = '';
    document.getElementById('number1').value = '';
    document.getElementById('number2').value = '';
});