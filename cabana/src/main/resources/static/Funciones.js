/*Funciones cabañas*/

function detalleCabana(){

    $.ajax({

        url:"http://130.162.34.139/api/Cabin/all",
        type: "GET",
        contentType: "application/JSON",
        dataType: "JSON",
        success: function(respuesta){
            console.log(respuesta);
            mostrarTablaCab(respuesta.items)
        }
    });
}

function mostrarTablaCab(items){

    let myTable = "<table style= 'background: #cccccc; margin-top: 30px;'>";
    myTable+= "<tr bgcolor='#ffffff'>";
    myTable+= "<th style= 'padding: 8px;'>Nombre</th>";
    myTable+= "<th style= 'padding: 8px;'>Habitaciones</th>";
    myTable+= "<th style= 'padding: 8px;'>Marca</th>";
    myTable+= "<th style= 'padding: 8px;'>Categoria</th>";
    myTable+= "<th style= 'padding: 8px;'>Borrar</th>";
    myTable+= "<th style= 'padding: 8px;'>Actualizar</th>";
    myTable+= "</tr>";

    for(i=0 ; i < items.length;i++){

        myTable+= "<tr bgcolor='#ffffff'>";
        myTable+= "<td style= 'padding: 8px;'>"+items[i].name+"</td>";
        myTable+= "<td style= 'padding: 8px;'>"+items[i].rooms +"</td>";
        myTable+= "<td style= 'padding: 8px;'>"+items[i].brand +"</td>";
        myTable+= "<td style= 'padding: 8px;'>"+items[i].category_id+"</td>";
        myTable+="<td style= 'padding: 8px;'><button onclick ='borrarCab("+ items[i].id+")'>Borrar</button>";
        myTable+="<td style= 'padding: 8px;'><button onclick ='redirecCab()'>Actualizar</button>";
        myTable+= "</tr>";
    }
    myTable+= "</table>";
    $("#resultado").append(myTable);
}

function redirecCab(){

    window.location.href="ActualizarCabanas.html";
}

/*Registro de datos cabañas*/

function registroCab(){
    if ($("#brand").val() != "" && $("#rooms").val() != "" && $("#category_id").val() != "" && $("#name").val() != "" && $("#description").val() != ""){

        let myData ={
            brand:$("#brand").val(),
            rooms:$("#rooms").val(),
            category_id:$("#category_id").val(),
            name:$("#name").val(),
            description:$("#description").val(),
        };

    let dataToSend = JSON.stringify(myData);
    $.ajax({

        url: "http://130.162.34.139/api/Cabin/save",
        type: "POST",
        data: myData,
        contentType: "application/JSON",
        dataType: "JSON",
        success: function(respuesta){

            $("#resultado").empty();
            $("#brand").val("");
            $("#rooms").val("");
            $("#category_id").val("");
            $("#name").val("");
            $("#description").val("");
            alert("¡Registrado con exito!")
        }
    });
    }
    else {
         alert("¡Debe ingresar la información de todos los campos!")
    }
}

/*Actualizar informacion cabañas*/

function actualizarCab(){
    if ($("#brand").val() != "" && $("#rooms").val() != "" && $("#category_id").val() != "" && $("#name").val() != "" && $("#description").val() != ""){

        let myData ={
            brand:$("#brand").val(),
            rooms:$("#rooms").val(),
            category_id:$("#category_id").val(),
            name:$("#name").val(),
            description:$("#description").val(),
        };

    let dataToSend = JSON.stringify(myData);
    $.ajax({

        url:"http://130.162.34.139/api/Cabin/update",
        type: "PUT",
        data: dataToSend,
        contentType:"application/JSON",
        dataType: "JSON",
        success: function(respuesta){

            $("#resultado").empty();
            $("#brand").val("");
            $("#rooms").val("");
            $("#category_id").val("");
            $("#name").val("");
            $("#description").val("");
            alert("¡Actualizado con exito!")
        }
    });
    }
    else {
          alert("¡Debe ingresar la información de todos los campos!")
    }
}

/* Borrar datos Cabañas*/

function borrarCab(idCliente){

    let myData ={
        id : idCliente
    };

    let dataToSend = JSON.stringify(myData);
    $.ajax({

        url:"http://130.162.34.139/api/Cabin/{id}",
        type : "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        dataType: "JSON",
        success:function(respuesta){
            $("#resultado").empty();
            detalleCabana()
            alert("¡Eliminado con exito!")
        }
    });
}

 /*Funciones clientes*/

