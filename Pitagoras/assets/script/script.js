function habilita(){
    var option = document.getElementById("option").value;
 
    if(option !="0" ){ 
        document.getElementById("field1").disabled = false;
        document.getElementById("field2").disabled = false;
        document.getElementById("button").disabled = false;
       
        var labe1 = document.getElementById('label1');
        var labe2 = document.getElementById('label2');

        if (option == "1") {
            labe1.innerHTML  = "Lado b | Cateto Adjacente";
            labe2.innerHTML  = "Lado c | Hipotenusa";
        } else if (option == "2") {
            labe1.innerHTML  = "Lado a | Cateto Oposto";
            labe2.innerHTML  = "Lado c | Hipotenusa";
        } else if (option == "3") {
            labe1.innerHTML  = "Lado a | Cateto Oposto";
            labe2.innerHTML  = "Lado b | Cateto Adjacente";
        }

    }else{
        document.getElementById("field1").disabled = true;
        document.getElementById("field2").disabled = true;
        document.getElementById("button").disabled = true;
        document.getElementById("result").style.display = "none";
    }
}

function resultado(){
    document.getElementById("result").style.display = "block"
    var option = document.getElementById("option").value;

    var num1 = document.getElementById("field1").value;
    var num2 = document.getElementById("field2").value;
    var resultado = 0;
    var resulta = document.getElementById('result_text')
    
    if (option == "1") {

        resultado = Math.sqrt(Math.pow(Math.max(num1,num2),2) - Math.pow(Math.min(num1,num2), 2)).toFixed(2);
        resulta.innerHTML = ("Oposto: " + resultado);

    } else if (option == "2") {

        resultado = Math.sqrt(Math.pow(Math.max(num1,num2),2) - Math.pow(Math.min(num1,num2), 2)).toFixed(2);
        resulta.innerHTML = ("Adjacente: " + resultado);

    } else if (option == "3") {

        resultado = Math.hypot(num1, num2).toFixed(2);
        resulta.innerHTML = ("Hipotenusa: " + resultado);

    }   
}