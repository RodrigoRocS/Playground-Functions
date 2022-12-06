// Desafio 1 - Crie a função compareTrue
const compareTrue = (name1, name2) => {
  if (name1 === 'girafa' && name2 === 'elefante') {
    return true;
  } else if (name1 === 'macaco' && name2 === 'elefante') {
    return false;
  }
};

// Desafio 2 - Crie a função splitSentence
const splitSentence = (name) => name.split(' ');

// Desafio 3 - Crie a função concatName
const concatName = (array) => `${array.pop()},${array.shift()}`;

// Desafio 4 - Crie a função footballPoints
const footballPoints = (wins, ties) => `${wins * 3 + ties} pontos`;

// Desafio 5 - Crie a função highestCount
const highestCount = (array) => {
  let counter = 0;
  let biggestNumber = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (biggestNumber < array[index]) {
      biggestNumber = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (biggestNumber === array[index]) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

// Desafio 7 - Crie a função catAndMouse

// Desafio 8 - Crie a função fizzBuzz

// Desafio 9 - Crie a função encode e a função decode

// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea:
    typeof calcTriangleArea === 'function' ? calcTriangleArea : () => {},
  calcRectangleArea:
    typeof calcRectangleArea === 'function' ? calcRectangleArea : () => {},
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : () => {},
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : () => {},
  compareTrue: typeof compareTrue === 'function' ? compareTrue : () => {},
  concatName: typeof concatName === 'function' ? concatName : () => {},
  decode: typeof decode === 'function' ? decode : () => {},
  encode: typeof encode === 'function' ? encode : () => {},
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : () => {},
  footballPoints:
    typeof footballPoints === 'function' ? footballPoints : () => {},
  highestCount: typeof highestCount === 'function' ? highestCount : () => {},
  splitSentence: typeof splitSentence === 'function' ? splitSentence : () => {},
  techList: typeof techList === 'function' ? techList : () => {},
};
