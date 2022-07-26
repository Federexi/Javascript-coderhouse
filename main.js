let repeticion = true

while(repeticion){
    let numeroPersonas = parseInt(prompt("Ingrese la cantidad de personas"))
    let total = parseFloat(prompt("Ingrese el total"))
    iva = parseFloat(prompt("Ingrese el IVA"))

    resultadoSinIva = total / numeroPersonas
    resultadoConIva = (iva/100) * resultadoSinIva 
    resultadoFinal = resultadoSinIva + resultadoConIva   
    alert(`Cada uno debe pagar $${resultadoFinal}`) 

    let confirmar = prompt("¿Desea realizar otra división de cuenta?").toLowerCase()

    if(confirmar == "no" || confirmar == "No" || confirmar == "NO" ){
        repeticion = false
    }
}