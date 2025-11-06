//your JS code here. If required.
 const num1 = document.getElementById("n1");
    const num2 = document.getElementById("n2");
    const button = document.getElementById("sum_btn");
    const result = document.getElementById("sum");

    // Add click event
    button.addEventListener("click", function() {
      const a = Number(num1.value);
      const b = Number(num2.value);

      if(num1.value === "" || num2.value === "") {
        result.textContent = ""; // empty if no input
      } else {
        result.textContent = "Sum: " + (a + b);
      }
    });