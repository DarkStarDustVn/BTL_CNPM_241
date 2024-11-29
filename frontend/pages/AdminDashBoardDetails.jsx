import { FaShoppingCart, FaProductHunt, FaComments, FaStar, FaDollarSign } from "react-icons/fa";
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, ArcElement } from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";
import 'chart.js/auto';

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, ArcElement);

const AdminDashBoardDetails = () => {
  const stats = [
    { icon: <FaShoppingCart />, title: "Tổng số đơn hàng", value: "15", bgColor: "bg-blue-400" },
    { icon: <FaProductHunt />, title: "Sản phẩm", value: "40", bgColor: "bg-red-400" },
    { icon: <FaComments />, title: "Bình luận", value: "5", bgColor: "bg-purple-400" },
    { icon: <FaStar />, title: "Đánh giá", value: "12", bgColor: "bg-green-400" },
    { icon: <FaDollarSign />, title: "Doanh thu ngày", value: "365.000 VND", bgColor: "bg-pink-400" },
    { icon: <FaDollarSign />, title: "Doanh thu tuần", value: "1.047.000 VND", bgColor: "bg-yellow-400" },
    { icon: <FaDollarSign />, title: "Doanh thu tháng", value: "1.047.000 VND", bgColor: "bg-yellow-400" },
    { icon: <FaDollarSign />, title: "Doanh thu năm", value: "1.047.000 VND", bgColor: "bg-teal-400" },
  ];

  const lineData = {
    labels: Array.from({ length: 30 }, (_, i) => i + 1),
    datasets: [
      {
        label: "Hoàn tất giao dịch",
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 1000000)),
        borderColor: "blue",
        fill: false,
      },
      {
        label: "Tiếp nhận",
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 1000000)),
        borderColor: "green",
        fill: false,
      },
    ],
  };

  const doughnutData = {
    labels: ["Hoàn tất", "Tiếp nhận", "Đang vận chuyển", "Hủy bỏ"],
    datasets: [
      {
        data: [40, 30, 20, 10],
        backgroundColor: ["blue", "green", "orange", "red"],
      },
    ],
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>

      {/* Summary Section */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className={`flex items-center p-4 ${stat.bgColor} text-white rounded-lg`}>
            <div className="text-3xl mr-4">{stat.icon}</div>
            <div>
              <p className="text-sm">{stat.title}</p>
              <p className="text-xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Biểu đồ doanh thu các ngày trong tháng</h2>
          <Line data={lineData} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Thống kê trạng thái đơn hàng</h2>
          <Doughnut data={doughnutData} />
        </div>
      </div>

      {/* Orders and Products Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Danh sách đơn hàng mới</h2>
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200">
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Info</th>
                <th className="px-4 py-2">Money</th>
                <th className="px-4 py-2">Account</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Time</th>
              </tr>
            </thead>
            <tbody>
              {/* Add rows here */}
            </tbody>
          </table>
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg">Xem danh sách đơn hàng</button>
        </div>

        {/* Top Products */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Top sản phẩm bán trong tháng</h2>
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200">
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Qty</th>
                <th className="px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {/* Add rows here */}
            </tbody>
          </table>
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg">Xem danh sách sản phẩm</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoardDetails;
