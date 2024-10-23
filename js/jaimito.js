var nombre = prompt("Antes de continuar tienes que decirnos como quieres que te llamemos."); //alerta de inicio de pagina
document.write("Bienvenido ", nombre, " a la pagina web oficial de la heladeria Jaimito🐧🍦🍧", "<br>");//nombre de bienvenida

function mostrarAlertaFace(event) {
    event.preventDefault(); // Evita que el enlace redirija inmediatamente
    const confirmacion = confirm("¿Estás seguro de que deseas ir a Facebook?");
    if (confirmacion) {
        window.location.href = event.target.href; // Redirige al enlace si el usuario acepta
    }
}
function mostrarAlertaWhat(event) {
    event.preventDefault(); // Evita que el enlace redirija inmediatamente
    const confirmacion = confirm("¿Estás seguro de que deseas ir a WhatsApp?");
    if (confirmacion) {
        window.location.href = event.target.href; // Redirige al enlace si el usuario acepta
    }
}
function mostrarAlertaUbi(event) {
    event.preventDefault(); // Evita que el enlace redirija inmediatamente
    const confirmacion = confirm("¿Estás seguro de que deseas ver la Ubicación?");
    if (confirmacion) {
        window.location.href = event.target.href; // Redirige al enlace si el usuario acepta
    }
}