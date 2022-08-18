const personas = []

let nombreHTMLelemento = document.getElementById("nombre")
let montoHTMLelemento = document.getElementById("monto")
let totalHTMLelemento = document.getElementById("total")
let listaPersonasHTMLelemento = document.getElementById("personitas")
let aporteHTMLelemento = document.getElementById("aporte")

document.getElementById("calcular").addEventListener("click", ingresarPersona)

function ingresarPersona(){

    let persona = nombreHTMLelemento.value;
    let monto = montoHTMLelemento.value;

    personas.push({
        nombre:persona,
        monto: parseInt(monto),
    });

    nombreHTMLelemento.value = "";
    montoHTMLelemento.value = "";

    localStorage.setItem("personas", JSON.stringify(personas));
    local = JSON.parse(localStorage.getItem("personas"));
    console.log(local);

    Toastify({
        text: "Ingresado correctamente",
        duration: 1500,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "#302b63",
        },      
    }).showToast();

    definirTotal();
}
function definirTotal(){

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