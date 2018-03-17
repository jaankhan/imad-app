//counter

var button = document.getElementById('button');
var counter = 0;
button.onclick = function(){
  counter = counter + 1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
};

var submit = document.getElementById('submit_btn');
submit.onclick = function(){
  var names=['name1','name2','name3','name4'];
  var list='';
  for(i=0;i<names.length;i++){
      list =list+'<li>'+names[i]+'</li>';
  }
  var ul = document.getElementById('namelist');
  ul.innerHYML = list;
};