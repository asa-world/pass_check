// Get the snackbar DIV
var x = document.getElementById("snackbar")
// After 3 seconds, remove the show class from DIV
setTimeout(function(){ x.className =x.className.replace("show", ""); },1800);