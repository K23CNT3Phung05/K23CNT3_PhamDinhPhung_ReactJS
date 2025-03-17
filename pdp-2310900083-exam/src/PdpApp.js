import React, { useState } from "react";
import ProductList from "./components/PdpProductList";
import ProductAdd from "./components/PdpProductAdd";
import "bootstrap/dist/css/bootstrap.min.css";

const PdpApp = () => {
  // Danh sách sản phẩm
  const [products, setProducts] = useState([
    { id: "SP001", name: "Laptop Dell XPS", price: 211000000, quantity: 10 },
    { id: "SP002", name: "iPhone 15 Pro", price: 27799000, quantity: 12},
    { id: "SP003", name: "Tai nghe Sony WH-1000XM5", price: 7990000, quantity: 15 },
  ]);

  // Thêm sản phẩm
  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  // Xóa sản phẩm
  const removeProduct = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
      setProducts(products.filter((product) => product.id !== id));
    }
  };

  // Cập nhật sản phẩm
  const updateProduct = (updatedProduct) => {
    setProducts(products.map((product) => (product.id === updatedProduct.id ? updatedProduct : product)));
  };

  return (
    <div className="container mt-4">
      <h1 className="text-success text-center">🛒 Quản lý Sản phẩm</h1>
      <ProductAdd addProduct={addProduct} />
      <ProductList products={products} removeProduct={removeProduct} updateProduct={updateProduct} />
    </div>
  );
};

export default PdpApp;
