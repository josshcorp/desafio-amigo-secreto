// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// app.js
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validación
    if (!nombre) {
        alert('Por favor ingresa un nombre válido');
        return;
    }

    // Agregar a la lista
    amigos.push(nombre);
    input.value = '';
    
    // Actualizar lista visual
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = amigos.map(nombre => 
        `<li>${nombre}</li>`
    ).join('');
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    
    // Validar que hay amigos
    if (amigos.length === 0) {
        resultado.innerHTML = '<li>Agrega amigos primero</li>';
        return;
    }

    // Selección aleatoria
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];
    
    // Mostrar resultado
    resultado.innerHTML = `<li>¡El amigo secreto es: ${amigoSecreto}!</li>`;
}