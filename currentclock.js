function currentTime() {
    var time = new Date();
    var current = time.toLocaleTimeString();
    document.getElementById('time').innerHTML = current;
}
function backgroundChange() {
    
}
setInterval(currentTime, 1000);