const form = document.getElementById("form-numbers")




form.addEventListener("submit", function(e){
    e.preventDefault()

    let campoA = parseFloat(document.querySelector(".campoA").value)
    let campoB = parseFloat(document.querySelector(".campoB").value)
    let sucesso = document.querySelector(".succsses-calc")
    let erro = document.querySelector(".error-calc")
    

    if(campoB > campoA){
        const mensagemsucesso = `O campo do número B (${campoB}) é maior que o campo do número A (${campoA})`
        sucesso.innerHTML = mensagemsucesso
        sucesso.style.display = "block"
    }
    else{
        const mensagemerro = `O campo do número B (${campoB}) não é maior que o campo do número A (${campoA})`
        erro.innerHTML = mensagemerro
        erro.style.display = "block"
    }

})



/*function calculo(b,a){
    return b > a
}

form.addEventListener("submit", function(e){
    e.preventDefault()

    let campoA = parseFloat(document.querySelector(".campoA").value)
    let campoB = parseFloat(document.querySelector(".campoB").value)
    let sucesso = document.querySelector(".succsses-calc")
    let erro = document.querySelector(".error-calc")
    

    if(calculo(campoB, campoA)){
        const mensagemsucesso = `O campo do número B (${campoB}) é maior que o campo do número A (${campoA})`
        sucesso.innerHTML = mensagemsucesso
        sucesso.style.display = "block"
    }
    else{
        const mensagemerro = `O campo do número B (${campoB}) não é maior que o campo do número A (${campoA})`
        erro.innerHTML = mensagemerro
        erro.style.display = "block"
    }

})*/