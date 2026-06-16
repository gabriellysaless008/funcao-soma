function verifica(){

    let email, senha;
    let message;

    email = document.getElementById( "email" ).value;
    senha = document.getElementById( "senha" ).value;
    message = document.getElementById( "message" ).value;

    console.log("Informações inseridas: ", email , senha);

    if (senha == '1234' && email == 'ruby@email.com'){
        document.getElementById( "message" ).innerHTML = "Login correto! Redirecionando para a pagina...";
    }else{
        document.getElementById( "message" ).innerHTML = "Login incorreto! Verifique as informações";
    }

}

function entrando(){
    return verifica;
}