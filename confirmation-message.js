function showConfirmationMessage() {
    document.querySelector('.confirmation-container').style.display = 'block';
}

function hideErrorMessage() {
    document.querySelector('.error-container').style.display = 'none';
}

// Función para mostrar el mensaje de error y luego ocultarlo después de un tiempo determinado
function showErrorTemporary() {
    document.querySelector('.error-container').style.display = 'block';
    setTimeout(function() {
        hideErrorMessage();
    }, 3000); // 3000 milisegundos (3 segundos)
}

// Espera a que el documento se cargue completamente
document.addEventListener('DOMContentLoaded', function () {
    // Agrega un evento 'submit' al formulario
    document.querySelector('.contact-form form').addEventListener('submit', function (event) {
        // Evita que el formulario se envíe automáticamente
        event.preventDefault();
        
        // Verifica si los campos están vacíos
        var name = document.querySelector('.inpux[name="name"]').value;
        var email = document.querySelector('.inpux[name="email"]').value;
        var phone = document.querySelector('.inpux[name="phone"]').value;
        var message = document.querySelector('.inpux[name="message"]').value;

        if (name === '' || email === '' || phone === '' || message === '') {
            // Si algún campo está vacío, muestra el mensaje de error temporalmente
            showErrorTemporary();
        } else {
            // Si todos los campos están completos, oculta el mensaje de error
            hideErrorMessage();
            
            // Muestra el mensaje de confirmación
            showConfirmationMessage();
            
            // Envía el formulario
            this.submit();
        }
    });
});