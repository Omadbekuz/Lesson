const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

if (!fs.existsSync("data.json")) {
  fs.writeFileSync("data.json", JSON.stringify([]));
}

let products = JSON.parse(fs.readFileSync("data.json", "utf-8"));

app.use(express.json());
app.use(cors());

// 6 ta belgili UUID yaratish funksiyasi
const generateId = () => uuidv4().replace(/-/g, "").slice(0, 6);

// Barcha mahsulotlarni olish
app.get("/products", (req, res) => {
  res.json(products);
});

// ID orqali mahsulotni olish
app.get("/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = products.find((p) => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// Kategoriya orqali mahsulotlarni olish
app.get("/products/category/:category", (req, res) => {
  const category = req.params.category;
  const filteredProducts = products.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );

  if (filteredProducts.length > 0) {
    res.json(filteredProducts);
  } else {
    res.status(404).json({ message: "No products found in this category" });
  }
});

// Mahsulot qo'shish
app.post("/add/product", (req, res) => {
  const { name, price, category } = req.body;
  const product = {
    id: generateId(), // 6 belgili UUID yaratish
    name,
    price,
    category,
  };
  products.push(product);

  fs.writeFileSync("data.json", JSON.stringify(products));

  res.status(201).json({
    message: "Product added successfully",
    status: "success",
    statusCode: 201,
  });
});

// Mahsulotni yangilash
app.patch("/update/product/:id", (req, res) => {
  const { id } = req.params;
  const { name = null, price = null, category = null } = req.body;

  const product = products.find((p) => p.id === id);
  if (!product) return res.status(404).send("Product not found");

  const index = products.indexOf(product);
  const updatedProduct = {
    ...product,
    name: name || product.name,
    price: price || product.price,
    category: category || product.category,
  };

  products[index] = updatedProduct;
  fs.writeFileSync("data.json", JSON.stringify(products));

  res.send({
    message: "Product updated successfully",
    status: "success",
    statusCode: 200,
  });
});

// Mahsulotni o'chirish
app.delete("/delete/product/:id", (req, res) => {
  const { id } = req.params;
  const productIndex = products.findIndex((p) => p.id === id);

  if (productIndex === -1) return res.status(404).send("Product not found");

  products.splice(productIndex, 1);
  fs.writeFileSync("data.json", JSON.stringify(products));

  res.send({
    message: "Product deleted successfully",
    status: "success",
    statusCode: 200,
  });
});

// Barcha mahsulotlarni o'chirish
app.delete("/update/product/alldelete", (req, res) => {
  products = [];
  fs.writeFileSync("data.json", JSON.stringify(products));

  res.send({
    message: "All products deleted successfully",
    status: "success",
    statusCode: 200,
  });
});

// Eng arzon va eng qimmat mahsulotlarni olish
app.get("/products/price/range", (req, res) => {
  if (products.length === 0) {
    return res.status(404).json({ message: "No products available" });
  }

  const cheapestProduct = products.reduce((prev, curr) =>
    prev.price < curr.price ? prev : curr
  );
  const mostExpensiveProduct = products.reduce((prev, curr) =>
    prev.price > curr.price ? prev : curr
  );

  res.json({
    cheapest: cheapestProduct,
    mostExpensive: mostExpensiveProduct,
  });
});

app.use((req, res) => res.status(404).send("404 Not Found"));

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
