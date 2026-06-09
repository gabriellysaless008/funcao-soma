function soma(a , b) {

    let n1, n2;
    let soma;

    n1 = Number( document.getElementById( "n1" ).value );
    n2 = Number( document.getElementById( "n2" ).value );


    console.log(n1 , n2);
    return a + b;

}

function calcula(){
    console.log(soma(n1, n2))
}