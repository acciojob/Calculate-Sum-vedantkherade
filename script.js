// your JS code here
document.getElementById("sum_btn").addEventListener("click", function() {
      const n1 = Number(document.getElementById("n1").value);
      const n2 = Number(document.getElementById("n2").value);
      const sum = n1 + n2;
      document.getElementById("Sum").innerText = sum;