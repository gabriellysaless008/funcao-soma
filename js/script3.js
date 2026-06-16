// Exemplo que o Norberto passou, ele soma muitos termos junto do laço de repetição //

function soma (...termos){
    let resultado = 0;

    for (i = 0; i < termos.length; i++){
        resultado += termos[i];
    }
    return resultado;
}

console.log( soma(5,2,7,3) )