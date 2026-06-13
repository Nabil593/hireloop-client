import DashboardSidebar from "@/components/deshboard/DashboardSidebar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    // flex h-screen full viewport layout ensure korbe
    <div className="flex h-screen w-full bg-[#030303] overflow-hidden">
      {/* Left Column: Fixed Sidebar */}
      <DashboardSidebar />

      {/* Right Column: Dynamic Content Area */}
      <main className="flex-1 h-full overflow-y-auto bg-[#070707] p-6 md:p-8">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
