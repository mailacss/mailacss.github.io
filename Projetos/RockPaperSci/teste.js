function option(optr){
    // 1: pedra, 2: papel, 3: tesoura
    var machineOption = parseInt(Math.random()*(4-1)+ 1)
    var userOption = optr
    var resultado = "EMPATE"
    var labelResult = document.getElementById("result")

    console.log(machineOption)
    console.log(userOption)

    document.getElementById("imgMac").src=`assets/images/${machineOption}.png`
    document.getElementById("imgUser").src=`assets/images/${userOption}.png`

    switch (machineOption) {
        case 1:
            document.getElementById("mChoice").innerHTML = "PEDRA!"
            if(userOption == 2){
                resultado = "VOCÊ GANHOU!"
            } else if (userOption == 3) {
                resultado = "VOCÊ PERDEU!"
            }
          break;
        case 2:
            document.getElementById("mChoice").innerHTML = "PAPEL!"
            if(userOption == 3){
                resultado = "VOCÊ GANHOU!"
            } else if (userOption == 1) {
                resultado = "VOCÊ PERDEU!"
            }
          break;
        case 3:
            document.getElementById("mChoice").innerHTML = "TESOURA!"
            if(userOption == 1){
                resultado = "VOCÊ GANHOU!"
            } else if (userOption == 2) {
                resultado = "VOCÊ PERDEU!"
            }
            break;
      }
    
      labelResult.innerHTML = `<h1>${resultado}</h1>`
    

}
