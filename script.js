

const input = document.querySelector("#Answer");

function EnterNumber(num) {
  input.value += num;
}
function EnterOperator(op) {
  input.value += op;
}
function EnterEqual() {
  input.value = eval(input.value);
}
function EnterClear() {
  input.value = "";
}
