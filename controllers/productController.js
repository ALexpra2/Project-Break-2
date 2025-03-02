const path = require("path");
const productService = require("../services/productService");

// Rutas públicas

exports.redirectHome = (req, res) => {
  res.redirect('/products');
};

//Vista de productos sin login
exports.renderProductsPage = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/views", "Products.html"));
};

// Genera la informacion de productos para consumirla en el Front
exports.getApiProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener productos" });
  }
};

//!Genera la vista de productos ordenados por categoria
exports.renderProductsCamisetas = async (req, res) => {
  try {
    const products = await productService.getProductsByCategory("Camisetas");
    let productsHtml = "";
    products.forEach(product => {
      productsHtml += `
        <div class="product-card">
          <h2>${product.nombre}</h2>
          <p><img src="${product.imagen}" alt="${product.nombre}"></p>
          <a href="/products/${product._id}" class="detalle">Ver detalle</a>
        </div>
      `;
    });
    res.send(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/styles.css">
        <title>Camisetas</title>
      </head>
      <body>
        <nav>
          <ul>
            <li><a href="/products">Todos los productos</a></li>                    
            <li><a href="/products/pantalones">Pantalones</a></li>
            <li><a href="/products/zapatos">Zapatos</a></li>
            <li><a href="/products/accesorios">Accesorios</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
        <h1>Camisetas</h1>
        <div id="lista">
          ${productsHtml}
        </div>
      </body>
      </html>
    `);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error al obtener productos de camisetas" });
  }
};

exports.renderProductsPantalones = async (req, res) => {
  try {
    const products = await productService.getProductsByCategory("Pantalones");
    let productsHtml = "";
    products.forEach(product => {
      productsHtml += `
        <div class="product-card">
          <h2>${product.nombre}</h2>
          <p><img src="${product.imagen}" alt="${product.nombre}"></p>  
          <a href="/products/${product._id}" class="detalle">Ver detalle</a>
        </div>
      `;
    });
    res.send(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/styles.css">
        <title>Pantalones</title>
      </head>
      <body>
        <nav>
          <ul>
            <li><a href="/products">Todos los productos</a></li>
            <li><a href="/products/camisetas">Camisetas</a></li>
            <li><a href="/products/zapatos">Zapatos</a></li>
            <li><a href="/products/accesorios">Accesorios</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
        <h1>Pantalones</h1>
        <div id="lista">
          ${productsHtml}
        </div>
      </body>
      </html>
    `);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error al obtener productos de pantalones" });
  }
};

exports.renderProductsZapatos = async (req, res) => {
  try {
    const products = await productService.getProductsByCategory("Zapatos");
    let productsHtml = "";
    products.forEach(product => {
      productsHtml += `
        <div class="product-card">
          <h2>${product.nombre}</h2>
          <p><img src="${product.imagen}" alt="${product.nombre}"></p>
          <a href="/products/${product._id}" class="detalle">Ver detalle</a>
        </div>
      `;
    });
    res.send(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/styles.css">
        <title>Zapatos</title>
      </head>
      <body>
        <nav>
          <ul>
            <li><a href="/products">Todos los productos</a></li>
            <li><a href="/products/camisetas">Camisetas</a></li>
            <li><a href="/products/pantalones">Pantalones</a></li>
            <li><a href="/products/accesorios">Accesorios</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
        <h1>Zapatos</h1>
        <div id="lista">
          ${productsHtml}
        </div>
      </body>
      </html>
    `);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error al obtener productos de zapatos" });
  }
};

exports.renderProductsAccesorios = async (req, res) => {
  try {
    const products = await productService.getProductsByCategory("Accesorios");
    let productsHtml = "";
    products.forEach(product => {
      productsHtml += `
        <div class="product-card">
          <h2>${product.nombre}</h2>
          <p><img src="${product.imagen}" alt="${product.nombre}"></p>                  
          <a href="/products/${product._id}" class="detalle">Ver detalle</a>
        </div>
      `;
    });
    res.send(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/styles.css">
        <title>Accesorios</title>
      </head>
      <body>
        <nav>
          <ul>
            <li><a href="/products">Todos los productos</a></li>
            <li><a href="/products/camisetas">Camisetas</a></li>
            <li><a href="/products/pantalones">Pantalones</a></li>
            <li><a href="/products/zapatos">Zapatos</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
        <h1>Accesorios</h1>
        <div id="lista">
          ${productsHtml}
        </div>
      </body>
      </html>
    `);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error al obtener productos de accesorios" });
  }
};
//generacion del detalle de productos en la vista publica
exports.renderProductDetail = async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.productId);
    if (!product) return res.status(404).send("Producto no encontrado");
    res.send(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/styles.css">
        <title>Detalle del Producto</title>
      </head>
      <body>
        <nav>
          <ul>
            <li><a href="/products">Todos los productos</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
        <h1>Detalle del Producto</h1>
        <div id="productDetail">
          <h2>${product.nombre}</h2>
          <img src="${product.imagen}" alt="${product.nombre}">                
          <p>${product.descripcion}</p>
          <p>Categoría: ${product.categoria}</p>
          <p>Talla: ${product.talla}</p>
          <p>${product.precio}€</p>
        </div>
      </body>
      </html>
    `);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener el producto" });
  }
};

//! Rutas del dashboard autorizadas  mediante  el middleware checkAuth en las rutas
//Ruta principal del Dashboard
exports.renderDashboard = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/views", "dashboard.html"));
};

//Vista del formulario para generar la información de un nuevo prodcuto, logica incluida en scriptProducts para enviar l ainformacion al back
exports.renderDashboardNew = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/views", "dashboardNewProduct.html"));
};

//Incluye el nuevo producto en la base de datos
exports.createProduct = async (req, res) => {
  try {
    await productService.createProduct(req.body);
    res.status(201).json({ message: "Producto creado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear producto" });
  }
};

//Vistas de productos por categoria una vez logados, permite modificar los detalles de productos
exports.renderDashboardCamisetas = async (req, res) => {
  try {
    const products = await productService.getProductsByCategory("Camisetas");
    let productsHtml = "";
    products.forEach(product => {
      productsHtml += `
        <div class="product-card">
          <h2>${product.nombre}</h2>
          <p><img src="${product.imagen}" alt="${product.nombre}"></p>
          <a href="/dashboard/${product._id}" class="detalle">Ver detalle</a>
        </div>
      `;
    });
    res.send(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/styles.css">
        <title>Camisetas</title>
      </head>
      <body>
        <nav>
          <ul>
            <li><a href="/dashboard">Todos los productos</a></li>                    
            <li><a href="/dashboard/pantalones">Pantalones</a></li>
            <li><a href="/dashboard/zapatos">Zapatos</a></li>
            <li><a href="/dashboard/accesorios">Accesorios</a></li>
            <li>
              <form id="logoutForm" action="/logout" method="POST">
                <button type="submit">Logout</button>
              </form>
            </li>
          </ul>
        </nav>
        <h1>Camisetas</h1>
        <div id="lista">
          ${productsHtml}
        </div>
      </body>
      </html>
    `);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error al obtener productos de camisetas" });
  }
};

