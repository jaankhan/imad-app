var button = document.getElementById("Counter");
var counter = 0;
button.onclick = function() {
  counter = counter + 1 ;
  var span = document.getElementById("Count");
  span.innerHTML = counter.toString();
};
