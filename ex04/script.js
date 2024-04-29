function averageScore(){
    let firstGradesInput = document.getElementById("firstGrades");
    let secondGradesInput = document.getElementById("secondGrades");
    let thirdGradesInput = document.getElementById("thirdGrades");
    let fourthGradesInput = document.getElementById("fourthGrades");
    
    let firstGrades = parseFloat(firstGradesInput.value);
    let secondGrades = parseFloat(secondGradesInput.value);
    let thirdGrades = parseFloat(thirdGradesInput.value);
    let fourthGrades = parseFloat(fourthGradesInput.value)

    let result = document.getElementById("printScreen");
    let average = (firstGrades + secondGrades + thirdGrades + fourthGrades) / 4;
    result.innerHTML = `O resultado é: ${average}`;

    firstGradesInput.value = "";
    secondGradesInput.value = "";
    thirdGradesInput.value = "";
    fourthGradesInput.value = "";

    firstGradesInput.focus();
}