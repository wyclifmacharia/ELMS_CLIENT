import { Outlet } from "react-router";
import Navbar from "../../../components/nav/Navbar";
import { AdminDrawer } from "../aside/AdminDrawer";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const AdminDashboard = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* TOP NAV */}
      <Navbar />

      {/* HEADER SECTION */}
      <div className="flex items-center px-4 py-4 bg-gray-800 shadow-md">
        <button
          className="mr-4 text-white text-2xl lg:hidden"
          onClick={handleDrawerToggle}
        >
          {drawerOpen ? <IoMdClose /> : <FaBars />}
        </button>

        <h1 className="text-white text-xl font-semibold tracking-wide">
          Welcome to your Admin Dashboard
        </h1>
      </div>

      {/* CONTENT WRAPPER */}
      <div className="flex flex-1">
        {/* SIDEBAR */}
        <aside
          className={`
            fixed top-0 left-0 z-40 h-full w-64 bg-gray-700 shadow-xl
            transform transition-transform duration-300 ease-in-out
            ${drawerOpen ? "translate-x-0" : "-translate-x-full"}
            lg:static lg:translate-x-0 lg:block
          `}
        >
          <div className="relative h-full">
            {/* Close button mobile */}
            <button
              className="absolute top-4 right-4 text-white text-3xl lg:hidden"
              onClick={handleDrawerToggle}
            >
              <IoMdClose />
            </button>

            <div className="pt-20 lg:pt-8">
              <AdminDrawer />
            </div>
          </div>
        </aside>

        {/* MAIN AREA */}
        <main className="flex-1 bg-gray-50 p-6 min-h-screen transition-all">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
