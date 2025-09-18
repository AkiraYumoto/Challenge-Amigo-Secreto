// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function ingresarNombre() {
    nombreEntrada = document.getElementById('amigo').value
    if (nombreEntrada == '') {
        alert('Por favor, ingrese un nombre');
    }else{
        amigos.push(nombreEntrada);
        document.getElementById('amigo').value = ''
    }
}
function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

   amigos.forEach(amigo =>{
    lista.innerHTML = `<li>{amigo}</li>`
   });
}

function sortearAmigos(){
    if (amigos == ''){
        alert("No agregaste amigos")
    }else{
        const amigoAleatorio = Math.floor(Math.random() * amigos.length);
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = amigos[amigoAleatorio];
    }
}

