function calculateCelsius(){
    let tempCelsiusInput = document.getElementById("tempCelsius");


    let tempCelsius = parseFloat(tempCelsiusInput.value);

    let result = document.getElementById("printScreen");
    let tempFah = ((9 * tempCelsius) / 5)+32;
    result.innerHTML = `Temperatura(ºF): ${tempFah.toFixed(1)}`;

    tempCelsiusInput.value = "";
    tempCelsiusInput.focus();

} 