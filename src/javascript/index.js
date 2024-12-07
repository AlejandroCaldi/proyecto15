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
        $linea.append($('<td>').text(solicitudes[i].id));
        $linea.append($('<td>').text(solicitudes[i].nombre));
        $linea.append($('<td>').text(solicitudes[i].apellido));
        $maestro.append($linea);
    }

    $("#boton_maestro").hide();
    $("#boton_texto").show();
    
    
});


    $('#maestro').on("click", "td", function (event) {
        let $detalle = $("#detalle");
        let $row = $(this).closest('tr'); // Get the closest row to the clicked cell
        let solId = $row.find('td').eq(0).text(); // Get the text of the first cell
        let solNombre = $row.find('td').eq(1).text(); 
        let solApellido = $row.find('td').eq(2).text();


        $("#id").val(solId);
        $("#nombre").val(solNombre);
        $("#apellido").val(solApellido);

        if ($detalle.is(':visible')) {
            $detalle.hide();
        } else {
            $detalle.show();
        }
    });

    $("#boton_texto").on('click', function (event) {
        let $txt = $('#texto');

        if ($txt.val() == "") {
             
            $txt.val("Hola!");

        } else {

            $txt.val($txt.val() + $txt.val()); 

        }
        
        
    });
    
});

