/*function mOver(obj) {
    obj.innerHTML = "Thank You"
  }
  
  function mOut(obj) {
    obj.innerHTML = "Mouse Over Me"
  }
    */
   
  /*function mDown(obj) {
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Release Me";
  }
  
  function mUp(obj) {
    obj.style.backgroundColor="#D94A38";
    obj.innerHTML="Thank You";
  }
    */
   

  var x = document.getElementById("myBtn");
  x.addEventListener("mouseover", myFunction);
  x.addEventListener("click", mySecondFunction);
  x.addEventListener("mouseout", myThirdFunction);
  
  function myFunction() {
    document.getElementById("demo").innerHTML += "Moused over!<br>";
  }
  
  function mySecondFunction() {
    document.getElementById("demo").innerHTML += "Clicked!<br>";
  }
  
  function myThirdFunction() {
    document.getElementById("demo").innerHTML += "Moused out!<br>";
  }