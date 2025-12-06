import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SIDEBAR_SECTIONS } from "../constants/sidebarData";


export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Toggle button visible on mobile & tablets */}
      <div className="w-64 fixed pr-6 z-60 ">
        <div className="fixed top-4 left-4 z-60 flex-col overflow-y-auto">
          <button onClick={toggleSidebar}>
            <a href="https://addispay.et/">
            <img src="/logo.png" alt="AddisPay Logo" className="w-32" />
            </a>
          </button>
        </div>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 lg:mt-4 left-0 h-screen w-64 bg-white shadow-lg py-8 px-2 z-60 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:block`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Logo (hidden when sidebar toggle is active) */}
          
          <nav className="flex flex-col space-y-8 ml-4 mt-4">
            {SIDEBAR_SECTIONS.map(({ section, links }) => (
              <div key={section}>
                <h2 className="text-lg font-semibold text-[#239165] mb-4">
                  {section}
                </h2>
                <div className="flex flex-col space-y-5 ">
                  {links.map(({ label, to }) => {
                    const isEmphasized =
                      label === "Overview" || label === "Integration Guide";
                    return (
                      <Link
                        key={label}
                        to={to}
                        className={`text-gray-800 hove:text-white focus:bg-[#239165] focus:transparent-0.5 focus:text-white active:text-white hover:bg-[#239165] rounded-lg px-3 py-1 transition-colors block ${
                          isEmphasized
                            ? "text-base font-semibold"
                            : "text-sm font-medium"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>

          <div/>

          {/* FAQ footer link */}
          <div className="pl-6 pt-6 border-t border-gray-200 mt-8">
            <Link
              to="/faq"
              className="text-sm font-semibold italic text-[#239165] hover:underline block"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile & tablet when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      </div>
    </>
  );
}
