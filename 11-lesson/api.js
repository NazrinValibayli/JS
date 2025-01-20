let xhttp = new XMLHttpRequest()
xhttp.open("GET", "https://api.weather.gov/points/34.643939,-101.001792")



xhttp.addEventListener("load",function(){
   // console.log(this.responseText)
   const data = JSON.parse(this.responseType)
   //console.log(data.properties.timeZone)

   document.querySelector(".apiResponse").innerHTML = data.properties.relativeLocation.properties.state

})

function myFunction() {
   let text;
   if (document.getElementById("id1").validity.rangeUnderflow) {
     text = "SAYI KICIKDIR";
   } else {
     text = "Input OK";
   } 
   document.getElementById("demo").innerHTML = text;
 }

//xhttp.send()
//console.log(xhttp)