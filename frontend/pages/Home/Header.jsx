import React from "react";

const Header = () => {
  return (
    <header className="bg-red-500 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img
          src="/path/to/logo.png"
          alt="BookShop Logo"
          className="w-20 h-20"
        />
        <h1 className="text-2xl font-bold">BookShop.vn</h1>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Bạn cần tìm gì?"
          className="p-2 rounded w-80"
        />
        <button className="bg-white text-red-500 p-2 rounded">Tìm kiếm</button>
      </div>
      <div className="flex space-x-4 items-center">
        <button className="text-white">Đăng nhập</button>
        <button className="text-white">Tài khoản</button>
      </div>
    </header>
  );
};

export default Header;