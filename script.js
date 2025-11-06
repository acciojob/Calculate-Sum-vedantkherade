// your JS code here
const num1 = document.getElementById("n1");
const num2 = document.getElementById("n2");
const button = document.getElementById("sum_btn");
const result = document.getElementById("Sum"); // Capital S

button.addEventListener("click", function() {
  const a = Number(num1.value);
  const b = Number(num2.value);

  if (num1.value === "" || num2.value === "") {
    result.textContent = "";
  } else {
    result.textContent = a + b;
  }
});