exports.renderDashboardPantalones = async (req, res) => {
  try {
    const products = await productService.getProductsByCategory("Pantalones");
    let productsHtml = "";
    products.forEach(product => {
      productsHtml += `
        <div class="product-card">
          <h2>${product.nombre}</h2>
          <p><img src="${product.imagen}" alt="${product.nombre}"></p>  
          <a href="/dashboard/${product._id}" class="detalle">Ver detalle</a>
        </div>
      `;
    });
    res.send(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/styles.css">
        <title>Pantalones</title>
      </head>
      <body>
        <nav>
          <ul>
            <li><a href="/dashboard">Todos los productos</a></li>
            <li><a href="/dashboard/camisetas">Camisetas</a></li>
            <li><a href="/dashboard/zapatos">Zapatos</a></li>
            <li><a href="/dashboard/accesorios">Accesorios</a></li>
            <li>
              <form id="logoutForm" action="/logout" method="POST">
                <button type="submit">Logout</button>
              </form>
            </li>
          </ul>
        </nav>
        <h1>Pantalones</h1>
        <div id="lista">
          ${productsHtml}
        </div>
      </body>
      </html>
    `);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error al obtener productos de pantalones" });
  }
};

exports.renderDashboardZapatos = async (req, res) => {
  try {
    const products = await productService.getProductsByCategory("Zapatos");
    let productsHtml = "";
    products.forEach(product => {
      productsHtml += `
        <div class="product-card">
          <h2>${product.nombre}</h2>
          <p><img src="${product.imagen}" alt="${product.nombre}"></p>
          <a href="/dashboard/${product._id}" class="detalle">Ver detalle</a>
        </div>
      `;
    });
    res.send(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/styles.css">
        <title>Zapatos</title>
      </head>
      <body>
        <nav>
          <ul>
            <li><a href="/dashboard">Todos los productos</a></li>
            <li><a href="/dashboard/camisetas">Camisetas</a></li>
            <li><a href="/dashboard/pantalones">Pantalones</a></li>
            <li><a href="/dashboard/accesorios">Accesorios</a></li>
            <li>
              <form id="logoutForm" action="/logout" method="POST">
                <button type="submit">Logout</button>
              </form>
            </li>
          </ul>
        </nav>
        <h1>Zapatos</h1>
        <div id="lista">
          ${productsHtml}
        </div>
      </body>
      </html>
    `);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error al obtener productos de zapatos" });
  }
};

