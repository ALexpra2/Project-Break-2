module.exports = {
    components: {
        schemas: {
            Product: {
                type: 'object',
                properties: {
                    _id: {
                        type: 'string',
                        description: 'Product identification number',
                        example: '67c0fdd3af046b181b404cac'
                    },
                    nombre: {
                        type: 'string',
                        description: 'Name of the product',
                        example: 'Camiseta Think like a proton'
                    },
                    descripcion: {
                        type: 'string',
                        description: 'Description of the product',
                        example: 'Camiseta de algodón con diseño de un proton'
                    },
                    imagen: {
                        type: 'string',
                        description: 'URL of the product image',
                        example: '../images/Camiseta-Proton.png'
                    },
                    categoria: {
                        type: 'string',
                        description: 'Category of the product',
                        enum: ['Camisetas', 'Pantalones', 'Zapatos', 'Accesorios'],
                        example: 'Camisetas'
                    },
                    talla: {
                        type: 'string',
                        description: 'Size of the product',
                        enum: ['XS', 'S', 'M', 'L', 'XL'],
                        example: 'M'
                    },
                    precio: {
                        type: 'number',
                        description: 'Price of the product',
                        minimum: 0,
                        example: 29
                    },
                    fechaCreacion: {
                        type: 'string',
                        format: 'date-time',
                        description: 'Creation date of the product',
                        example: '2025-02-28T00:05:39.213Z'
                    },
                },
            },
            ProductInput: {
                type: "object",
                properties: {
                    nombre: {
                        type: 'string',
                        description: 'Name of the product',
                        example: 'Camiseta Think like a proton'
                    },
                    descripcion: {
                        type: 'string',
                        description: 'Description of the product',
                        example: 'Camiseta de algodón con diseño de un proton'
                    },
                    imagen: {
                        type: 'string',
                        description: 'URL of the product image',
                        example: '../images/Camiseta-Proton.png'
                    },
                    categoria: {
                        type: 'string',
                        description: 'Category of the product',
                        enum: ['Camisetas', 'Pantalones', 'Zapatos', 'Accesorios'],
                        example: 'Camisetas'
                    },
                    talla: {
                        type: 'string',
                        description: 'Size of the product',
                        enum: ['XS', 'S', 'M', 'L', 'XL'],
                        example: 'M'
                    },
                    precio: {
                        type: 'number',
                        description: 'Price of the product',
                        minimum: 0,
                        example: 29
                    },
                },
            },
            productId: {
                type: "objectId",
                description: "An id of a product",
                example: "67c0fdd3af046b181b404cac",
            },
        }
    }
}