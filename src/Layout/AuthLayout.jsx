import React from "react";
import { Outlet } from "react-router";
import Footer from "../Component/Footer";

const AuthLayout = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-6xl mx-auto">
      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AuthLayout;
