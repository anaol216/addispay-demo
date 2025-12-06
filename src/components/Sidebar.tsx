import { Link } from "react-router-dom";
import { SIDEBAR_SECTIONS } from "../constants/sidebarData";

interface SidebarLinkProps {
  label: string;
  to: string;
  onClick: () => void;
  isCollapsed?: boolean;
}

const SidebarLink = ({ label, to, onClick, isCollapsed }: SidebarLinkProps) => {
  const isEmphasized = label === "Overview" || label === "Integration Guide";
  const firstLetter = label.charAt(0).toUpperCase();
  
  return (
    <Link
      to={to}
      className={`
        block rounded-lg transition-colors
        text-gray-800 hover:text-white hover:bg-[#239165]
        focus:bg-[#239165] focus:text-white
        active:text-white
        ${isCollapsed ? 'px-2 py-2 text-center' : 'px-3 py-1'}
        ${isEmphasized ? "text-base font-semibold" : "text-sm font-medium"}
      `}
      onClick={onClick}
      title={isCollapsed ? label : undefined}
    >
      {isCollapsed ? firstLetter : label}
    </Link>
  );
};

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isCollapsed: boolean;
}

export default function Sidebar({ isOpen, setIsOpen, isCollapsed }: SidebarProps) {
  return (
    <>
      {/* Desktop Sidebar - Fixed, extends to top with logo */}
      <div className={`
        hidden lg:block bg-white shadow-lg h-screen fixed top-0 left-0 transition-all duration-300 z-50 flex flex-col
        ${isCollapsed ? 'w-20' : 'w-64'}
      `}>
         {/* Logo at the very top */}
         <div className={`bg-white border-b border-gray-200 ${isCollapsed ? 'p-4' : 'p-6'}`}>
            <a href="https://addispay.et/" className="block">
              {isCollapsed ? (
                <img src="/logo.png" alt="AP" className="w-12 h-12 object-contain mx-auto" />
              ) : (
                <img src="/logo.png" alt="AddisPay Logo" className="w-32" />
              )}
            </a>
         </div>
         
         {/* Sidebar content - scrollable */}
         <div className={`flex-1 overflow-y-auto ${isCollapsed ? 'px-2 py-4' : 'px-6 py-4'}`}>
           <SidebarContent onLinkClick={() => {}} isCollapsed={isCollapsed} />
         </div>
         
         {/* FAQ at the absolute bottom */}
         <div className={`border-t border-gray-200 ${isCollapsed ? 'p-4 text-center' : 'p-6'}`}>
           <Link
             to="https://addispay.et/faq"
             className="text-sm font-semibold italic text-[#239165] hover:underline block"
             title={isCollapsed ? "FAQ" : undefined}
           >
             {isCollapsed ? "?" : "FAQ"}
           </Link>
         </div>
      </div>

      {/* Mobile Sidebar (Off-canvas) */}
      <div 
        className={`fixed inset-y-0 left-0 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        w-64 bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out lg:hidden flex flex-col`}
      >
         <div className="p-4">
            <a href="https://addispay.et/" className="block mb-8">
              <img src="/logo.png" alt="AddisPay Logo" className="w-32" />
            </a>
         </div>
         
         {/* Mobile content - scrollable */}
         <div className="flex-1 overflow-y-auto px-4">
           <SidebarContent onLinkClick={() => setIsOpen(false)} isCollapsed={false} />
         </div>
         
         {/* FAQ at bottom for mobile */}
         <div className="border-t border-gray-200 p-4">
           <Link
             to="https://addispay.et/faq"
             className="text-sm font-semibold italic text-[#239165] hover:underline block"
             onClick={() => setIsOpen(false)}
           >
             FAQ
           </Link>
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

const SidebarContent = ({ onLinkClick, isCollapsed }: { onLinkClick: () => void; isCollapsed: boolean }) => (
  <nav className={`flex flex-col ${isCollapsed ? 'space-y-4' : 'space-y-6'}`}>
    {SIDEBAR_SECTIONS.map(({ section, links }) => (
      <div key={section}>
        {!isCollapsed && (
          <h2 className="text-lg font-semibold text-[#239165] mb-4">
            {section}
          </h2>
        )}
        <div className="flex flex-col space-y-2">
          {links.map(({ label, to }) => (
            <SidebarLink
              key={label}
              label={label}
              to={to}
              onClick={onLinkClick}
              isCollapsed={isCollapsed}
            />
          ))}
        </div>
      </div>
    ))}
  </nav>
);