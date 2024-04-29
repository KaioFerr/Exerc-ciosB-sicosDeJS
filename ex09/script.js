function calculateCelsius(){
    let tempFahInput = document.getElementById("tempFah");


    let tempFah = parseFloat(tempFahInput.value);

    let result = document.getElementById("printScreen");
    let tempCelsius = 5 * ((tempFah-32) / 9);
    result.innerHTML = `Temperatura(ºC): ${tempCelsius.toFixed(1)}`;

    tempFahInput.value = "";
    tempFahInput.focus();

} 