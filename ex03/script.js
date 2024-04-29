function sumNumbers(){
    let firstNumberInput = document.getElementById("firstNumber");
    let secondNumberInput = document.getElementById("secondNumber");
    
    let firstNumber = parseFloat(firstNumberInput.value);
    let secondNumber = parseFloat(secondNumberInput.value);


    let result = document.getElementById("printScreen");
    let sum = firstNumber + secondNumber;
    result.innerHTML = `O resultado é: ${sum}`;

    firstNumberInput.value = "";
    secondNumberInput.value = "";
    
    firstNumberInput.focus();
}