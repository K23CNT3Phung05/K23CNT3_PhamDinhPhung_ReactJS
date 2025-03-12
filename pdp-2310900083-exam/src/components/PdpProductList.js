import React from "react";

const ProductList = ({ products, removeProduct, updateProduct }) => {
  // Hàm chỉnh sửa sản phẩm
  const handleEdit = (product) => {
    const newName = prompt("Nhập tên sản phẩm mới:", product.name);
    const newPrice = prompt("Nhập giá mới:", product.price);
    const newQuantity = prompt("Nhập số lượng mới:", product.quantity);

    if (newName && newPrice && newQuantity) {
      updateProduct({ ...product, name: newName, price: Number(newPrice), quantity: Number(newQuantity) });
    }
  };

  return (
    <table className="table table-bordered mt-3">
      <thead className="table-dark">
        <tr>
          <th>Mã SP</th>
          <th>Tên sản phẩm</th>
          <th>Giá (VNĐ)</th>
          <th>Số lượng</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price.toLocaleString()}</td>
            <td>{product.quantity}</td>
            <td>
              <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(product)}>
                ✏️ Sửa
              </button>
              <button className="btn btn-danger btn-sm" onClick={() => removeProduct(product.id)}>
                ❌ Xóa
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
