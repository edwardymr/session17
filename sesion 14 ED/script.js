document.getElementById('formulario-contactos').addEventListener('submit', function (e){
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const direccion = document.getElementById('direccion').value.trim();
    const edad = document.getElementById('edad').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const email = document.getElementById('email').value.trim();
    const genero = document.querySelector('input[name="genero"]:checked');
    const imagen = document.getElementById('imagen').files[0];

    if (!nombre || !direccion || !edad || !telefono || !email || !imagen || !genero) {
        alert('Por favor, complete todos los campos.');
        return;
    }


const imgPermitidas = ['image/jpg', 'image/png'];
if (!imgPermitidas.includes(imagen.type)) {
    alert('Por favor, suba una imagen en formato JPG o PNG.');
    return;
}
alert('Formulario enviado correctamente.');
});

