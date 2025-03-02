//Test con supertest para los productos

const request = require('supertest');
const app = require('../index.js');
const Product = require("../models/Product");

describe("test/products", () => {

    // Definimos un producto que se usará en los tests
    const product = {
        nombre: "Camiseta Negra",
        descripcion: "Camiseta de algodón negra.",
        imagen: "imagen.jpg",
        categoria: "Camisetas",
        talla: "M",
        precio: 19
    };


    test("Create a product", async () => {
        let productsCount = await ProductTest.countDocuments();
        expect(productsCount).toBe(0);

        const resProduct = await request(app)
            .post("/dashboard/new")
            .send(product)
            .expect(201);

        productsCount = await ProductTest.countDocuments();
        expect(productsCount).toBe(1);

        expect(resProduct.body.nombre).toBeDefined();
        expect(resProduct.body.descripcion).toBeDefined();
        expect(resProduct.body.categoria).toBeDefined();
        expect(resProduct.body.talla).toBeDefined();

        expect(resProduct.body.precio).toBeDefined();
    });

    test("Get all products", async () => {
        const newProducts = [
            {
                nombre: "Pantalón Vaquero",
                descripcion: "Pantalón azul.",
                imagen: "pantalon.jpg",
                categoria: "Pantalones",
                talla: "L",
                precio: 29
            },
            {
                nombre: "Zapatillas Blancas",
                descripcion: "Zapatillas deportivas blancas.",
                imagen: "zapatillas.jpg",
                categoria: "Zapatos",
                talla: "XL",
                precio: 49
            }
        ];

        await ProductTest.insertMany(newProducts);
        let productsCount = await ProductTest.countDocuments();
        expect(productsCount).toBe(3);

        const res = await request(app).get("/api/products").expect(200);
        const products = [product, ...newProducts];

        res.body.forEach((product, index) => {
            expect(product.nombre).toBe(products[index].nombre);
            expect(product.descripcion).toBe(products[index].descripcion);
            expect(product.categoria).toBe(products[index].categoria);
            expect(product.talla).toBe(products[index].talla);
            expect(product.precio).toBe(products[index].precio);
        });

    });
    test("Update a product", async () => {
        // Crear un nuevo producto
        const resCreate = await request(app)
            .post("/dashboard/new")
            .send(product)
            .expect(201);
    
        const productId = resCreate.body._id;
    
        // Datos para actualizar el producto
        const updatedProduct = {
            nombre: "Camiseta Roja",
            descripcion: "Camiseta de algodón roja.",
            imagen: "camiseta_roja.jpg",
            categoria: "Camisetas",
            talla: "L",
            precio: 25
        };
    
        // Actualizar el producto
        const resUpdate = await request(app)
            .put(`/dashboard/product/${productId}`)
            .send(updatedProduct)
            .expect(200);
    
        // Verificar que los cambios se han guardado
        expect(resUpdate.body.nombre).toBe(updatedProduct.nombre);
        expect(resUpdate.body.descripcion).toBe(updatedProduct.descripcion);
        expect(resUpdate.body.categoria).toBe(updatedProduct.categoria);
        expect(resUpdate.body.talla).toBe(updatedProduct.talla);
        expect(resUpdate.body.precio).toBe(updatedProduct.precio);
    });
});
