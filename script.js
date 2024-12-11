// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Mostrar el aviso de cookies si no se ha aceptado antes
    const cookieDialog = document.getElementById('cookie-dialog');
    const acceptCookiesButton = document.getElementById('accept-cookies');

    if (!localStorage.getItem('cookiesAccepted')) {
        cookieDialog.showModal();
    }

    acceptCookiesButton.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieDialog.close();
    });

    // Función para generar instancias de la tarjeta de producto
    function createProductCard(image, title, description, price) {
        const template = document.getElementById('product-card-template');
        const clone = template.content.cloneNode(true);

        // Asignar valores al slot del template
        clone.querySelector('img').src = image;
        clone.querySelector('.card-title').textContent = title;
        clone.querySelector('.card-description').textContent = description;
        clone.querySelector('.card-price').textContent = price;
        
        // Añadir la tarjeta al contenedor
        document.getElementById('product-cards-container').appendChild(clone);
    }

    // Datos de ejemplo para las tarjetas
    const products = [
        {
            image: 'imagenes/1.jpg',
            title: 'Sudadera',
            description: 'Descripción breve del producto 1',
            price: '$20.99'
        },
        {
            image: 'imagenes/2.jpg',
            title: 'Pantalón',
            description: 'Descripción breve del producto 2',
            price: '$20.99'
        },
        {
            image: 'imagenes/3.jpg',
            title: 'Chaqueta',
            description: 'Descripción breve del producto 3',
            price: '$30.99'
        },
        {
            image: 'imagenes/4.jpg',
            title: 'Camiseta',
            description: 'Descripción breve del producto 4',
            price: '$10.99'
        }
    ];

    // Crear las tarjetas con los datos de los productos
    products.forEach(product => {
        createProductCard(product.image, product.title, product.description, product.price);
    });
});
