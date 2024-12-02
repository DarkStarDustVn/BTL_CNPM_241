import React, { useState } from "react";
import { HiEye,HiOutlineSearch,HiOutlineFolderDownload } from "react-icons/hi";


const QuanLiDonHang = () => {
  const [orders] = useState([
    {
      id: 21,
      name: "Nguyễn Văn Chiến",
      email: "khong.kha.dung.1112@gmail.com",
      phone: "03595345",
      address: "Hà Nội",
      money: "839.200 đ",
      account: "Thành viên",
      status: "Tiếp nhận",
      time: "2021-03-21 12:01:54",
    },
    {
      id: 20,
      name: "Trung Phu NA",
      email: "phput.humg.94@gmail.com",
      phone: "0986420994",
      address: "Nghệ An",
      money: "40.480 đ",
      account: "Thành viên",
      status: "Hoàn thành",
      time: "2021-03-16 19:13:12",
    },
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null); // Để lưu đơn hàng đã chọn

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-700">Quản lý đơn hàng</h1>

      <div className="flex items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="ID..."
          className="p-2 border rounded-md focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email..."
          className="p-2 border rounded-md focus:outline-none"
        />
        <select className="p-2 border rounded-md">
          <option>Phân loại khách</option>
          <option>Thành viên</option>
          <option>Khách vãng lai</option>
        </select>
        <select className="p-2 border rounded-md">
          <option>Trạng thái</option>
          <option>Tiếp nhận</option>
          <option>Hoàn thành</option>
          <option>Đã hủy</option>
        </select>
        <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
          <HiOutlineSearch />
          Search
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          <HiOutlineFolderDownload />
          Export
        </button>
      </div>

      <table className="table-auto w-full bg-white shadow-md rounded-lg border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-4 border">STT</th>
            <th className="p-4 border">ID</th>
            <th className="p-4 border">Info</th>
            <th className="p-4 border">Money</th>
            <th className="p-4 border">Account</th>
            <th className="p-4 border">Status</th>
            <th className="p-4 border">Time</th>
            <th className="p-4 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.id} className="text-center">
              <td className="p-4 border">{index + 1}</td>
              <td className="p-4 border">{order.id}</td>
              <td className="p-4 border">
                <div className="text-left">
                  <p><strong>Name:</strong> {order.name}</p>
                  <p><strong>Email:</strong> {order.email}</p>
                  <p><strong>Phone:</strong> {order.phone}</p>
                  <p><strong>Address:</strong> {order.address}</p>
                </div>
              </td>
              <td className="p-4 border">{order.money}</td>
              <td className="p-8 border">
                <div className="bg-green-100 text-green-600 px-2 py-1 rounded">
                  {order.account}
                </div>
              </td>
              <td className="p-4 border">
                <div
                  className={`px-2 py-1 rounded ${
                    order.status === "Hoàn thành"
                      ? "bg-green-100 text-green-600"
                      : order.status === "Đã hủy"
                      ? "bg-red-100 text-red-600"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {order.status}
                </div>
              </td>
              <td className="p-8 border">{order.time}</td>
              <td className="p-4 border">
                <div className="flex justify-center items-center gap-2">
                  <button
                    className="text-blue-500 hover:text-blue-700 flex items-center gap-1"
                    onClick={() => setSelectedOrder(order)}
                  >
                    <HiEye className="w-5 h-5" />
                    View
                  </button>
                  <button className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">
                    Action
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Popup Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-2/4 relative">
            <h2 className="text-xl font-bold mb-4">Thông tin đơn hàng</h2>
            <p><strong>ID:</strong> {selectedOrder.id}</p>
            <p><strong>Name:</strong> {selectedOrder.name}</p>
            <p><strong>Email:</strong> {selectedOrder.email}</p>
            <p><strong>Phone:</strong> {selectedOrder.phone}</p>
            <p><strong>Address:</strong> {selectedOrder.address}</p>
            <p><strong>Status:</strong> {selectedOrder.status}</p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={() => setSelectedOrder(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuanLiDonHang;
