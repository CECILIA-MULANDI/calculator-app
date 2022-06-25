// *** Write your code here***

let display = document.querySelector("#display");
let clear = document.querySelector("#clear");
// let delete = document.querySelector("#delete");


function calcNumbers(x) {
    display.value = display.value + x;

}

function specs(y) {
    if (y === 'C') {
        display.value = "";
    }
}

function dlt(z) {
    display.value = display.value.slice(0, -1);
}