let modo = document.getElementById("modo");
let body = document.body;

modo.addEventListener("click", function(){
    let val = body.classList.toggle("dark")
    localStorage.setItem("modoPage", val)
})

let valor = localStorage.getItem("modoPage")
if(valor=="true"){
    body.classList.add("dark")
}
else{
    body.classList.remove("dark")
}