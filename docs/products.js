module.exports = {
  paths: {
    "/products": {
      get: {
        tags: {
          Products: " Get products",
        },
        description: "Get products",
        operationId: "getproducts",
        parameters: [],
        responses: {
          200: {
            description: "Products were obtained",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Product",
                },
              },
            },
          },
        },
      },
    },
    "/product/{productId}": {
      get: {
        tags: {
          Products: " Show the detail of a product",
        },
        description: "Detail Product",
        operationId: "detailProduct",
        parameters: [
          {
            name: "productid",
            in: "path",
            schema: {
              $ref: "#/components/schemas/productId",
            },
            description: "Product ID to be shown ",
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/ProductInput" },
            },
          },
        },
        responses: {
          200: { description: "Product updated successfully" },
          404: { description: "Product not found" },
          500: { description: "Server error" },
        },
      },
    },
    "/dashboard": {
      get: {
        tags: {
          Products: " Get products",
        },
        description: "Get products",
        operationId: "getproducts",
        parameters: [],
        responses: {
          200: {
            description: "Products were obtained",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Product",
                },
              },
            },
          },
        },
      },
    },
    "/dashboard/new": {
      post: {
        tags: {
          Products: " Create a Product",
        },
        description: "Create Product",
        operationId: "createProduct",
        parameters: [],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ProductInput",
              },
            },
          },
        },
        responses: {
          201: {description: "product created successfully"},
          500: {description: "Server error"},
        },
      },
    },
    "/dashboard/{productId}": {
      get: {
        tags: {
          Products: " Show the detail of a product",
        },
        description: "Detail Product",
        operationId: "detailProduct",
        parameters: [
          {
            name: "productid",
            in: "path",
            schema: {
              $ref: "#/components/schemas/productId",
            },
            description: "Product ID to be shown ",
          },
        ],
        responses: {
          200: { description: "Product updated successfully" },
          404: { description: "Product not found" },
          500: { description: "Server error" },
        },
      },put: {
        tags: {
          Products: " Update a product",
        },
        description: "Update product",
        operationId: "updateproduct",
        parameters: [
          {
            name: "productid",
            in: "path",
            schema: {
              $ref: "#/components/schemas/productId",
            },
            description: "Id of Product to be updated",
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/ProductInput" },
            },
          },
        },
        responses: {
          200: { description: "Product updated successfully" },
          404: { description: "Product not found" },
          500: { description: "Server error" },
        },
      },
      delete: {
        tags: {
          Products: " Delete a product",
        },
        description: "Deleting a Product",
        operationId: "deleteProduct",
        parameters: [
          {
            name: "productid",
            in: "path",
            schema: {
              $ref: "#/components/schemas/productId",
            },
            description: "Deleting a done Product",
          },
        ],
        responses: {
          200: { description: "Product deleted successfully" },
          404: { description: "Product not found" },
          500: { description: "Server error" },
        },
      },
    },
  },
};
