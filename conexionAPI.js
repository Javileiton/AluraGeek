// URL de la API simulada
const API_URL = 'http://localhost:3000/productos';

// Función para limpiar el formulario
const clearForm = () => {
    document.getElementById('product-form').reset();
};

// Función para enviar datos a la API
const submitForm = () => {
    const brandModel = document.getElementById('brand-model').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('image').value;

    if (!brandModel || !description || !price || !image) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    const newProduct = {
        nombre: brandModel,
        descripcion: description,
        precio: price,
        imagen: image
    };

    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
    })
    .then(response => {
        if (response.ok) {
            alert('Producto agregado exitosamente.');
            clearForm();
        } else {
            alert('Hubo un error al agregar el producto.');
        }
    })
    .catch(error => console.error('Error al conectar con la API:', error));
};

// Event listeners para los botones
document.getElementById('submit-btn').addEventListener('click', submitForm);
document.getElementById('reset-btn').addEventListener('click', clearForm);
