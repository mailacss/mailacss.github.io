var ex = '';

function pegaNota(clicked){
    ex = document.getElementById("selected");
    ex.innerHTML = "You selected " + clicked + " out of 5";
}

function esconde(el) {
    var display = document.getElementById(el).style.display;
    if (ex == '') {
        alert("Please, select a rating.")
    } else {
        if(display == "none")
            document.getElementById(el).style.display = 'block';
        else
            document.getElementById(el).style.display = 'none';
    }

}

function mostra(el) {
    if (ex !== '') {
        var display = document.getElementById(el).style.display;
        if(display == "flex")
            document.getElementById(el).style.display = 'none';
        else
            document.getElementById(el).style.display = 'flex';
    }
}

