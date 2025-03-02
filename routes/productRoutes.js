const express = require("express");
const router = express.Router();
const checkAuth = require("../middlewares/authMiddleware");
const productController = require("../controllers/productController");

// Redirección a la página principal de productos
router.get('/', productController.redirectHome);

// Rutas públicas
router.get("/products", productController.renderProductsPage);
router.get("/api/products", productController.getApiProducts);
router.get("/products/camisetas", productController.renderProductsCamisetas);
router.get("/products/pantalones", productController.renderProductsPantalones);
router.get("/products/zapatos", productController.renderProductsZapatos);
router.get("/products/accesorios", productController.renderProductsAccesorios);
router.get("/products/:productId", productController.renderProductDetail);

// Rutas del dashboard (requieren autenticación mediante el middleware checkAuth)
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

module.exports = router;
