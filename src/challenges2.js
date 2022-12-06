// Desafio 11 - Crie a função generatePhoneNumber
const generatePhoneNumber = (param) => {
  let counter = 1;
  if (param.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let index = 0; index < param.length; index += 1) {
    if (param[index] === param[index + 1]) {
      counter += 1;
    }
  }

  for (let index = 0; index < param.length; index += 1) {
    if (param[index] < 0 || param[index] > 9 || counter >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return `(${param[0]}${param[1]}) ${param[2]}${param[3]}${param[4]}${param[5]}${param[6]}-${param[7]}${param[8]}${param[9]}${param[10]}`;
};
// Desafio 12 -  Crie a função triangleCheck
const triangleCheck = (lineA, lineB, lineC) => {
  if (
    (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) ||
    (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) ||
    (lineC < lineB + lineA && lineC > Math.abs(lineB - lineA))
  ) {
    return true;
  } else {
    return false;
  }
};
// Desafio 13 - Crie a função hydrate
const hydrate = (param) => {
  let numbers = param.match(/\d+/g);
  let waterglass = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    waterglass += parseInt(numbers[index]);
  }
  if (waterglass > 1) {
    return `${waterglass} copos de água`;
  }
  return `${waterglass} copo de água`;
};

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber:
    typeof generatePhoneNumber === 'function' ? generatePhoneNumber : () => {},
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : () => {},
  hydrate: typeof hydrate === 'function' ? hydrate : () => {},
};
