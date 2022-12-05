         function myFunction(){
          let data = "";  let name = document.getElementById("userName").value
          let book = document.getElementById("bookName").value
          let comment = document.getElementById("Comment").value
         
         data = "User name : "+name+"<br/>Book name : "+book+ "<br/>User comment : "+comment
         
         document.getElementById("data").innerHTML = data  // display data to paragraph
         }
