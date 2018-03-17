//counter

var counter = 0;
var button = document.getElementById('button');
button.onclick = function(){
  counter = counter + 1;
  var count = document.getElementById('count');
  count.innerHTML = counter.toString();
};