// Capítulo 2 - Ordenação por seleção / Arrays e Listas encadeadas

function buscaIndiceMenorElemento(arr) {
  let menorElemento = arr[0];
  let menorIndice = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < menorElemento) {
      menorElemento = arr[i];
      menorIndice = i;
    }
  }

  return menorIndice;
}

function ordenacaoPorSelecao(arr) {
  const novoArr = [];
  const tamanhoArray = arr.length;

  for (let i = 0; i < tamanhoArray; i++) {
    let menorIndice = buscaIndiceMenorElemento(arr);
    novoArr.push(arr[menorIndice]);
    arr.splice(menorIndice, 1);
  }

  return novoArr;
}

const teste = [30, 20, 10, 40, 50, 5, 70];
const testeOrdenado = ordenacaoPorSelecao(teste);
console.log(testeOrdenado);

/*  Arrays são ótimos se você deseja ler elementos aleatórios, pois pode encontrar qualquer elemento instantaneamente em um array;
    Na lista encadeada, os elementos não estão próximos uns dos outros, então você não pode calcular instantaneamente a posição de um elemento na memória - precisa ir ao primeiro elemento para encontrar o endereço do segundo, e assim por diante;
*/

// No array, todos os elemntos são armazenados um ao lado do outro;
// Na lista, os elementos estão espalhados e um elemento armazena o endereço do próximo elemento;
// Arrays permitem leituras rápidas;
// Listas encadeadas permeitem rápidas inserções e eliminações;
// Todos os elementos de uma array devem ser do mesmo tipo (todos ints, todos doubles, e assim por diante).
