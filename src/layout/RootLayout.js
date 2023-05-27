import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const RootLayout = () => (
  <>
    <Header />
    <main className="main-wrapper">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default RootLayout;
