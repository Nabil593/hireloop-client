import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="min-h-full ">{children}</main>
      <Footer />
    </div>
  );
};

export default AuthLayout;
