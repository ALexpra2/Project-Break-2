const showProducts = async () => {
    try {
        const response = await fetch('/api/products');
        if (!response.ok) {
            throw new Error('Error al obtener los datos: ' + response.status);
        }
        const products = await response.json();
        const listaProductos = document.getElementById('lista');
        listaProductos.innerHTML = ''; // Limpiar la lista para evitar duplicados
        products.forEach(product => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="product-card">
                    <h2>${product.nombre}</h2>
                    <p><img src="${product.imagen}" alt="${product.nombre}"><p>
                    
                    <a href="/products/${product._id}" class="detalle">Ver detalle</a>
                </div>
            `;
            listaProductos.appendChild(li);
        });
    } catch (error) {
        console.error('Error:', error.message);
    }
};
//! Generamos la vista del dashboard de productos desde la ruta api/products que trae la informacion de la base de datos de MONGODB
const getDashboard = async () => {
    try {
        const response = await fetch('/api/products');
        if (!response.ok) {
            throw new Error('Error al obtener los datos: ' + response.status);
        }
        const products = await response.json();
        const listaProductos = document.getElementById('listaDashboard');
        listaProductos.innerHTML = ''; // Limpiar la lista para evitar duplicados
        products.forEach(product => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="product-card">
                    <h2>${product.nombre}</h2>
                    <p><img src="${product.imagen}" alt="${product.nombre}"><p>
                    <a href="/dashboard/${product._id}" class="detalle">Ver detalle</a>
                </div>
            `;
            listaProductos.appendChild(li);
        });
    } catch (error) {
        console.error('Error:', error.message);
    }
};

// Inicializar las funciones al cargar la página
showProducts();
getDashboard();

//! Manejo del formulario para crear un nuevo producto mediante el back

document.getElementById("productForm").addEventListener("submit", async (event) => {
    event.preventDefault();

//Creamos el objeto con los valores nuevos obtenidos a traves del formulario de dashboardNewProduct.html
    const newProduct = {
        nombre: document.getElementById("nombre").value,
        descripcion: document.getElementById("descripcion").value,
        categoria: document.getElementById("categoria").value,
        talla: document.getElementById("talla").value,
        precio: document.getElementById("precio").value,
        imagen: document.getElementById("imagen").value
    };

    //enviamos los datos a las ruta de creacion de producto
    try {
        const response = await fetch("/dashboard/new", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProduct)
        });

        if (!response.ok) throw new Error("Error al crear producto");
        
        getDashboard();
        //Nos traemos desde el back el mensaje json para mostrarlo mediante un alert que avsara al usuario de que se ha creado corectamente el producto
        const result = await response.json();
        alert(result.message);

        if (response.ok) {
            window.location.href = "/dashboard";
        }

    } catch (error) {
        console.error("Error:", error.message);
    }
});