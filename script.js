$( document ).ready(function() {

    $('#formulario').submit(function(evento){
        //evitar que se actualice la pag
        evento.preventDefault();
        //nombre y edad ingresadas como variables
        var nombre = $('#nombre').val();
        var edad = $('#edad').val();
        //alerta con nombre y edad ingresados
        alert(nombre + " " + edad);
    })



});