function detalleClientes(){

    $.ajax({

        url:"http://130.162.34.139/api/Client/all",
        type: "GET",
        dataType :"JSON",
        success :function(respuestaCli){
            console.log(respuestaCli);
            mostrarTablaCli(respuestaCli.items)
        }
    });
}

function mostrarTablaCli(items){


    let myTable2 = "<table style= 'background: #cccccc; margin-top: 30px;'>";
    myTable2+= "<tr bgcolor='#ffffff'>";
    myTable2+= "<th style= 'padding: 8px;'>Nombre</th>";
    myTable2+= "<th style= 'padding: 8px;'>Edad</th>";
    myTable2+= "<th style= 'padding: 8px;'>Correo electrónico</th>";
    myTable2+= "<th style= 'padding: 8px;'>Borrar</th>";
    myTable2+= "<th style= 'padding: 8px;'>Actualizar</th>";
    myTable2+= "</tr>";

    for(i=0 ; i < items.length;i++){


        myTable2+= "<tr bgcolor='#ffffff'>";
        myTable2+= "<td style= 'padding: 8px;'>"+items[i].name +"</td>";
        myTable2+= "<td style= 'padding: 8px;'>"+items[i].email +"</td>";
        myTable2+= "<td style= 'padding: 8px;'>"+items[i].age+"</td>";
        myTable2+="<td style= 'padding: 8px;'><button onclick ='redirecClie()'>Actualizar</button>";
        myTable2+= "</tr>";
    }
    myTable2+= "</table2>";
    $("#resultado2").append(myTable2);
}
function redirecClie(){

    window.location.href="ActualizarClientes.html";
}

/*Registro de datos clientes*/

function registroCli(){
    if ($("#name").val() != "" && $("#email").val() != "" && $("#age").val() != "" && $("#password").val() != ""){

        let myData ={
            name:$("#name").val(),
            email:$("#email").val(),
            age:$("#age").val(),
            password:$("#password").val(),
        };

    let dataToSend = JSON.stringify(myData);
    $.ajax({

        url:"http://130.162.34.139/api/Client/save",
        type: "POST",
        data: myData,
        contentType: "application/JSON",
        dataType: "JSON",
        success(respuestaCli){

            $("#resultado2").empty();
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            $("#password").val("");
            alert("¡Registrado con exito!")
        }
    });
    }
    else {
             alert("¡Debe ingresar la información de todos los campos!")
    }
}
/*Actualizar informacion clientes*/

function actualizarCli(){
    if ($("#name").val() != "" && $("#password").val() != "" && $("#age").val() != ""){

        let myData ={
            name:$("#name").val(),
            password:$("#password").val(),
            age:$("#age").val(),
        };

    let dataToSend = JSON.stringify(myData);
    $.ajax({

        url:"http://130.162.34.139/api/Client/update",
        type: "PUT",
        data: dataToSend,
        contentType:"application/JSON",
        dataType: "JSON",
        success: function(respuestaCli){

            $("#resultado2").empty();
            $("#name").val("");
            $("#password").val("");
            $("#age").val("");
            alert("¡Actualizado con exito!")
        }
    });
    }
    else {
             alert("¡Debe ingresar la información de todos los campos!")
    }
}


/*Funciones Mensajes*/

function detalleMensaje(){

    $.ajax({

        url:"http://130.162.34.139/api/Message/all",
        type: "GET",
        dataType :"JSON",
        success: function(respuestaMen){
            console.log(respuestaMen);
            mostrarTablaMen(respuestaMen.items)
        }
    });
}

function mostrarTablaMen(items){

    let myTable3 = "<table style= 'background: #cccccc; margin-top: 30px;'>";
    myTable3+= "<tr bgcolor='#ffffff'>";
    myTable3+= "<th style= 'padding: 8px;'>Mensaje</th>";
    myTable3+= "<th style= 'padding: 8px;'>Borrar</th>";
    myTable3+= "<th style= 'padding: 8px;'>Actualizar</th>";
    myTable3+= "</tr>";

    for(i=0 ; i < items.length;i++){

        myTable3+= "<tr bgcolor='#ffffff'>";
        myTable3+= "<td style= 'padding: 8px;'>"+items[i].messagetext +"</td>";
        myTable3+="<td style= 'padding: 8px;'><button onclick ='borrarMen("+ items[i].id+")'>Borrar</button>";
        myTable3+="<td style= 'padding: 8px;'><button onclick ='redirecMen()'>Actualizar</button>";
        myTable3+= "</tr>";

    }
    myTable3+= "</table3>";
    $("#resultado3").append(myTable3);

}

