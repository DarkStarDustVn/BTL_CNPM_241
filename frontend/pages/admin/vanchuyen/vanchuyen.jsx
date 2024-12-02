import React from "react";
import { HiArrowCircleUp,HiPencil } from "react-icons/hi";

const VanChuyen = () => {
  const shippingData = [
    {
      khuVuc: "Nội thành",
      giaTri: [
        ["Dưới 1 kg", "20,000 VND", "35,000 VND"],
        ["1 - 3 kg", "25,000 VND", "40,000 VND"],
        ["Trên 3 kg", "30,000 VND", "45,000 VND"],
      ],
    },
    {
      khuVuc: "Ngoại thành",
      giaTri: [
        ["Dưới 1 kg", "30,000 VND", "40,000 VND"],
        ["1 - 3 kg", "35,000 VND", "50,000 VND"],
        ["Trên 3 kg", "40,000 VND", "60,000 VND"],
      ],
    },
    // Tiếp tục thêm các khu vực khác...
  ];

  const valueData = [
    {
      giaTriDonHang: "Dưới 200,000",
      giaTri: [
        ["Dưới 1 kg", "20,000 VND", "35,000 VND"],
        ["1 - 3 kg", "25,000 VND", "40,000 VND"],
        ["Trên 3 kg", "30,000 VND", "45,000 VND"],
      ],
    },
    {
      giaTriDonHang: "200,000 - 500,000",
      giaTri: [
        ["Dưới 1 kg", "15,000 VND", "30,000 VND"],
        ["1 - 3 kg", "20,000 VND", "35,000 VND"],
        ["Trên 3 kg", "25,000 VND", "40,000 VND"],
      ],
    },
    // Tiếp tục thêm các giá trị khác...
  ];

  const renderTable = (data, title) => (
    <div className="bg-white shadow-md rounded-md p-5 mb-6">
      <h2 className="text-lg font-semibold text-red-500 mb-4">{title}</h2>
      <table className="w-full border-collapse border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-200 p-2">Khu Vực / Giá Trị</th>
            <th className="border border-gray-200 p-2">Trọng Lượng</th>
            <th className="border border-gray-200 p-2">Giao Hàng Tiêu Chuẩn (3-5 ngày)</th>
            <th className="border border-gray-200 p-2">Giao Hàng Nhanh (1-2 ngày)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <React.Fragment key={idx}>
              <tr className="bg-gray-200">
                <td className="border border-gray-200 p-2 font-semibold" colSpan={4}>
                  {row.khuVuc || row.giaTriDonHang}
                </td>
              </tr>
              {row.giaTri.map((item, i) => (
                <tr key={i}>
                  <td className="border border-gray-200 p-2"></td>
                  <td className="border border-gray-200 p-2">{item[0]}</td>
                  <td className="border border-gray-200 p-2">{item[1]}</td>
                  <td className="border border-gray-200 p-2">{item[2]}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4 gap-2">
        <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md">
          <HiPencil className="h-5 w-5 mr-2" />
          Chỉnh Sửa
        </button>
        <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded-md">
          <HiArrowCircleUp className="h-5 w-5 mr-2" />
          Cập Nhật
        </button>
      </div>
    </div>
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {renderTable(shippingData, "Theo khu vực giao hàng")}
      {renderTable(valueData, "Theo giá trị đơn hàng")}
    </div>
  );
};

export default VanChuyen;
