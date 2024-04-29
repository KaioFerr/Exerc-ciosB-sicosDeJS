function calculateArea(){
    let radiusValueInput = document.getElementById("radiusValue");
    let radiusValue = parseFloat(radiusValueInput.value);

    let result = document.getElementById("printScreen");
    let area = (Math.PI*(radiusValue**2));
    result.innerHTML = `área do circulo: ${area.toFixed(2)}m²`;

    radiusValueInput.value = "";
    radiusValueInput.focus();

}