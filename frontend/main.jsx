import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ErrorPage from './pages/ErrorPage.jsx';
import RootLayout from './pages/RootLayout.jsx';

//pages
import DashboardDetail from './pages/AdminDashBoardDetails.jsx';
import ProductsTable from './pages/ProductsTable.jsx';
import AccountManagement from './pages/AccountManagement.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
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
