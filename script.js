function sumResult() {
    let numberOne = document.getElementById("number1").value;
    let numberTwo = document.getElementById("number2").value;
    result = Number(numberOne) + Number(numberTwo);
    document.getElementById("sumresult").innerHTML = result;
    console.log(numberOne + numberTwo);
}
function subtractResult() {
    let numberThree = document.getElementById("number3").value;
    let numberFour = document.getElementById("number4").value;
    result = numberThree - numberFour;
    document.getElementById("subtractresult").innerHTML = result;
}
function divisionResult() {
    let numberFive = document.getElementById("number5").value;
    let numberSix = document.getElementById("number6").value;
    result = numberFive / numberSix;
    document.getElementById("divisionresult").innerHTML = result;
}
function multiplyResult() {
    let numberSeven = document.getElementById("number7").value;
    let numberEight = document.getElementById("number8").value;
    result = numberSeven * numberEight;
    document.getElementById("multiplyresult").innerHTML = result;
}
