"use strict";
var form = document.getElementById("formulario");
var box = document.getElementsByClassName("box");
form.addEventListener("submit", function (evento) {
    var nombre = form.elements.namedItem("nombre");
    var apellido = form.elements.namedItem("apellido");
    var rut = form.elements.namedItem("rut");
    var email = form.elements.namedItem("email");
    var phoneNumber = form.elements.namedItem("number");
    var programas = form.elements.namedItem("programas");
    var rango = form.elements.namedItem("rango");
    var experiencia = form.elements.namedItem("programas");
    var programasSeleccionados = [];
    var inputElements = [nombre, apellido, rut, email, phoneNumber];
    evento.preventDefault();
    var verification = true;
    //programas
    programas.forEach(function (programa) {
        var checkbox = programa;
        if (checkbox.checked) {
            programasSeleccionados.push(checkbox.value);
        }
    });
    //experencia
    if (programasSeleccionados.length == 0) {
        verification = false;
    }
    inputElements.forEach(function (inputElements) {
        console.log(inputElements.value);
        if (inputElements.value.length == 0) {
            verification = false;
            return false;
        }
    });
    if (verification) {
        form.style.display = "none";
        box[0].style.display = "none";
        var mensaje = document.getElementById("mensaje");
        mensaje.style.display = "block";
    }
    else {
        alert("Ingrese los campos corectamente");
    }
});
function limpiarDatos() {
    form.reset();
}
var limpiar = document.getElementById("btnLimpiar");
limpiar.addEventListener("click", limpiarDatos);
