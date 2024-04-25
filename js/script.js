let input = document.getElementById("input");
let inputText = document.getElementById("text");
let buttonCheck = document.getElementById("btn-check");
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber)
buttonCheck.addEventListener("click", function () {
;

    findNumber();
})

function findNumber() { 
    if (input.value > randomNumber) {
        alert("The number you entered is greater than the random number,please check again")
    }

    else if (input.value < randomNumber) {
        alert("The number you entered is smaller than the random number,please check again");
    }
    else if (input.value == randomNumber) {
        alert("You guessed the random number correctly")
    }
    else {
        alert("error")
    }
}