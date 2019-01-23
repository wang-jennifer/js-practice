function calc() {
   let a = parseInt(document.querySelector("#value1").value);
   let b = parseInt(document.querySelector("#value2").value);
   let op = document.querySelector("#operator").value;
   let calculate;

   if (isNaN(a) || isNaN(b)) {
      calculate = "invalid";
   } else {
      if (op == "+") {
         calculate = a + b;
      } else if (op == "-") {
         calculate = a - b;
      } else if (op == "/") {
         calculate = a / b;
      } else if (op == "*") {
         calculate = a * b;
      } else {
         calculate = "invalid";
      }
   }
   document.querySelector("#result").innerHTML = calculate; // inserts value
}
