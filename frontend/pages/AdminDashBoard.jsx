import Sidebar from "../pages/AdminSideBar.jsx";
import Header from "../pages/AdminHeader.jsx";
import AccountManagement from "../pages/AccountManagement.jsx";
import DashboardDetail from "../pages/AdminDashBoardDetails.jsx";

export default function AdminDashBoard() {
  
  return (
    <>
    <div className="flex bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-6">
          <AccountManagement/>
        </main>
      </div>
    </div>
    </>
  );

};