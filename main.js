const personas = []

var nombreHTMLelemento = document.getElementById("nombre")
var montoHTMLelemento = document.getElementById("monto")
var totalHTMLelemento = document.getElementById("total")
var listaPersonasHTMLelemento = document.getElementById("personitas")
var aporteHTMLelemento = document.getElementById("aporte")

document.getElementById("calcular").addEventListener("click", ingresarPersona)

function ingresarPersona(){

    let persona = nombreHTMLelemento.value;
    let monto = montoHTMLelemento.value;

    personas.push({
        nombre:persona,
        monto:parseFloat(monto),
    });

    nombreHTMLelemento.value = "";
    montoHTMLelemento.value = "";

    definirTotal();
}
function definirTotal(){

    listaPersonasHTMLelemento = "";

    let lista = "";
    let total = 0;

    for(let i = 0; i < personas.length; i++){
        total += personas[i].monto
        lista += `${personas[i].nombre}: ${personas[i].monto} <br>`;
    }

    let iva = 1.21

    totalHTMLelemento.innerHTML = total * iva;
    listaPersonasHTMLelemento.innerHTML = lista;
    aporteHTMLelemento.innerHTML = (total * iva) / personas.length;
}