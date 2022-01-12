// Capítulo 1 - Introdução a algoritmos / Notação Big O

function binarySearch(list, item) {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    const guess = list[middle];

    if (guess === item) return middle;

    if (guess > item) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }
  return null;
}

const listTest = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const test = binarySearch(listTest, 5);

console.log(test); 

/*  Com a pesquisa binária, você chuta um número intermediário e elimina a metade dos números restantes a cada vez;
    Log n na base 2;
    Não basta saber quanto tempo um algoritmo leva para ser executado, é preciso saber se o tempo de execução aumenta conforme a lista aumenta;
 */

// A pesquisa binária é muito mais rápida que a pesquisa simples;
// A rapidez de um algoritmo não é medida em segundos;
// O(log n) é mais rápido que O(n), e O(log n) fica ainda mais raṕido conforme os elemntos da lista aumentam;
// O tempo de execução de um algoritmo é medido por meio de seu crescimento;
// O tempo de execução dos algoritmos é expresso na notação Big O;
