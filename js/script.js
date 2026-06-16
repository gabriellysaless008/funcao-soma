// Função simples, ela soma apenas 2 numeros //

function soma(a , b) {

    let n1, n2;
    let somando;

    n1 = Number( document.getElementById( "n1" ).value );
    n2 = Number( document.getElementById( "n2" ).value );

    somando = n1 + n2;

    console.log("Numeros inseridos: ", n1 , n2);
    
    document.getElementById( "somando" ).innerHTML = "O resultado é: " + somando;

    console.log("resultado: ", somando);
}

function calcula(){
    return a + b;
}