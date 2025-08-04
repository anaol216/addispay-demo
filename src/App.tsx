import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
// import RightSidebar from "./components/RightSidebar";
import OverviewGuide from "./pages/Overview";
import AdditionalResources from "./pages/AdditionalResources";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <Header />

        <div className="flex flex-1">
          {/* Left Sidebar - Only show on large screens */}
          <div className="hidden lg:block w-64 fixed pr-6 z-60">
            <Sidebar />
          </div>

          {/* Main Content - Flexible width */}
          <main className="flex-1 p-4 pt-20 pb-36 lg:pb-0">
            <Routes>
              <Route path="/overview" element={<OverviewGuide />} />
              <Route path="/additional-resources" element={<AdditionalResources />} />
            </Routes>
            {/* Right Sidebar - Only show on extra large screens */}
          
          </main>
          <div className="lg:ml-50 px-4 sm:px-6 lg:px-8">
            <Footer />
          </div>

        </div>
      </div>
    </Router>
  );
}
