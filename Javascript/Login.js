function myFunction() {
  const x = document.getElementById("id1","id2");
  if (!x.checkValidity()) {
    document.getElementById("demo").innerHTML = "Please complete the fields given.";
  } else {
    document.getElementById("demo").innerHTML = "Your successfully logged in";
  } 
} 
