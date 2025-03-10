# Tienda Online

## Descripción

Este proyecto es una aplicación para la venta de ropa que permite a los usuarios explorar un catálogo de productos general o por categorías. También incluye un panel de administración, accesible mediante login con usuario y contraseña, para gestionar productos y eliminarlos. La aplicación está construida con Node.js, Express y utiliza MongoDB Atlas como base de datos.

## Tecnologías Utilizadas

    Backend: Node.js, Express

    Base de Datos: MongoDB Atlas

    Autenticación: Firebase Authentication

    Documentación: Swagger

    Testing: Jest y Supertest

## Instalación y Configuración

Una vez clonado el repositorio del proyecto para que la aplicación funcione es necesario seguir estos pasos

### 1. Instalar dependencias

npm install

### 2. Configurar variables de entorno

Crear un archivo .env en la raíz del proyecto con las siguientes variables:

PORT=8080

MONGO_URI=mongodb+srv://usuario:password@cluster.mongodb.net/product?retryWrites=true&w=majority

FIREBASE_TYPE=
FIREBASE_PROJECT_ID=
FIREBASE_PRIVATE_KEY_ID=
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=
FIREBASE_CLIENT_ID=
FIREBASE_AUTH_URI=
FIREBASE_TOKEN_URI=
FIREBASE_AUTH_PROVIDER_CERT_URL=
FIREBASE_CLIENT_CERT_URL=
FIREBASE_UNIVERSE_DOMAIN=

FIREBASE_APIKEY=your_firebase_apikey
FIREBASE_AUTHDOMAIN=your_firebase_authdomain
FIREBASE_PROJECTID=your_firebase_projectid
FIREBASE_STORAGEBUCKET=your_firebase_storagebucket
FIREBASE_MESSAGINGSENDERID=your_firebase_messagingsenderid
FIREBASE_APPID=your_firebase_appid

### 3. Iniciar la aplicación

npm start 


## Endpoints
```js
//Rutas publicas

router.get("/products", productController.renderProductsPage);
router.get("/api/products", productController.getApiProducts);
router.get("/products/camisetas", productController.renderProductsCamisetas);
router.get("/products/pantalones", productController.renderProductsPantalones);
router.get("/products/zapatos", productController.renderProductsZapatos);
router.get("/products/accesorios", productController.renderProductsAccesorios);
router.get("/products/:productId", productController.renderProductDetail);

// Rutas del dashboard, requieren autenticación mediante el middleware checkAuth

router.get("/dashboard", checkAuth, productController.renderDashboard);
router.get("/dashboard/new", checkAuth, productController.renderDashboardNew);
router.post("/dashboard/new", checkAuth, productController.createProduct);
router.get("/dashboard/camisetas", checkAuth, productController.renderDashboardCamisetas);
router.get("/dashboard/pantalones", checkAuth, productController.renderDashboardPantalones);
router.get("/dashboard/zapatos", checkAuth, productController.renderDashboardZapatos);
router.get("/dashboard/accesorios", checkAuth, productController.renderDashboardAccesorios);
router.get("/dashboard/:productId", checkAuth, productController.renderDashboardProductDetail);
router.get("/dashboard/edit/:productId", productController.renderEditProductForm);
router.put("/dashboard/:productId", checkAuth, productController.updateProduct);
router.delete("/dashboard/:productId", checkAuth, productController.deleteProduct);

//Autenticación (Firebase)

router.get("/register", authController.renderRegisterPage);
router.get("/login", authController.renderLoginPage);
router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.post("/logout", authController.logoutUser);

```

## Documentación con Swagger

La API está documentada con Swagger. Para visualizar la documentación, iniciar la aplicación y acceder a:

http://localhost:8080/api-docs

