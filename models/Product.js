// Establece las caracteristicas de los documentos de productos en la base de datos

const mongoose = require('mongoose');

//mongoose.Schema:Se usa para definir la estructura de los documentos en una colección de MongoDB.
const productSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    imagen: {
        type: String, 
    },
    categoria: {
        type: String,
        required: true,
        enum: ['Camisetas', 'Pantalones', 'Zapatos', 'Accesorios']
    },
    talla: {
        type: String,
        required: true,
        enum: ['XS', 'S', 'M', 'L', 'XL']
    },
    precio: {
        type: Number,
        required: true,
        min: 0
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
}, { timestamps: true }); 

// Añade dos lineas a cada documento, 
// createdAt: almacena la fecha y hora en que se creó el documento.                            
// updatedAt: almacena la fecha y hora en que el documento fue actualizado por última vez.

const Product = mongoose.model('Product', productSchema);
//Crea un modelo llamado "Product" basado en el esquema definido (UserSchema).

module.exports = Product;