function redirecMen(){

    window.location.href="ActualizarMensaje.html";
}

/*Registro de datos Mensajes*/

function registroMen(){
    if ($("#messagetext").val() != "" && $("#cabana_id").val() != ""){

             let myData ={
                 messagetext:$("#messagetext").val(),
                 cabana_id:$("#cabana_id").val(),
             };

         let dataToSend = JSON.stringify(myData);
         $.ajax({

             url:"http://130.162.34.139/api/Message/save",
             type: "POST",
             data: myData,
             contentType: "application/JSON",
             dataType: "JSON",
             success: function(respuestaMen){

                 $("#resultado3").empty();
                 $("#messagetext").val("");
                 $("#cabana_id").val("");
                 alert("¡Registrado con exito!")
             }
         });
         }
         else {
               alert("¡Debe ingresar la información de todos los campos!")
         }
}
/* Borrar datos Mensajes*/

function borrarMen(idMen){

    let myData ={
        id : idMen
    };

    let dataToSend = JSON.stringify(myData);
    $.ajax({

        url:"http://130.162.34.139/api/Message/{id}",
        type : "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        dataType:"JSON",
        success:function(respuestaMen){
            $("#resultado3").empty();
            detalleMensaje();
            alert("¡Eliminado con exito!")
        }
    });
    }

/*Actualizar informacion mensajes*/

function actualizarMen(){
    if ($("#cabana_id").val() != "" && $("#messagetext").val() != ""){

        let myData ={
            cabana_id:$("#cabana_id").val(),
            messagetext:$("#messagetext").val(),

        };

    let dataToSend = JSON.stringify(myData);
    $.ajax({

        url:"http://130.162.34.139/api/Message/update",
        type: "PUT",
        data: dataToSend,
        contentType:"application/JSON",
        dataType: "JSON",
        success: function(respuestaMen){

            $("#resultado3").empty();
            $("#cabana_id").val("");
            $("#messagetext").val("");
            alert("¡Actualizado con exito!")
        }
    });
    }
    else {
          alert("¡Debe ingresar la información de todos los campos!")
    }
}

/*Funciones categorias*/

function detalleCategoria(){

    $.ajax({

        url:"http://130.162.34.139/api/Category/all",
        type: "GET",
        contentType: "application/JSON",
        dataType: "JSON",
        success: function(respuestaCat){
            console.log(respuestaCat);
            mostrarTablaCat(respuestaCat.items)
        }
    });
}

function mostrarTablaCat(items){

    let myTable4 = "<table style= 'background: #cccccc; margin-top: 30px;'>";
    myTable4+= "<tr bgcolor='#ffffff'>";
    myTable4+= "<th style= 'padding: 8px;'>Nombre</th>";
    myTable4+= "<th style= 'padding: 8px;'>Descripción</th>";
    myTable4+= "<th style= 'padding: 8px;'>Borrar</th>";
    myTable4+= "<th style= 'padding: 8px;'>Actualizar</th>";
    myTable4+= "</tr>";

    for(i=0 ; i < items.length;i++){

        myTable4+= "<tr bgcolor='#ffffff'>";
        myTable4+= "<td style= 'padding: 8px;'>"+items[i].name+"</td>";
        myTable4+= "<td style= 'padding: 8px;'>"+items[i].description +"</td>";
        myTable4+="<td style= 'padding: 8px;'><button onclick ='borrarCat("+ items[i].id+")'>Borrar</button>";
        myTable4+="<td style= 'padding: 8px;'><button onclick ='redirecCat()'>Actualizar</button>";
        myTable4+= "</tr>";
    }
    myTable4+= "</table>";
    $("#resultado4").append(myTable);
}

function redirecCat(){

    window.location.href="ActualizarCategorias.html";
}

/*Registro de datos categorias*/

function registroCat(){
    if ($("#name").val() != "" && $("#description").val() != "" ){

        let myData ={
            name:$("#name").val(),
            description:$("#description").val(),
        };

    let dataToSend = JSON.stringify(myData);
    $.ajax({

        url: "http://130.162.34.139/api/Category/save",
        type: "POST",
        data: myData,
        contentType: "application/JSON",
        dataType: "JSON",
        success: function(respuestaCat){

            $("#resultado4").empty();
            $("#name").val("");
            $("#description").val("");
            alert("¡Registrado con exito!")
        }
    });
    }
    else {
         alert("¡Debe ingresar la información de todos los campos!")
    }
}

