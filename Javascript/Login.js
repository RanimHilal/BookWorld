function checkFunction() {
  const x = document.getElementById("id1","id2");
  if (!x.checkValidity()) {
    document.getElementById("demo").innerHTML = x.validationMessage;
  } else {
    document.getElementById("demo").innerHTML = "Your successfully logged in";
  } 
} 
