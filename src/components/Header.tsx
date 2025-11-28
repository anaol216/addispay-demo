import React, { useState } from "react";
import Sidebar from "./Sidebar"; // Ensure the path is correct
import { AiFillSun } from "react-icons/ai";
import { CiDark } from "react-icons/ci";
import { LuSearch } from "react-icons/lu";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-4 sm:px-4 bg-[#f9fafb] z-50">
        {/* Logo: visible only on small & medium screens */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="focus:outline-none lg:hidden"
        >
          <img
            src="/logo.png"
            alt="AddisPay Logo"
            className="w-32"
          />
        </button>

        {/* Icons aligned right */}
        <div className="flex-1 flex justify-end items-center space-x-6 text-gray-700">
          {/* Search Icon */}
          <div className="flex bg-gray-200 rounded-md px-4 py-1 justify-between items-center">
            <input type="text" placeholder="search" className="hidden sm:block bg-transparent outline-none flex-1" />
            <LuSearch className="cursor-pointer ml-2" />
          </div>
          {/* Dark/Light Mode Toggle */}
          <AiFillSun className="cursor-pointer"/>
          <CiDark className="cursor-pointer hidden"/>
          {/* Account Icon - Links to AddisPay UAT Dashboard */}
        </div>
      </header>

      {/* Sidebar for small screens */}
      {isSidebarOpen && (
        <Sidebar />
      )}
    </>
  );
}
