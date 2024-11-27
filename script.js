// Validación del formulario de contacto
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form'); // Seleccionar el formulario
    const nameInput = document.getElementById('name'); // Campo de nombre
    const emailInput = document.getElementById('email'); // Campo de correo electrónico
    const messageInput = document.getElementById('message'); // Campo de mensaje

    // Evento para validar el formulario al enviarlo
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita el envío automático del formulario

        // Validar campos
        if (nameInput.value.trim() === '') {
            alert('Por favor, ingresa tu nombre.');
            return;
        }
        if (!validateEmail(emailInput.value.trim())) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }
        if (messageInput.value.trim() === '') {
            alert('Por favor, ingresa tu mensaje.');
            return;
        }

        // Mensaje de éxito si todo está bien
        alert('¡Formulario enviado con éxito!');
        form.reset(); // Limpia el formulario
    });

    // Función para validar correos electrónicos
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
