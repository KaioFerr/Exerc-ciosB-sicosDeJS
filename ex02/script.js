function saveNumber(){
    let number = document.getElementById("number");
    let printScreen = document.getElementById("printScreen");

    printScreen.innerHTML =`Número digitado: ${number.value}`;
    number.value = "";
    number.focus();
}