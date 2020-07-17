var socket = io();

const lblTicket1 = $('#lblTicket1');
const lblTicket2 = $('#lblTicket2');
const lblTicket3 = $('#lblTicket3');
const lblTicket4 = $('#lblTicket4');

const lblEscritoio1 = $('#lblEscritorio1');
const lblEscritoio2 = $('#lblEscritorio2');
const lblEscritoio3 = $('#lblEscritorio3');
const lblEscritoio4 = $('#lblEscritorio4');

const lblTickets = [lblTicket1, lblTicket2, lblTicket3, lblTicket4];
const lblEscritorios = [lblEscritoio1,lblEscritoio2, lblEscritoio3, lblEscritoio4];

socket.on('estadoActual', function(data){

    console.log(data);

    var audio = new Audio('audio/new-ticket.mp3');
    
    audio.play();

    actualizaHTML(data.ultimos4);
});

function actualizaHTML(ultimos4){

    for(let i = 0; i < ultimos4.length; i++){

        lblTickets[i].text('Ticket ' + ultimos4[i].numero);
        lblEscritorios[i].text('Escritorio ' + ultimos4[i].escritorio);
    }
}