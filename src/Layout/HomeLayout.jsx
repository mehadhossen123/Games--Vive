import React, { use } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { AuthContext } from '../Provider/AuthContext';
import Loading from '../Component/Loading';


const HomeLayout = () => {
  const {loading}=use(AuthContext)
  if(loading){
    return<Loading></Loading>
  }
    return (
      <div className="flex flex-col min-h-screen max-w-6xl mx-auto">
        <header>
          <Navbar />
        </header>

        <main className="flex-1">
          <Outlet />
        </main>

        <footer className=''>
          <Footer />
        </footer>
      </div>
    );
};

export default HomeLayout;