/*Actualizar informacion categorias*/

function actualizarCat(){
    if ($("#name").val() != "" && $("#description").val() != ""){

        let myData ={
            name:$("#name").val(),
            description:$("#description").val(),
        };

    let dataToSend = JSON.stringify(myData);
    $.ajax({

        url:"http://130.162.34.139/api/Category/update",
        type: "PUT",
        data: dataToSend,
        contentType:"application/JSON",
        dataType: "JSON",
        success: function(respuestaCat){

            $("#resultado4").empty();
            $("#name").val("");
            $("#description").val("");
            alert("¡Actualizado con exito!")
        }
    });
    }
    else {
          alert("¡Debe ingresar la información de todos los campos!")
    }
}

/* Borrar datos Categotias*/

function borrarCat(idCliente){

    let myData ={
        id : idCliente
    };

    let dataToSend = JSON.stringify(myData);
    $.ajax({

        url:"http://130.162.34.139/api/Category/{id",
        type : "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        dataType: "JSON",
        success:function(respuestaCat){
            $("#resultado4").empty();
            detalleCategoria()
            alert("¡Eliminado con exito!")
        }
    });
}

/*Funciones reservas*/

function detalleReservas(){

    $.ajax({

        url:"http://130.162.34.139/api/Reservation/all",
        type: "GET",
        contentType: "application/JSON",
        dataType: "JSON",
        success: function(respuestaRes){
            console.log(respuestaRes);
            mostrarTablaRes(respuestaRes.items)
        }
    });
}

function mostrarTablaRes(items){

    let myTable5 = "<table style= 'background: #cccccc; margin-top: 30px;'>";
    myTable5+= "<tr bgcolor='#ffffff'>";
    myTable5+= "<th style= 'padding: 8px;'>ID</th>";
    myTable5+= "<th style= 'padding: 8px;'>Cabaña</th>";
    myTable5+= "<th style= 'padding: 8px;'>Cliente</th>";
    myTable5+= "<th style= 'padding: 8px;'>Fecha entrada</th>";
    myTable5+= "<th style= 'padding: 8px;'>Fecha salida</th>";
    myTable5+= "<th style= 'padding: 8px;'>Borrar</th>";
    myTable5+= "<th style= 'padding: 8px;'>Actualizar</th>";
    myTable5+= "</tr>";

    for(i=0 ; i < items.length;i++){

        myTable5+= "<tr bgcolor='#ffffff'>";
        myTable5+= "<td style= 'padding: 8px;'>"+items[i].id +"</td>";
        myTable5+= "<td style= 'padding: 8px;'>"+items[i].cabana_id+"</td>";
        myTable5+= "<td style= 'padding: 8px;'>"+items[i].startDate +"</td>";
        myTable5+= "<td style= 'padding: 8px;'>"+items[i].devolutionDate +"</td>";
        myTable5+="<td style= 'padding: 8px;'><button onclick ='borrarRes("+ items[i].id+")'>Borrar</button>";
        myTable5+="<td style= 'padding: 8px;'><button onclick ='redirecRes()'>Actualizar</button>";
        myTable5+= "</tr>";
    }
    myTable5+= "</table>";
    $("#resultado5").append(myTable);
}

function redirecRes(){

    window.location.href="ActualizarReservas.html";
}

/*Registro de datos reservas*/

function registroRes(){
    if ($("#client_id").val() != "" && $("#cabana_id").val() != "" && $("#startDate").val() != "" && $("#devolutionDate").val() != ""){

        let myData ={
            client_id:$("#client_id").val(),
            cabana_id:$("#cabana_id").val(),
            startDate:$("#startDate").val(),
            devolutionDate:$("#devolutionDate").val(),
        };

    let dataToSend = JSON.stringify(myData);
    $.ajax({

        url: "http://130.162.34.139/api/Reservation/save",
        type: "POST",
        data: myData,
        contentType: "application/JSON",
        dataType: "JSON",
        success: function(respuestaRes){

            $("#resultado5").empty();
            $("#client_id").val("");
            $("#cabana_id").val("");
            $("#startDate").val("");
            $("#devolutionDate").val("");
            alert("¡Registrado con exito!")
        }
    });
    }
    else {
         alert("¡Debe ingresar la información de todos los campos!")
    }
}

/*Actualizar informacion reservas*/

