import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Mobile: show/hide
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // Desktop: full/mini
  
  // Theme state - check if user has manually set a preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Default to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Track if user has manually set theme (vs using system default)
  const [hasManualTheme, setHasManualTheme] = useState(() => {
    return localStorage.getItem('theme') !== null;
  });

  // Listen to system theme changes when no manual preference is set
  useEffect(() => {
    if (!hasManualTheme) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        setIsDarkMode(e.matches);
      };
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [hasManualTheme]);

  // Apply theme classes based on manual preference
  useEffect(() => {
    if (hasManualTheme) {
      // User has manually chosen a theme - apply explicit class
      if (isDarkMode) {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
      }
    } else {
      // No manual preference - remove classes to let system preference apply
      document.documentElement.classList.remove('dark', 'light');
    }
  }, [isDarkMode, hasManualTheme]);

  const handleToggleSidebar = () => {
    // On mobile: toggle open/close
    // On desktop: toggle collapsed/expanded
    setIsSidebarOpen(!isSidebarOpen);
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleToggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    setHasManualTheme(true);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden transition-colors duration-300">
      {/* Left Sidebar - Fixed, extends to top */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen}
        isCollapsed={isSidebarCollapsed}
      />
      
      {/* Main content wrapper with margin for fixed sidebar */}
      <div className={`flex flex-col flex-1 overflow-hidden transition-all duration-300 ${isSidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'}`}>
        {/* Header */}
        <Header 
          onToggleSidebar={handleToggleSidebar} 
          onToggleTheme={handleToggleTheme}
          isDarkMode={isDarkMode}
        />
        
        <div className="flex flex-1 overflow-hidden">
          {/* Main Content Area */}
          <main className="flex-1 pt-20 overflow-y-auto"> 
            <div className="rounded-lg min-h-[80vh]">
              <Outlet />
            </div>
            {/* Mobile Footer - appears after content */}
            <Footer isMobile={true} />
          </main>
          
          {/* Desktop Footer (Right Sidebar) */}
          <Footer isMobile={false} />
        </div>
      </div>
    </div>
  );
}
