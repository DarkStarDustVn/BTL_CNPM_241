import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ErrorPage from './pages/admin/errorPage/ErrorPage.jsx';
import RootLayout from './pages/RootLayout.jsx';

//pages
import DashboardDetail from './pages/admin/dashboard/AdminDashBoardDetails.jsx';
import ProductsTable from './pages/admin/productTable/ProductsTable.jsx';
import AccountManagement from './pages/admin/accountManagement/AccountManagement.jsx';
import BaiViet from './pages/admin/baiviet/baiviet.jsx';
import OrderManagement from './pages/admin/quanlydonhang/quanlydonhang.jsx';
import KhuyenMai from './pages/admin/khuyenmai/khuyenmai.jsx';
import VanChuyen from './pages/admin/vanchuyen/vanchuyen.jsx';
import Kho from './pages/admin/Kho/kho.jsx';
import BookDetail from './pages/admin/Kho/bookDetail.jsx';
import HomeLayout from './pages/Home/HomeLayout.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
      path: '/admin',
      element: <RootLayout />,
      children: [
        {
          path: 'dashboard',
          element: <DashboardDetail />,
        },
        {
          path: 'products',
          element: <ProductsTable/>,
        },
        {
          path: 'account',
          element: <AccountManagement />,
        },
        {
          path: 'baiviet',
          element: <BaiViet />,
        },
        {
          path: 'quanlydonhang',
          element: <OrderManagement />,
        },
        {
          path: 'khuyenmai',
          element: <KhuyenMai />,
        },
        {
          path: 'vanchuyen',
          element: <VanChuyen />,
        },
        {
          path: 'kho',
          element: <Kho />,
        },
        {
          path: 'chi-tiet-sach',
          element: <BookDetail />,
        },
      ],
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
