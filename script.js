// your JS code here
let btn = document.getElementById("sum_btn");

btn.addEventListener("click", function () {
  let num1 = document.getElementById("n1").value;
  let num2 = document.getElementById("n2").value;

  if (num1 === "" || num2 === "") {
    document.getElementById("sum").innerText = "";
    return;
  }

  let sum = Number(num1) + Number(num2);
  document.getElementById("sum").innerText = "Sum: " + sum;
});
