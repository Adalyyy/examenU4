import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Swal from 'sweetalert2';

const palabraER = document.getElementById("palabraER");
const texto = document.getElementById("texto");
const capturaT = document.getElementById("capturaT");
const borrar = document.getElementById("borrar");
const respuesta = document.getElementById("respuesta");

// Validaciones
const validacion = () => {
const er = palabraER.value.trim();
const textoU = texto.value.trim();

if (er === "" || textoU === "") {
    Swal.fire({
        title: "Campos vacíos",
        text: "Ingresa una expresión regular y un texto.",
        icon: "warning"
    });
    return false;
}

return true;

};

// Reglas
const reglas = () => {

// Capturar información
const expresion = palabraER.value.trim();
const textoU = texto.value;

// Crear expresión regular
const regex = RegExp(expresion);

// Comparar
const resultado = regex.test(textoU);

if (resultado) {
    respuesta.textContent = "¡El texto cumple con la expresión regular!";
} else {
    respuesta.textContent = "El texto no cumple con la expresión regular.";
}

};

// Limpiar
const limpiar = () => {
palabraER.value = "";
texto.value = "";
respuesta.textContent = "";
};

// botón
capturaT.addEventListener("click", () => {
if (validacion()) {
reglas();
}
});

borrar.addEventListener("click", () => {
limpiar();
});