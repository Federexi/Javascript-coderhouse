function pago(){
    let personas = parseInt(prompt("Ingrese la cantidad de personas"))
    let total = parseFloat(prompt("Ingrese el total"))
    let iva = parseFloat(prompt("Ingrese el iva"))

    resultadoSinIva = total / personas
    resultadoConIva = (iva/100) * resultadoSinIva
    resultadoFinal = resultadoSinIva + resultadoConIva
    alert(`Cada uno debe pagar $${resultadoFinal}`)
    return resultadoFinal
}