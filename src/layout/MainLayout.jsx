import React from 'react';
import Navbar from '../page/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../page/Shared/Footer/Footer';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;