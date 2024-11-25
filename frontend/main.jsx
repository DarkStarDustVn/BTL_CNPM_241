import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ErrorPage from './pages/ErrorPage.jsx';
import AdminDashBoard from './pages/AdminDashBoard.jsx';
import DashboardDetail from './pages/AdminDashBoardDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/admin',
    errorElement: <ErrorPage />,
    element: <AdminDashBoard  />,
    children: [
      {
        path: 'dashboard',
        element: <DashboardDetail />,
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
