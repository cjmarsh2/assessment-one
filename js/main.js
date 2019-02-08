/*----- constants -----*/


/*----- app's state (variables) -----*/


/*----- cached element references -----*/
displayNum = document.querySelector('h1');


/*----- event listeners -----*/

document.getElementById('plus').addEventListener('click', add);
document.getElementById('minus').addEventListener('click', subtract);


/*----- functions -----*/


function add() {
    numOne = document.querySelector('h1').textContent;
    numTwo = document.querySelector('input').value;
    finalNum = parseInt(numOne);
    origNum = parseInt(numTwo);
    let sum = origNum + finalNum;
    finalNum = sum;
    displayNum.textContent = sum;
    if (sum < 0) {

    }

}

function subtract() {
    numOne = document.querySelector('h1').textContent;
    numTwo = document.querySelector('input').value;
    finalNum = parseInt(numOne);
    origNum = parseInt(numTwo);
    let minus = finalNum - origNum;
    finalNum = minus;
    displayNum.textContent = minus;
}

