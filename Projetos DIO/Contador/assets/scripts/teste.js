var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber<0) {
        currentNumberWrapper.style.color = "red"
    } else {
        currentNumberWrapper.style.color = "black"
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber<0) {
        currentNumberWrapper.style.color = "red"
    } else {
        currentNumberWrapper.style.color = "black"
    }
}

if (currentNumber<0) {
    currentNumberWrapper.style.color = "red"
}