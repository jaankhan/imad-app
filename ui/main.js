var counter = 0 ;
var button = document.getElementById("Counter");
button.onclick = function() {
  counter = counter + 1 ;
  var span = document.getElementById("Count");
  span.innerHTML = counter.toString();
};
