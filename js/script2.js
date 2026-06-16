// Somando 3 numeros //

function soma(a , b, c) {

    let n1, n2, n3;
    let somando;

    n1 = Number( document.getElementById( "n1" ).value );
    n2 = Number( document.getElementById( "n2" ).value );
    n3 = Number( document.getElementById( "n3" ).value );

    somando = n1 + n2 + n3;

    console.log("Numeros inseridos: ", n1 , n2, n3);
    
    document.getElementById( "somando" ).innerHTML = "O resultado é: " + somando;

    console.log("resultado: ", somando);
}

function calcula(){
    return a + b + c;
}