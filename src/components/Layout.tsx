import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header'; // Assumes Header component exists
import Sidebar from './Sidebar'; // Assumes Sidebar component exists
import Footer from './Footer'; // Assumes Footer component exists

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />
      
      <div className="flex flex-1">
        {/* Left Sidebar */}
          <Sidebar />
        {/* Main Content Area - This is where your page content goes */}
        <main className="flex-1 pt-20 "> 
          <div className="rounded-lg min-h-[80vh]">
            <Outlet /> {/* Renders the current page component */}
          </div>
        </main>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}