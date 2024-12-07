$(document).ready(function () {

    // Array para cargar a tabla. 
    let solicitudes = [{
        "id": 1,
        "nombre": "Juan",
        "apellido": "Secreto"
    }, {
        "id": 2,
        "nombre": "Antonio",
        "apellido": "Pero"
    }, {
        "id": 3,
        "nombre": "de la Encarnación",
        "apellido": "No tanto"
    }, {
        "id": 4,
        "nombre": "Alejandro",
        "apellido": "Caldi"
    }
    ];


    // Evento click para que cargue el array en tabla
$("#boton_maestro").on('click', function (event) {
    let $maestro = $('#maestro tbody');

    for (i = 0; i < solicitudes.length; i++) {
        let $linea = $('<tr>');
        $linea.append($('<td id="id">').text(solicitudes[i].id));
        $linea.append($('<td id="nombre">').text(solicitudes[i].nombre));
        $linea.append($('<td id="apellido">').text(solicitudes[i].apellido));
        $maestro.append($linea);
    }

    $("#boton_maestro").hide();
    $("#boton_texto").show();
    
    
});


    $('#maestro').on("click", "td", function (event) {
        if ($("#detalle").is(':visible')) {
            $("#detalle").hide();
        } else {
            $("#detalle").show();

            let solId = $(this).parent().find('td #id');
            let solNombre = $(this).parent().find('td #nombre');
            let solApellido = $(this).parent().find('td #apellido');


            $("#id").val(solId);
            $("#nombre").val(solNombre);
            $("#apellido").val(solApellido);
        }

    })

    $("#boton_texto").on('click', function (event) {
        let $txt = $('#texto');
        
        console.log($txt.val());

        if ($txt.val() == "") {
             
            $txt.val("Hola!");

        } else {

            $txt.val($txt.val() + $txt.val()); 

        }
        
        
    });
    
});

