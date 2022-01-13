// Capítulo 3 - Recursão / A pilha

// CONTADOR - base case, recursive case

function contador(i) {
    console.log(i);

    // base case
    if(i <= 1) return 
    // recursive case
    else {
        contador(i -1);
    }
}

contador(7);


// GREET - pilha de chamada

function saudacao2(nome) {
    console.log('Como vai ' + nome + '?');
}

function tchau() {
    console.log('ok, tchau!');
}

function saudacao(nome) {
    console.log('Olá, ' + nome + '?');

    saudacao2(nome); 
    console.log('preparando para dizer tchau...');
    tchau();
    
}

saudacao('Ana');


// FATORIAL - pilha de chamada com recursão

function fatorial(num) {
    if(num === 1) return 1; 
    else {
        return num * fatorial(num - 1); // fatorial(num - 1) sempre será a chamada de função que acabou de retornar / 
    }
}

console.log(fatorial(7));



// RECURSIVE SELECTION SORT - Recursão com Ordenação por Seleção (selectionSort.js)

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

function selectionSort(arr) {
    
    if(!arr.length) return [];

    let menorNumero = arr.splice(buscaIndiceMenorElemento(arr), 1);
    return menorNumero.concat(selectionSort(arr));

}

let arrayTeste = [9, 23, 5, 4, 1, -6, 33];

console.log(selectionSort(arrayTeste));



/*  Recursão é quando uma função chama a si mesma;
    Toda função recursiva tem dois casos: o caso-base e o caso-recursivo;
    Uma pilha tem duas operações: push e pop;
    Todas aschamadas de função vão para a pilha de chamada;
    A pilha de chamada pode ficar muito grande e ocupar muita memória.
*/

