function uniCharCode(event) {
    var char = event.which || event.keyCode;
    document.getElementById("demo").innerHTML = "The Unicode CHARACTER code is: " + char;
  }
  
  function uniKeyCode(event) {
    var key = event.keyCode;
    document.getElementById("demo2").innerHTML = "The Unicode KEY code is: " + key;
  }