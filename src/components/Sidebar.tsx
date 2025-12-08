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
  
  return (
    <Link
      to={to}
      className={`
        block rounded-lg transition-colors
        text-gray-600 dark:text-gray-600 hover:text-white hover:bg-[#239165] dark:hover:bg-[#239165]
        focus:bg-[#239165] focus:text-white
        active:text-white
        ${isCollapsed ? 'px-2 py-2 text-center' : 'px-3 py-1'}
        ${isEmphasized ? "text-base " : "text-sm font-medium"}
      `}
      onClick={onClick}
      title={isCollapsed ? label : undefined}
    >
      {label}
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
        hidden lg:flex lg:flex-col bg-[var(--sidebar-bg)] shadow-lg h-screen fixed top-0 left-0 transition-all duration-300 z-50 border-r border-[var(--sidebar-border)]
        ${isCollapsed ? 'w-20' : 'w-64'}
      `}>
         {/* Logo at the very top */}
         <div className={`bg-[var(--sidebar-bg)]  border-[var(--sidebar-border)] ${isCollapsed ? 'p-4' : 'p-6'}`}>
            <a href="https://addispay.et/" className="block">
              {isCollapsed ? (
                <img src="/logo.png" alt="AP" className="w-12 h-12 object-contain mx-auto" />
              ) : (
                <img src="/logo.png" alt="AddisPay Logo" className="w-32" />
              )}
            </a>
         </div>
         
         {/* Sidebar content - scrollable */}
         <div className={`flex-1 overflow-y-auto custom-scrollbar ${isCollapsed ? 'px-2 py-4' : 'px-6 py-4'}`}>
           <SidebarContent onLinkClick={() => {}} isCollapsed={isCollapsed} />
         </div>
         
         {/* FAQ fixed at the bottom for desktop */}
         <div className={`border-t border-[var(--sidebar-border)] ${isCollapsed ? 'p-4 text-center' : 'p-6'}`}>
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
        w-64 bg-[var(--sidebar-bg)] shadow-lg z-50 transition-transform duration-300 ease-in-out lg:hidden flex flex-col`}
      >
         <div className="p-4 border-b border-[var(--sidebar-border)]">
            <a href="https://addispay.et/" className="block">
              <img src="/logo.png" alt="AddisPay Logo" className="w-32" />
            </a>
         </div>
         
         {/* Mobile content - scrollable */}
         <div className="flex-1 overflow-y-auto px-4 py-4 custom-scrollbar">
           <SidebarContent onLinkClick={() => setIsOpen(false)} isCollapsed={false} />
           
           {/* FAQ at the end of content for mobile */}
           <div className="pt-6 border-t border-[var(--sidebar-border)] mt-6">
             <Link
               to="https://addispay.et/faq"
               className="text-sm font-semibold italic text-[#239165] hover:underline block"
               onClick={() => setIsOpen(false)}
             >
               FAQ
             </Link>
           </div>
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