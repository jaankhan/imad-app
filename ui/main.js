//counter

var counter = 0;
var button = document.getElementById('counter');
button.onclick = function(){
  counter = counter + 1;
  var count = document.getElementById('count');
  count.innerHTML = counter.toString();
};