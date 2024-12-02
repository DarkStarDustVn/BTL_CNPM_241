import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl font-bold mb-4">BookShop.vn</h4>
          <p>BookShop.vn nhận đặt hàng trực tuyến và giao hàng tận nơi.</p>
          <p>KHÔNG hỗ trợ mua và nhận hàng trực tiếp tại văn phòng.</p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Dịch Vụ</h4>
          <ul>
            <li>Điều khoản sử dụng</li>
            <li>Chính sách bảo mật</li>
            <li>Chính sách thanh toán</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4">Hỗ Trợ</h4>
          <ul>
            <li>Đổi - trả hàng</li>
            <li>Chính sách vận chuyển</li>
            <li>Chăm sóc khách hàng</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>© 2024 BookShop.vn - All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;