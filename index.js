//Importaciones para mi app y conexion con el servidor

const express = require('express');
const { dbConnection } = require('./config/db');
const path = require('path')
const admin = require('firebase-admin');
const swaggerUI = require('swagger-ui-express')
const serviceAccount = require('./config/firebase')
const cookieParser = require('cookie-parser');
require('dotenv').config();

//Inicializamos admin, se inicia aqui antes de importar y ejecutar el middleware)
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const productRouter = require('./routes/productRoutes');
const authRouter = require('./routes/authRoutes');
const docs = require('./docs/index')
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// esta línea hace que podamos acceder a archivos estáticos (html)
// lo combinamos con 'path' para unir de manera segura los archivos que vamos a usar
// lo unimos con join --> ese join une el path del archivo estático a la carpeta public
app.use(express.static(path.join(__dirname, 'public')))

// con esta linea podemos acceder a la documentación de la api con swagger
app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(docs))

app.use('/', productRouter);
app.use('/', authRouter);

dbConnection();

//! --- ERROR 404 ---> no se encuentra una ruta
//Middleware para gestionar rutas no definidas
app.use("*", (req, res, next) => {
    const error = new Error("Route not found");
    error.status = 404;
    return next(error)
}) 

app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}`);
});

module.exports = app;
