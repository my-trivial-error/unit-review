var button1 = document.getElementById("generate-linear-card");
var linear1 = document.getElementById("linear-card1");
var linear2 = document.getElementById("linear-card2");
var linear3 = document.getElementById("linear-card3");
var linearCard1Q1 = document.getElementById("linear-card1-q1");
var linearCard1Q2 = document.getElementById("linear-card1-q2");
var linearCard1Q3 = document.getElementById("linear-card1-q3");
var linearCard1Q4 = document.getElementById("linear-card1-q4");
var linearResult1 = document.getElementById("linear-result1");
var linearResult2 = document.getElementById("linear-result2");
var linearResult3 = document.getElementById("linear-result3");
var linearResult4 = document.getElementById("linear-result4");
var check1 = document.getElementById("check1");
var tryNum = Math.floor(Math.random()*3)+1;
function display1() {
    // alert("Working");
    if (tryNum == 1) {
        // alert(tryNum);
        linear1.classList.toggle("appear");
        linear1.style.display = "block";
    }
    if (tryNum == 2) {
        // alert(tryNum);
        linear2.classList.toggle("appear");
        linear2.style.display = "block";
    }
    if (tryNum == 3) {
        // alert(tryNum);
        linear3.classList.toggle("appear");
        linear3.style.display = "block";
    }
}
/* document.addEventListner('DOMContentLoaded', function(event) {
    button1.addEventListener('mousedown', display1());
}); */
button1.addEventListener("click", function (event) {
    if (event.value = "click") {
        // alert("hello");
    }
    // alert("Working");
    if (tryNum == 1) {
        // alert(tryNum);
        linear1.style.display = "block";
    }
    if (tryNum == 2) {
        // alert(tryNum);
        linear2.style.display = "block";
    }
    if (tryNum == 3) {
        // alert(tryNum);
        linear3.style.display = "block";
    }
});
check1.addEventListener("click", function (event) {
    if (event.value = "click") {
        // comment
    }
    if (linearCard1Q1.value == "4") {
        linearResult1.innerHTML = "Correct";
    } else {
        linearResult1.innerHTML = "Incorrect";
    }
    if (linearCard1Q2.value == "2") {
        linearResult2.innerHTML = "Correct";
    } else {
        linearResult2.innerHTML = "Incorrect";
    }
    if (linearCard1Q3.value == "-10") {
        linearResult3.innerHTML = "Correct";
    } else {
        linearResult3.innerHTML = "Incorrect";
    }
    if (linearCard1Q4.value == "2") {
        linearResult4.innerHTML = "Correct";
    } else {
        linearResult4.innerHTML = "Incorrect";
    }
});