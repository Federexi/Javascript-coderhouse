const personas = []
const api_key = "28ec1e308f07093e6d9e7ec22501fc72"
const lat = -34.6000000
const long = -58.4500000

let clima = document.getElementById("clima")
let nombreHTMLelemento = document.getElementById("nombre")
let montoHTMLelemento = document.getElementById("monto")
let totalHTMLelemento = document.getElementById("total")
let listaPersonasHTMLelemento = document.getElementById("personitas")
let aporteHTMLelemento = document.getElementById("aporte")

document.getElementById("calcular").addEventListener("click", ingresarPersona)

//API de temperatura de Buenos Aires
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}&units=metric`)
.then(response => response.json())
.then(({main}) => {
    clima.innerHTML = `<p>${main.temp}°C</p>`
})

function ingresarPersona(){

    let persona = nombreHTMLelemento.value;
    let monto = montoHTMLelemento.value;


    if (persona == "") {
        Toastify({
            text: "No ingreso un nombre",
            duration: 1500,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "#302b63",
            },      
        }).showToast();
        return false
    }

    if (isNaN(parseFloat(monto))){
        Toastify({
            text: "No ingreso un monto",
            duration: 1500,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "#302b63",
            },      
        }).showToast();
        return false 
    }

    personas.push({
        nombre:persona,
        monto: parseInt(monto),
    });

    nombreHTMLelemento.value = "";
    montoHTMLelemento.value = "";

    localStorage.setItem("personas", JSON.stringify(personas));
    local = JSON.parse(localStorage.getItem("personas"));
    console.log(local);

    if(personas.length > 0){
        console.log(...personas)
    } /*Spread de personas*/

    
    if(personas.length > 0){
            personas.map((item) => {
                console.log(item.nombre)
            })
    } /*Mapeo cada nombre de cada persona ingresada ya que no pude realizar una destructuración para mostrar los nombres al ser un array vacío*/

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