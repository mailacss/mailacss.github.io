function esconde(el) {
    var display = document.getElementById(el).style.display;
    if(display == "none")
        document.getElementById(el).style.display = 'block';
    else
        document.getElementById(el).style.display = 'none';
}
function mostra(el) {
    var display = document.getElementById(el).style.display;
    if(display == "flex")
        document.getElementById(el).style.display = 'none';
    else
        document.getElementById(el).style.display = 'flex';
}



function pegaNota(clicked){
    var ex = document.getElementById("selected");
    ex.innerHTML = "You selected " + clicked + " out of 5";

}