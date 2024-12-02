import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";



const Product = () => {
  const [productss, setProducts] = React.useState([]);
  React.useEffect(() => {
    
    axios.get("http://localhost:5000/product/list").then((res) => {
      setProducts(res.data);
    });
  }, []);
  const products = [
    { id: 47, name: "Tạp chí sắc đẹp", category: "Báo Tạp Chí", price: "38,000 vnd", salePrice: "34,200 vnd", hot: false, status: "Hiển thị", date: "2020-04-17 14:23:50", avatar: "image1.png" },
    { id: 46, name: "Tạp Chí Du Lịch", category: "Báo Tạp Chí", price: "20,000 vnd", salePrice: "20,000 vnd", hot: false, status: "Hiển thị", date: "2020-04-17 14:23:20", avatar: "image2.png" },
    { id: 45, name: "Tự học Mũ - Logarit và hình tọa độ OXYZ", category: "Sách Tham Khảo", price: "150,000 vnd", salePrice: "108,000 vnd", hot: false, status: "Hiển thị", date: "2020-04-17 14:18:27", avatar: "image3.png" },
    { id: 44, name: "Tự học hình không gian", category: "Sách Tham Khảo", price: "148,000 vnd", salePrice: "114,400 vnd", hot: false, status: "Hiển thị", date: "2020-04-17 14:13:40", avatar: "image4.png" },
    { id: 43, name: "Satoshi (Pokemon)-Tajiri Satoshi", category: "Truyện Tranh", price: "44,000 vnd", salePrice: "40,480 vnd", hot: false, status: "Hiển thị", date: "2020-04-17 14:09:40", avatar: "image5.png" },
    { id: 42, name: "Alice ở xứ sở trong gương - Lewis Carroll", category: "Sách dành cho thiếu nhi", price: "90,000 vnd", salePrice: "61,200 vnd", hot: false, status: "Hiển thị", date: "2020-04-17 14:02:29", avatar: "image6.png" },
    { id: 41, name: "Hoàng tử bé - Antoine de Saint-Exupéry", category: "Sách dành cho thiếu nhi", price: "48,000 vnd", salePrice: "40,180 vnd", hot: false, status: "Hiển thị", date: "2020-04-17 13:55:39", avatar: "image7.png" },
    { id: 40, name: "Charlotte và Wilbur - E.B. White", category: "Sách dành cho thiếu nhi", price: "56,000 vnd", salePrice: "42,000 vnd", hot: false, status: "Hiển thị", date: "2020-04-17 13:48:44", avatar: "image8.png" },
  ];

  return (
    <div className="p-6 bg-gray-100 flex-1">
      <h2 className="text-2xl font-semibold mb-6">Quản lý sách</h2>
      <div className="bg-white p-4 rounded shadow-md">
        <div className="flex justify-between items-center mb-4">
          <input type="text" placeholder="Name ..." className="border p-2 rounded w-1/3" />
          <input type="text" placeholder="Danh mục" className="border p-2 rounded w-1/3 mx-2" />
          <button className="bg-blue-500 text-white p-2 rounded">Search</button>
          <button className="bg-green-500 text-white p-2 rounded ml-2">Thêm mới +</button>
        </div>
        <table className="table-auto w-full border">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2 border">STT</th>
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Avatar</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">Hot</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {productss.map((product, index) => (
              <tr key={product.id} className="border-b">
                <td className="p-2 border">{index + 1}</td>
                <td className="p-2 border">{product.bookID}</td>
                <td className="p-2 border">{product.title}</td>
                <td className="p-2 border">
                  <span className="bg-green-100 text-green-800 p-1 rounded">
                    {product.category}
                  </span>
                </td>
                <td className="p-2 border">
                  <img src={product.image} alt={product.title} className="w-12 h-12 object-cover" />
                </td>
                <td className="p-2 border">
                  <span className="text-gray-400 mr-2">{product.price}</span>
                  <span>{product.salePrice}</span>
                </td>
                <td className="p-2 border">
                  <span className="bg-blue-100 text-blue-800 p-1 rounded">{product.status}</span>
                </td>
                <td className="p-2 border flex space-x-2">
                  <button className="bg-blue-500 text-white p-2 rounded"><FaEdit /></button>
                  <button className="bg-red-500 text-white p-2 rounded"><FaTrash /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end mt-4">
          <nav className="flex space-x-2">
            <button className="px-4 py-2 border bg-blue-500 text-white rounded">1</button>
            <button className="px-4 py-2 border">2</button>
            <button className="px-4 py-2 border">3</button>
            <button className="px-4 py-2 border">4</button>
            <button className="px-4 py-2 border">5</button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Product;