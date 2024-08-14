document.addEventListener('DOMContentLoaded', () => {
    const div = document.getElementById('miDiv');
    const boton = document.getElementById('miBoton');

    div.addEventListener('click', () => {
        alert('Hola! Soy el div');
    });

    boton.addEventListener('click', (event) => {
        alert('Hola!');
        event.stopPropagation();
    });
});
