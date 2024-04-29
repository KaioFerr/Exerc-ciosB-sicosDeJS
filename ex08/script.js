function calculateWage(){
    let earnsPerHourInput = document.getElementById("earnsPerHours");
    let hoursPerMonthInput = document.getElementById("hoursPerMonth");


    let earnsPerHours = parseFloat(earnsPerHourInput.value);
    let hoursPerMonth = parseFloat(hoursPerMonthInput.value);

    let result = document.getElementById("printScreen");
    let wage = earnsPerHours*hoursPerMonth;
    result.innerHTML = `Salário Total: R$${wage.toFixed(2)}`;

    earnsPerHourInput.value = "";
    hoursPerMonthInput.value = "";
    earnsPerHourInput.focus();

} 