import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Mobile: show/hide
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // Desktop: full/mini
  const [isDarkMode, setIsDarkMode] = useState(false); // Theme: dark/light

  const handleToggleSidebar = () => {
    // On mobile: toggle open/close
    // On desktop: toggle collapsed/expanded
    setIsSidebarOpen(!isSidebarOpen);
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Toggle dark class on html element
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Left Sidebar - Fixed, extends to top */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen}
        isCollapsed={isSidebarCollapsed}
      />
      
      {/* Main content wrapper with margin for fixed sidebar */}
      <div className={`flex flex-col flex-1 overflow-hidden transition-all duration-300 ${isSidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'}`}>
        {/* Header */}
        <Header onToggleSidebar={handleToggleSidebar} onToggleTheme={handleToggleTheme} isDarkMode={isDarkMode} />
        
        <div className="flex flex-1 overflow-hidden">
          {/* Main Content Area */}
          <main className="flex-1 pt-20 overflow-y-auto"> 
            <div className="rounded-lg min-h-[80vh]">
              <Outlet />
            </div>
          </main>
          
          {/* Footer (Right Sidebar) */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
