import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import ProductList from "./ProductList";
import Footer from "./Footer";
import {Outlet} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <ProductList />
      <Footer />
      <Outlet />
    </div>
  );
};

export default App;
