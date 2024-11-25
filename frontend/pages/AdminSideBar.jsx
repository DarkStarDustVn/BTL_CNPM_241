// components/Sidebar.js
import avatar from "../IMG/avatar.png";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faStar, faFileAlt, faClipboardList, faWarehouse, faShippingFast, faTags } from "@fortawesome/free-solid-svg-icons";
import { NavLink,Link } from "react-router-dom";
const Sidebar = () => {
  const [isSanPhamOpen, setSanPhamOpen] = useState(false);
  const [isDonHangOpen, setDonHangOpen] = useState(false);
  const [isTinTucOpen, setTinTucOpen] = useState(false);

  return (
    <aside className="w-64 bg-gray-800 text-white">
      <div className="p-4">
        <img src={avatar} alt="Admin Avatar" className="rounded-full w-16 h-16 mx-auto" />
        <h2 className="text-center text-lg mt-2">Admin</h2>
        <p className="text-center text-sm text-green-400">Online</p>
      </div>

      <div className="p-4 bg-gray-700 text-center font-bold">
        Main Features
      </div>

      <nav>
        <ul>
          <li className="p-4 hover:bg-gray-700 cursor-pointer">
            <FontAwesomeIcon icon={faClipboardList} className="pr-4" />
            <Link to="/admin/dashboard">  Dashboard </Link>
          </li>

          <li className="p-4 hover:bg-gray-700 cursor-pointer"> 
               

          <div>
          <button className="pb-2 flex justify-between items-center" onClick={() => setSanPhamOpen(!isSanPhamOpen)}>
            <FontAwesomeIcon icon={faBox} className="pr-4" /> 
            <span>Sản phẩm</span>
            <span className="pl-16">{isSanPhamOpen ? "▲" : "▼"}</span>
          </button>
          {isSanPhamOpen && (
            <ul className="bg-gray">
              <li className="py-2 hover:bg-gray-600 cursor-pointer">
                <FontAwesomeIcon icon={faBox} className="mr-2" />
                <Link to="/admin/books">Sách</Link>
              </li>
              <li className="py-2 hover:bg-gray-600 cursor-pointer">
                <FontAwesomeIcon icon={faStar} className="mr-2" />
                Đánh giá
              </li>
              <li className="py-2 hover:bg-gray-600 cursor-pointer">
                <FontAwesomeIcon icon={faStar} className="mr-2" />
                Bình luận
              </li>
            </ul>
          )}
        </div>


        </li>  

          <li className="p-4 hover:bg-gray-700 cursor-pointer">Tin tức</li>

          <li className="p-4 hover:bg-gray-700 cursor-pointer">Đơn hàng</li>

          <li className="p-4 hover:bg-gray-700 cursor-pointer">Kho</li>

          <li className="p-4 hover:bg-gray-700 cursor-pointer">Vận chuyển</li>

          <li className="p-4 hover:bg-gray-700 cursor-pointer">Khuyến mãi</li>
          
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;