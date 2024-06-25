//Haz tú validación en javascript acá

const btnEnviar = document.querySelector(".formcontato__botao")



function validarFormulario() {
    var nombre = document.forms["form"]["nombre"].value;
    var email = document.forms["form"]["email"].value;
    var mensaje = document.forms["form"]["mensaje"].value;

    if (nombre == "") {
        alert("Por favor, ingresa tu nombre.");
        return false;
    }
    if (email == "") {
        alert("Por favor, ingresa tu email.");
        return false;
    }
    if (mensaje == "") {
        alert("Por favor, ingresa tu mensaje.");
        return false;
    }

    // Si todo está correcto, se envía el formulario
    alert("Formulario enviado correctamente!");
    return true;
}


btnEnviar.addEventListener("submit", (evento) => {
    evento.preventDefault()
    validarFormulario()
})
