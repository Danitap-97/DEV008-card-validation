import validator from "./validator.js";

const formulario = document.getElementById('formulario-tarjeta')
//creo funcion tipo flecha para el numero
// keyup para que escuche el evento cuando suelte la tecla
formulario.numero.addEventListener('keyup', (e) => {
  const valornumero = e.target.value;
  formulario.numero.value = valornumero.replace(/\s/g, '').replace(/\D/g, '').trim();
  //expresiones regulares elimino espacios en blanco  
  //elimino las letras //elimino el ultimo espacio
  const numerosecreto = document.getElementById('numerosecreto');
  numerosecreto.innerText = validator.maskify(valornumero);
})
//creo funcion para eliminar los numeros del nombre
formulario.titular.addEventListener('keyup', (e) => {
  const valortitular = e.target.value;
  formulario.titular.value = valortitular.replace(/[0-9]/g, '') /*.replace(/\s/g, '')*/;
})
//creo funcion para eliminar las letras del ccv de la tarjeta
formulario.ccv.addEventListener('keyup', (e) => {
  const valorccv = e.target.value;
  formulario.ccv.value = valorccv.replace(/\D/g, '').replace(/\s/g, '');
})
//creo ciclo para los meses//
const mes = document.getElementById('mes');
for (let i = 1; i <= 12; i++) {
//*realizo variable con el objetivo de crear un elemento "option"
  const opcion = document.createElement('option');
  opcion.value = i;
  opcion.innerText = i;
  mes.appendChild(opcion)
}
//creo variable para obtener el año actual del sistema
const year = document.getElementById('year')
//
const yearActual = new Date().getFullYear()//creo ciclo para el año//
for (let i = yearActual; i <= yearActual + 8; i++) {
  const opcion = document.createElement('option')
  opcion.value = i;
  opcion.innerText = i;
  year.appendChild(opcion)
}

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const validarTarjeta = validator.isValid(formulario.numero.value)
  if (validarTarjeta) {
    alert('tarjeta valida');
  }else{
    alert('tarjeta invalida');
  }
});
