
let ContadorInicio = 0

//oq vai ser exibido
let textNoSite = document.getElementById("BotaoClique")
textNoSite.style.font = "normal 25pt Arial"


function Reset(){
textNoSite.innerHTML = ("Clique Aqui!")
ContadorInicio = 0
}

function Adição(){
ContadorInicio ++
console.log(`${ContadorInicio}`)
textNoSite.innerHTML = ContadorInicio
}