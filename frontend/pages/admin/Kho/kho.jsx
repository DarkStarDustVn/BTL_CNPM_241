import React from "react";
import { useNavigate } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Kho = () => {
  const navigate = useNavigate(); // Dùng để chuyển hướng

  const handleDetailClick = (bookType) => {
    navigate(`/chi-tiet-sach`, { state: { bookType } });
  };

  const pieData = {
    labels: ["Bách khoa tri thức", "Truyện tranh", "Khám phá thế giới", "Kinh tế", "Kỹ năng sống"],
    datasets: [
      {
        data: [27, 7, 22, 32, 12],
        backgroundColor: ["#3b82f6", "#f97316", "#eab308", "#10b981", "#a855f7"],
        hoverBackgroundColor: ["#2563eb", "#ea580c", "#ca8a04", "#059669", "#9333ea"],
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center bg-blue-500 text-white p-4 rounded-md shadow-md mb-6">
        <h1 className="text-xl font-bold">Quản lý kho hàng</h1>
      </div>

      {/* Tổng quan kho */}
      <div className="grid grid-cols-12 gap-4 mb-6">
        <div className="col-span-6 bg-white shadow-md rounded-md p-4">
          <h2 className="text-lg font-semibold text-red-500 mb-4">Tồn kho hiện tại</h2>
          <div className="flex flex-col gap-2">
            <p className="text-gray-600">Tổng số sách trong kho: <span className="font-semibold">1,237 (quyển)</span></p>
            <p className="text-gray-600">Tổng số loại sách trong kho: <span className="font-semibold">5</span></p>
          </div>
          <div className="mt-4">
            <table className="w-full text-left border-collapse border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 p-2">Loại sách</th>
                  <th className="border border-gray-200 p-2">Số lượng</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Bách khoa tri thức", 334],
                  ["Truyện tranh", 87],
                  ["Khám phá thế giới", 272],
                  ["Kinh tế", 396],
                  ["Kỹ năng sống", 148],
                ].map(([name, count], idx) => (
                  <tr key={idx}>
                    <td className="border border-gray-200 p-2">{name}</td>
                    <td className="border border-gray-200 p-2">{count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        

        <div className="col-span-6 bg-white shadow-md rounded-md p-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Tỉ lệ các loại sách còn trong kho</h2>
          <Pie data={pieData} />
        </div>
      </div>

      {/* Lịch sử nhập hàng */}
      <div className="bg-white shadow-md rounded-md p-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Lịch sử nhập hàng</h2>
        <table className="w-full text-left border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-200 p-2">Loại sách</th>
              <th className="border border-gray-200 p-2">Số lượng</th>
              <th className="border border-gray-200 p-2">Nhà cung cấp</th>
              <th className="border border-gray-200 p-2">Ngày nhập</th>
              <th className="border border-gray-200 p-2"></th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Bách khoa tri thức", 334, "ABC Co.", "01-11-2024"],
              ["Truyện tranh", 87, "ABC Co.", "01-11-2024"],
              ["Khám phá thế giới", 272, "ABC Co.", "01-11-2024"],
              ["Kinh tế", 396, "ABC Co.", "01-11-2024"],
              ["Kỹ năng sống", 148, "ABC Co.", "01-11-2024"],
            ].map(([type, quantity, supplier, date], idx) => (
              <tr key={idx}>
                <td className="border border-gray-200 p-2">{type}</td>
                <td className="border border-gray-200 p-2">{quantity}</td>
                <td className="border border-gray-200 p-2">{supplier}</td>
                <td className="border border-gray-200 p-2">{date}</td>
                <td className="border border-gray-200 p-2">
                  <button
                    onClick={() => handleDetailClick(type)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md"
                  >
                    Chi tiết
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Kho;