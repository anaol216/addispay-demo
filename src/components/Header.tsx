import React, { useState } from "react";
import Sidebar from "./Sidebar"; // Ensure the path is correct

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
          <button aria-label="Search" className="hover:text-[#239165] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
              viewBox="0 0 24 24">
              <circle cx={11} cy={11} r={8} />
              <line x1={21} y1={21} x2={16.65} y2={16.65} />
            </svg>
          </button>

          {/* Dark/Light Mode Toggle */}
          <button aria-label="Toggle Dark Mode" className="hover:text-[#239165] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
              viewBox="0 0 24 24">
              <circle cx={12} cy={12} r={5} />
              <line x1={12} y1={1} x2={12} y2={3} />
              <line x1={12} y1={21} x2={12} y2={23} />
              <line x1={4.22} y1={4.22} x2={5.64} y2={5.64} />
              <line x1={18.36} y1={18.36} x2={19.78} y2={19.78} />
              <line x1={1} y1={12} x2={3} y2={12} />
              <line x1={21} y1={12} x2={23} y2={12} />
              <line x1={4.22} y1={19.78} x2={5.64} y2={18.36} />
              <line x1={18.36} y1={5.64} x2={19.78} y2={4.22} />
            </svg>
          </button>

          {/* Account Icon - Links to AddisPay UAT Dashboard */}
          <a
            href="https://uat.dashboard.addispay.et/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Account"
            className="hover:text-[#239165] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
              viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-3-3.87" />
              <path d="M4 21v-2a4 4 0 013-3.87" />
              <circle cx={12} cy={7} r={4} />
            </svg>
          </a>
        </div>
      </header>

      {/* Sidebar for small screens */}
      {isSidebarOpen && (
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      )}
    </>
  );
}