exports.renderDashboardAccesorios = async (req, res) => {
  try {
    const products = await productService.getProductsByCategory("Accesorios");
    let productsHtml = "";
    products.forEach(product => {
      productsHtml += `
        <div class="product-card">
          <h2>${product.nombre}</h2>
          <p><img src="${product.imagen}" alt="${product.nombre}"></p>                  
          <a href="/dashboard/${product._id}" class="detalle">Ver detalle</a>
        </div>
      `;
    });
    res.send(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/styles.css">
        <title>Accesorios</title>
      </head>
      <body>
        <nav>
          <ul>
            <li><a href="/dashboard">Todos los productos</a></li>
            <li><a href="/dashboard/camisetas">Camisetas</a></li>
            <li><a href="/dashboard/pantalones">Pantalones</a></li>
            <li><a href="/dashboard/zapatos">Zapatos</a></li>
            <li>
              <form id="logoutForm" action="/logout" method="POST">
                <button type="submit">Logout</button>
              </form>
            </li>
          </ul>
        </nav>
        <h1>Accesorios</h1>
        <div id="lista">
          ${productsHtml}
        </div>
      </body>
      </html>
    `);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error al obtener productos de accesorios" });
  }
};

//genera la vista de detalle, como por html no se puede enviar una peticion delete es necesa
// generar la logica en script para el boton delete
exports.renderDashboardProductDetail = async (req, res) => {
  const productId = req.params.productId;
  try {
    const product = await productService.getProductById(productId);
    if (!product) return res.status(404).send("Producto no encontrado");
    res.send(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/styles.css">
        <title>Detalle del Producto</title>
      </head>
      <body>
        <nav>
          <ul>
            <li><a href="/dashboard">Dashboard</a></li>
            <li>
              <form id="logoutForm" action="/logout" method="POST">
                <button type="submit">Logout</button>
              </form>
            </li>
          </ul>
        </nav>

        <h1>Detalle del Producto</h1>
        <div id="productDetail">
          <h2>${product.nombre}</h2>
          <img src="${product.imagen}" alt="${product.nombre}">
          <p>${product.descripcion}</p>
          <p>Categoría: ${product.categoria}</p>
          <p>Talla: ${product.talla}</p>
          <p>${product.precio}€</p>
          <button id="deleteBtn" data-id="${product._id}">Eliminar</button>
          <a href="/dashboard/edit/${product._id}"><button>Editar</button></a>
        </div>

        <script>
          document.getElementById("deleteBtn").addEventListener("click", async function () {
            try {
              const response = await fetch('/dashboard/${productId}', { method: "DELETE" });
              if (response.ok) window.location.href = "/dashboard";
            } catch (error) {
              console.error("Error:", error);
              alert("Error al eliminar el producto");
            }
          });
        </script>

      </body>
      </html>
    `);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Hubo un problema al mostrar el producto" });
  }
};


//Genera la vista del formulario para modificar un producto y envia la solicitud put al back mediante el script para modificar los cambios en la base de datos
exports.renderEditProductForm = async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.productId);
    if (!product) return res.status(404).send("Producto no encontrado");
    res.send(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/styles.css">
        <title>Editar Producto</title>
      </head>
      <body>

        <h1>Editar Producto</h1>
        <form id="productForm">
          <label>Nombre: </label>
          <input type="text" id="nombre" name="nombre" value="${product.nombre}">
          <label>Descripción: </label>
          <textarea id="descripcion">${product.descripcion}</textarea>
          <label>Categoría: </label>
          <input type="text" id="categoria" name="categoria" value="${product.categoria}">
          <label>Talla: </label>
          <input type="text" id="talla" value="${product.talla}">
          <label>Precio: </label>
          <input type="number" id="precio" name="precio" value="${product.precio}" step="0.01">
          <label>Imagen: </label>
          <input type="text" id="imagen" name="imagen" value="${product.imagen}">
          <button type="submit">Guardar Cambios</button>
        </form>

        <script>
          document.getElementById("productForm").addEventListener("submit", async function(event) {
            event.preventDefault();
            const updatedProduct = {
              nombre: document.getElementById("nombre").value,
              descripcion: document.getElementById("descripcion").value,
              categoria: document.getElementById("categoria").value,
              talla: document.getElementById("talla").value,
              precio: document.getElementById("precio").value,
              imagen: document.getElementById("imagen").value
            };
            const response = await fetch('/dashboard/${product._id}', {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(updatedProduct)
            });
            const result = await response.json();
            alert(result.message);
            if (response.ok) {
              window.location.href = "/dashboard";
            }
          });
        </script>

      </body>
      </html>
    `);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener el producto para edición" });
  }
};

//Envia las modificaciones a la base de datos escuchando el metodo put que nos traemos del front
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await productService.updateProduct(req.params.productId, req.body);
    if (!updatedProduct) return res.status(404).json({ message: "Producto no encontrado" });
    res.json({ message: "Producto actualizado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar el producto" });
  }
};

//Elimina el producto de la lbase de datos escuchando el metodo delete que nos traemos del front 
exports.deleteProduct = async (req, res) => {
  try {
    const product = await productService.deleteProduct(req.params.productId);
    if (!product) return res.status(404).json({ message: "Producto no encontrado" });
    res.json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar el producto" });
  }
};