function actualizarRes(){
    if ($("#client_id").val() != "" && $("#cabana_id").val() != "" && $("#startDate").val() != "" && $("#devolutionDate").val() != ""){

        let myData ={
            client_id:$("#client_id").val(),
            cabana_id:$("#cabana_id").val(),
            startDate:$("#startDate").val(),
            startDate:$("#devolutionDate").val(),
        };

    let dataToSend = JSON.stringify(myData);
    $.ajax({

        url:"http://130.162.34.139/api/Reservation/update",
        type: "PUT",
        data: dataToSend,
        contentType:"application/JSON",
        dataType: "JSON",
        success: function(respuestaRes){

            $("#resultado5").empty();
            $("#client_id").val("");
            $("#cabana_id").val("");
            $("#startDate").val("");
            $("#devolutionDate").val("");
            alert("¡Actualizado con exito!")
        }
    });
    }
    else {
          alert("¡Debe ingresar la información de todos los campos!")
    }
}

/* Borrar datos Reservas*/

function borrarRes(idCliente){

    let myData ={
        id : idCliente
    };

    let dataToSend = JSON.stringify(myData);
    $.ajax({

        url:"http://130.162.34.139/api/Reservation/{id}",
        type : "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        dataType: "JSON",
        success:function(respuestaRes){
            $("#resultado5").empty();
            detalleReservas()
            alert("¡Eliminado con exito!")
        }
    });
}

/*Funciones calificacion de reservas*/

function detalleCalificacion(){

    $.ajax({

        url:"http://130.162.34.139/api/Score/all",
        type: "GET",
        dataType: "JSON",
        success: function(respuestaCalRes){
            console.log(respuestaCalRes);
            mostrarTablaCal(respuestaCalRes.items)
        }
    });
}

function mostrarTablaCal(items){

    let myTable6= "<table style= 'background: #cccccc; margin-top: 30px;'>";
    myTable6+= "<tr bgcolor='#ffffff'>";
    myTable6+= "<th style= 'padding: 8px;'>Reserva</th>";
    myTable6+= "<th style= 'padding: 8px;'>Calificación</th>";
    myTable6+= "<th style= 'padding: 8px;'>Mensaje</th>";
    myTable6+= "<th style= 'padding: 8px;'>Borrar</th>";
    myTable6+= "<th style= 'padding: 8px;'>Actualizar</th>";
    myTable6+= "</tr>";

    for(i=0 ; i < items.length;i++){

        myTable6+= "<tr bgcolor='#ffffff'>";
        myTable6+= "<td style= 'padding: 8px;'>"+items[i].reservas +"</td>";
        myTable6+= "<td style= 'padding: 8px;'>"+items[i].stars+"</td>";
        myTable6+= "<td style= 'padding: 8px;'>"+items[i].messagetext +"</td>";
        myTable6+="<td style= 'padding: 8px;'><button onclick ='borrarCal("+ items[i].id+")'>Borrar</button>";
        myTable6+="<td style= 'padding: 8px;'><button onclick ='redirecCal()'>Actualizar</button>";
        myTable6+= "</tr>";
    }
    myTable6+= "</table>";
    $("#resultado6").append(myTable);
}

function redirecCal(){

    window.location.href="ActualizarCalificacioReservas.html";
}

/*Registro de datos calificacion de reservas*/

function registroCal(){
    if ($("#reservas").val() != "" && $("#stars").val() != "" && $("#messagetext").val() != ""){

        let myData ={
            reservas:$("#reservas").val(),
            stars:$("#stars").val(),
            messagetext:$("#messagetext").val(),
        };

    let dataToSend = JSON.stringify(myData);
    $.ajax({

        url: "http://130.162.34.139/api/Score/save",
        type: "POST",
        data: myData,
        contentType: "application/JSON",
        dataType: "JSON",
        success: function(respuestaCal){

            $("#resultado6").empty();
            $("#reservas").val("");
            $("#stars").val("");
            $("#messagetext").val("");
            alert("¡Registrado con exito!")
        }
    });
    }
    else {
         alert("¡Debe ingresar la información de todos los campos!")
    }
}

/*Actualizar informacion calificacion de reservas*/

