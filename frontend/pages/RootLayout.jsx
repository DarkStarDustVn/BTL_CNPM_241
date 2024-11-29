import Sidebar from "./AdminSideBar.jsx";
import Header from "./AdminHeader.jsx";
import AccountManagement from "./AccountManagement.jsx";
import DashboardDetail from "./AdminDashBoardDetails.jsx";
import ProductsTable from "./ProductsTable.jsx";
import { Outlet } from "react-router";
export default function AdminDashBoard() {
  
  return (
    <>
    <div className="flex h-full bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
    </>
  );

};