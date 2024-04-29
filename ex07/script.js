function calculateArea(){
    let sideValueInput = document.getElementById("sideValue");
    let sideValue = parseFloat(sideValueInput.value);

    let result = document.getElementById("printScreen");
    let area = (sideValue**2);
    result.innerHTML = `área do circulo: ${area.toFixed(2)}m² e dobro dessa área é ${2*area.toFixed(2)}m²`;

    sideValueInput.value = "";
    sideValueInput.focus();

}