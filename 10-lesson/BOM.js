/*

document.getElementById("demo").innerHTML ="Browser inner window width: " + window.innerWidth + "px<br>" +
"Browser inner window height: " + window.innerHeight + "px";

document.getElementById("demo").innerHTML ="Screen pixel depth is " + screen.pixelDepth;
*/

function newDoc() {
    window.location.assign("https://www.w3schools.com")
  }


  function goBack() {
    window.history.back()
  }

  function goForward() {
    window.history.forward()
  }
  
 // document.getElementById("demo").innerHTML ="navigator.language is " + navigator.language;

 function myFunction() {
    let text;
    let person = prompt("Please enter your name:", "Nezrin Velibeyli");
    if (person == null || person == "") {
      text = "User cancelled the prompt.";
    } else {
      text = "Hello " + person + "! How are you today?";
    }
    document.getElementById("demo").innerHTML = text;
  }

 
  function myFunction() {
    alert('Hello');
  }


  function myFunction() {
    alert("Hello");
  }


  setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}


let myVar = setInterval(myTimer ,1000);
function myTimer() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}