import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-paper-white font-raleway text-text-main">
      <Navbar />
      <main className="mt-[90px]">
        {children || <Outlet />}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;