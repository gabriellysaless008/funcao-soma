// Exemplo de como pegar a hora, ele mostra os minutos e segundos tbm//

function mostrarHora() {
    let data = new Date();
    console.log( data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds());
}

console.log( mostrarHora() );