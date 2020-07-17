var socket = io();

const label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});

socket.on('estadoActual', (resp) => {

    label.text(resp.actual);
})

$('button').on('click', function(){
    
    socket.emit('siguienteTicket', null, function(siguienteTicket){

        label.text(siguienteTicket);
    });
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Manuel',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);

});