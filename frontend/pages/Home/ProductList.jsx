import React from "react";

const products = [
  { id: 1, name: "Truyện Tranh Phát Triển Tư Duy Cho Bé", price: "134.250đ", discount: "25%", image: "product1.jpg" },
  { id: 2, name: "Truyện Tranh Cổ Tích Việt Nam - Tấm Cám", price: "32.000đ", discount: "20%", image: "product2.jpg" },
  { id: 3, name: "Truyện Tranh Cổ Tích Việt Nam - Cây Khế", price: "20.800đ", discount: "20%", image: "product3.jpg" },
  { id: 4, name: "Truyện Tranh Tri Thức Khoa Học", price: "100.620đ", discount: "22%", image: "product4.jpg" },
  { id: 5, name: "Truyện Tranh Phiêu Lưu Kỳ Thú", price: "85.000đ", discount: "15%", image: "product5.jpg" },
];

const ProductList = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">TRUYỆN TRANH</h2>

      <div className="grid grid-cols-5 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden bg-white shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-red-500 font-bold">{product.price}</span>
                <span className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded">{product.discount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <button className="bg-red-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-red-600 transition">
          Xem thêm
        </button>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">TRUYỆN TRANH</h2>
      <div className="grid grid-cols-5 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden bg-white shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-red-500 font-bold">{product.price}</span>
                <span className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded">{product.discount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <button className="bg-red-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-red-600 transition">
          Xem thêm
        </button>
      </div>
      
    </div>

          
    
  );
};

export default ProductList;
