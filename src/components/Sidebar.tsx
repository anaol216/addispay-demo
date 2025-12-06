import { Link } from "react-router-dom";
import { SIDEBAR_SECTIONS } from "../constants/sidebarData";

interface SidebarLinkProps {
  label: string;
  to: string;
  onClick: () => void;
}

const SidebarLink = ({ label, to, onClick }: SidebarLinkProps) => {
  const isEmphasized = label === "Overview" || label === "Integration Guide";
  
  return (
    <Link
      to={to}
      className={`
        block rounded-lg px-3 py-1 transition-colors
        text-gray-800 hover:text-white hover:bg-[#239165]
        focus:bg-[#239165] focus:text-white
        active:text-white
        ${isEmphasized ? "text-base font-semibold" : "text-sm font-medium"}
      `}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <>
      {/* Desktop Sidebar - Always visible on large screens */}
      <div className="hidden lg:block w-64 pr-6 py-4 bg-white shadow-lg h-screen sticky top-0 overflow-y-auto">
         <div className="mb-8">
            <a href="https://addispay.et/">
              <img src="/logo.png" alt="AddisPay Logo" className="w-32" />
            </a>
         </div>
         
         <SidebarContent onLinkClick={() => {}} />
      </div>

      {/* Mobile Sidebar (Off-canvas) */}
      <div 
        className={`fixed inset-y-0 left-0 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        w-64 bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto`}
      >
         <div className="p-4">
            <a href="https://addispay.et/" className="block mb-8">
              <img src="/logo.png" alt="AddisPay Logo" className="w-32" />
            </a>
            <SidebarContent onLinkClick={() => setIsOpen(false)} />
         </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

const SidebarContent = ({ onLinkClick }: { onLinkClick: () => void }) => (
  <nav className="flex flex-col space-y-6">
    {SIDEBAR_SECTIONS.map(({ section, links }) => (
      <div key={section}>
        <h2 className="text-lg font-semibold text-[#239165] mb-4">
          {section}
        </h2>
        <div className="flex flex-col space-y-2">
          {links.map(({ label, to }) => (
            <SidebarLink
              key={label}
              label={label}
              to={to}
              onClick={onLinkClick}
            />
          ))}
        </div>
      </div>
    ))}

    {/* FAQ footer link */}
    <div className="pt-6 border-t border-gray-200 mt-auto">
      <Link
        to="https://addispay.et/faq"
        className="text-sm font-semibold italic text-[#239165] hover:underline block"
        onClick={onLinkClick}
      >
        FAQ
      </Link>
    </div>
  </nav>
);