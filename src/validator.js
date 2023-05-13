//convierto mi numero que esta en string en un array con split
const convertirArray = (numero) => {
  return numero.split("")
};
//invierto el arreglo
const invertirarray = (arreglo) => {
  return arreglo.reverse()
};
//multipico por dos cada elemento del arreglo que este en un indice impar
const multiplicoImpar = (arreglo) => {
  return arreglo.map((item, i) => {
    if (i % 2 !== 0) {
      return item * 2
    }
    else {
      return Number(item);
    }
  })
};
//sumo los digitos del arreglo que esten en un indice impar
const sumoImpar = (arreglo) => {
  return arreglo.map((item, i) => {
    if (i % 2 !== 0) {
      if (item > 9) {
        return item - 9;
      }
      else {
        return item;
      }
    } else {
      return item;
    }
  })
};
//sumo todos los valores del arreglo
const sumaTotal = (arreglo) => {
  let suma = 0;
  for (let i = 0; i < arreglo.length; i++) {
    suma = suma + arreglo[i];
  }
  return suma;
}
const validator = {
  isValid: function (cardNumber) {
    //invoco funciones
    const cardNumberArray = convertirArray(cardNumber);
    const cardNumberArrayReversed = invertirarray(cardNumberArray);
    const cardNumbermultiplo = multiplicoImpar(cardNumberArrayReversed);
    const cardNumberSumaImpar = sumoImpar(cardNumbermultiplo);
    const cardNumberSumaTotal = sumaTotal(cardNumberSumaImpar);
    //verifico si la suma total es divisible por 10
    if (cardNumberSumaTotal % 10 === 0) {
      return true;
    } else {
      return false;
    }
  },
  //creo un objeto con su propiedad numero
  maskify: (numero) => {
    //se divide el objeto en un array
    const numeroArray = convertirArray(numero);
    const numeroArrayInvertido = invertirarray(numeroArray);
    let numerocubierto = "";
    //se crea ciclo para enmascarar
    for (let i = 0; i < numeroArrayInvertido.length; i++) {
      if(i <= 3) {
        numerocubierto += numeroArrayInvertido[i].toString();
      } else {
        numerocubierto += "#"
      }
    }
    const arrayNumeroCubierto = invertirarray(numerocubierto.split(''));
    return arrayNumeroCubierto.join('');
  }
}; export default validator;
