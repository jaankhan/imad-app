var counter = 0 ;
var button = document.getElementById('counter');
    button.onclick = Function() {
    counter = counter + 1 ;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
}