function actualizarCalRes(){
    if ($("#reservas").val() != "" && $("#stars").val() != "" && $("#messagetext").val() != ""){

        let myData ={
            reservas:$("#reservas").val(),
            stars:$("#stars").val(),
            messagetext:$("#messagetext").val(),
        };

    let dataToSend = JSON.stringify(myData);
    $.ajax({

        url:"http://130.162.34.139/api/Score/update",
        type: "PUT",
        data: dataToSend,
        contentType:"application/JSON",
        dataType: "JSON",
        success: function(respuestaCalRes){

            $("#resultado6").empty();
            $("#reservas").val("");
            $("#stars").val("");
            $("#messagetext").val("");
            alert("¡Actualizado con exito!")
        }
    });
    }
    else {
          alert("¡Debe ingresar la información de todos los campos!")
    }
}

/*Funciones usuarios administradores*/

function detalleAdmUs(){

    $.ajax({

        url:"http://130.162.34.139/api/Admin/all",
        type: "GET",
        contentType: "application/JSON",
        dataType: "JSON",
        success: function(respuestaAdmUs){
            console.log(respuestaAdmUs);
            mostrarTablaAdmUs(respuestaAdmUs.items)
        }
    });
}

function mostrarTablaAdmUs(items){

    let myTable7= "<table style= 'background: #cccccc; margin-top: 30px;'>";
    myTable7+= "<tr bgcolor='#ffffff'>";
    myTable7+= "<th style= 'padding: 8px;'>ID</th>";
    myTable7+= "<th style= 'padding: 8px;'>Nombre</th>";
    myTable7+= "<th style= 'padding: 8px;'>Correo</th>";
    myTable7+= "<th style= 'padding: 8px;'>Borrar</th>";
    myTable7+= "<th style= 'padding: 8px;'>Actualizar</th>";
    myTable7+= "</tr>";

    for(i=0 ; i < items.length;i++){

        myTable7+= "<tr bgcolor='#ffffff'>";
        myTable7+= "<td style= 'padding: 8px;'>"+items[i].id +"</td>";
        myTable7+= "<td style= 'padding: 8px;'>"+items[i].name+"</td>";
        myTable7+= "<td style= 'padding: 8px;'>"+items[i].email+"</td>";
        myTable7+="<td style= 'padding: 8px;'><button onclick ='borrarAdmUs("+ items[i].id+")'>Borrar</button>";
        myTable7+="<td style= 'padding: 8px;'><button onclick ='redirecAdmUs()'>Actualizar</button>";
        myTable7+= "</tr>";
    }
    myTable7+= "</table>";
    $("#resultado7").append(myTable);
}

function redirecAdmUs(){

    window.location.href="ActualizarUsuariosAdministradores.html";
}

/*Registro de datos usuarios administradores*/

function registroAdmUs(){
    if ($("#name").val() != "" && $("#email").val() != "" && $("#password").val() != ""){

        let myData ={
            name:$("#name").val(),
            email:$("#email").val(),
            password:$("#password").val(),
        };

    let dataToSend = JSON.stringify(myData);
    $.ajax({

        url: "http://130.162.34.139/api/Admin/save",
        type: "POST",
        data: myData,
        contentType: "application/JSON",
        dataType: "JSON",
        success: function(respuestaAdmUs){

            $("#resultado7").empty();
            $("#name").val("");
            $("#email").val("");
            $("#password").val("");
            alert("¡Registrado con exito!")
        }
    });
    }
    else {
         alert("¡Debe ingresar la información de todos los campos!")
    }
}

/*Actualizar informacion usuarios administradores*/

function actualizarAdmUs(){
    if ($("#name").val() != "" && $("#password").val() != ""){

        let myData ={
            name:$("#name").val(),
            password:$("#password").val(),
        };

    let dataToSend = JSON.stringify(myData);
    $.ajax({

        url:"http://130.162.34.139/api/Admin/update",
        type: "PUT",
        data: dataToSend,
        contentType:"application/JSON",
        dataType: "JSON",
        success: function(respuestaAdmUs){

            $("#resultado7").empty();
            $("#name").val("");
            $("#password").val("");
            alert("¡Actualizado con exito!")
        }
    });
    }
    else {
          alert("¡Debe ingresar la información de todos los campos!")
    }
}

/* Borrar datos usuarios administradores */

function borrarAdmUs(idCliente){

    let myData ={
        id : idCliente
    };

    let dataToSend = JSON.stringify(myData);
    $.ajax({

        url:"http://130.162.34.139/api/Admin/{id}",
        type : "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        dataType: "JSON",
        success:function(respuestaAdmUs){
            $("#resultado7").empty();
            detalleAdmUs()
            alert("¡Eliminado con exito!")
        }
    });
}
