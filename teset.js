/* eslint-disable complexity */
// eslint-disable-next-line max-lines-per-function
const generatePhoneNumber = (param) => {

  if (param.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < param.length; index += 1) {
    if (param[index] < 0 || param[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  let contador = 0;
  for (let index = 0; index < param.length; index += 1) {
    contador = 0;
    for (let index2 = 1; index2 < param.length; index2 += 1) {
      if (param[index] === param[index2]) {
        contador += 1;
        console.log(contador);
      }
    }
    if (contador >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return `(${param[0]}${param[1]}) ${param[2]}${param[3]}${param[4]}${param[5]}${param[6]}-${param[7]}${param[8]}${param[9]}${param[10]}`;
};
console.log(generatePhoneNumber([1, 2, 8, 0, 5, 3, 7, 8, 9, 1, 8]));
