import React, { useState } from "react";

const ProductAdd = ({ addProduct }) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id || !name || !price || !quantity) {
      alert("Vui lòng nhập đầy đủ thông tin sản phẩm!");
      return;
    }
    addProduct({ id, name, price: Number(price), quantity: Number(quantity) });
    setId("");
    setName("");
    setPrice("");
    setQuantity("");
  };

  return (
    <form onSubmit={handleSubmit} className="border p-3 mt-3 bg-light">
      <h4 className="text-primary">➕ Thêm sản phẩm</h4>
      <div className="mb-2">
        <input type="text" className="form-control" placeholder="Mã sản phẩm" value={id} onChange={(e) => setId(e.target.value)} />
      </div>
      <div className="mb-2">
        <input type="text" className="form-control" placeholder="Tên sản phẩm" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="mb-2">
        <input type="number" className="form-control" placeholder="Giá sản phẩm" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div className="mb-2">
        <input type="number" className="form-control" placeholder="Số lượng" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-success">➕ Thêm</button>
    </form>
  );
};

export default ProductAdd;
