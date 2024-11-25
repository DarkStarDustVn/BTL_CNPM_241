// components/AccountManagement.js
import React from "react";

const AccountManagement = () => {
  const accounts = [
    { id: 1, name: "Admin", email: "doantongthehje@gmail.com", phone: "0364424396", level: "Admin", time: "2020-06-06 12:48:53" },
    { id: 2, name: "Nhân Viên", email: "nhanvien@gmail.com", phone: "012345678", level: "Nhân viên", time: "2020-06-06 12:48:53" },
  ];

  return (
    <div className="bg-white shadow-md rounded p-6">
      <div className="mb-4">
        <h1 className="text-xl font-semibold">Quản lý tài khoản</h1>
      </div>
      <div className="mb-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Thêm mới +</button>
      </div>
      
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="border px-4 py-2">STT</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">SDT</th>
            <th className="border px-4 py-2">Level</th>
            <th className="border px-4 py-2">Time</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account, index) => (
            <tr key={account.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{account.name}</td>
              <td className="border px-4 py-2">{account.email}</td>
              <td className="border px-4 py-2">{account.phone}</td>
              <td className="border px-4 py-2">
                <span className={`px-2 py-1 rounded ${account.level === "Admin" ? "bg-green-500 text-white" : "bg-gray-400 text-white"}`}>
                  {account.level}
                </span>
              </td>
              <td className="border px-4 py-2">{account.time}</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountManagement;
