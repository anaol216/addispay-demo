import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header'; // Assumes Header component exists
import Sidebar from './Sidebar'; // Assumes Sidebar component exists
import Footer from './Footer'; // Assumes Footer component exists

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
          <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        {/* Main Content Area - This is where your page content goes */}
        <main className="flex-1 pt-20 overflow-y-auto"> 
          <div className="rounded-lg min-h-[80vh]">
            <Outlet /> {/* Renders the current page component */}
          </div>
        </main>
        {/* Footer (Right Sidebar) */}
        <Footer />
      </div>
    </div>
  );
}