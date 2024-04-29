function converter(){
    let cmValueInput = document.getElementById("cmValue");
    let cmValue = parseFloat(cmValueInput.value);

    let result = document.getElementById("printScreen");
    let mValue = cmValue/100;
    result.innerHTML = `${cmValue}cm é ${mValue}m`;

    cmValueInput.value = "";
    cmValueInput.focus();
}