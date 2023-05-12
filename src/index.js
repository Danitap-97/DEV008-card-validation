import validator from "./validator.js";
const formulario = document.getElementById('formulario-tarjeta')
const numeroTarjeta = document.getElementById('numero')
//creo funcion tipo flecha para el numero
// keyup para que escuche el evento cuando suelte la tecla
formulario.numero.addEventListener('keyup', (e) => {
    let valornumero = e.target.value;
    formulario.numero.value = valornumero
        //expresiones regulares
        //elimino espacios en blanco
        .replace(/\s/g, '')
        //elimino las letras
        .replace(/\D/g, '')
        //elimino el ultimo espacio
        .trim();
})
//creo funcion para eliminar los numeros del nombre
formulario.titular.addEventListener('keyup', (e) => {
    let valortitular = e.target.value;
    formulario.titular.value = valortitular.replace(/[0-9]/g, '') /*.replace(/\s/g, '')*/;
})
//creo funcion para eliminar las letras del ccv de la tarjeta
formulario.ccv.addEventListener('keyup', (e) => {
    let valorccv = e.target.value;
    formulario.ccv.value = valorccv.replace(/\D/g, '').replace(/\s/g, '');
})
//creo ciclo para los meses//
for (let i = 1; i <= 12; i++) {
    //*realizo variable con el objetivo de crear un elemento "option"
    let opcion = document.createElement('option')
    opcion.value = i;
    opcion.innerText = i;
    mes.appendChild(opcion)
}
//creo variable para obtener el año actual del sistema//
const yearActual = new Date().getFullYear();
//creo ciclo para el año//
for (let i = yearActual; i <= yearActual + 8; i++) {
    let opcion = document.createElement('option')
    opcion.value = i;
    opcion.innerText = i;
    year.appendChild(opcion)
}
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const validarTarjeta = validator.isValid(formulario.numero.value)
    if (validarTarjeta) {
        alert('tarjeta valida');
    } else {
        alert('tarjeta invalida');
    }
    return(validator.maskify(valornumero));
})