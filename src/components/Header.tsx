import { AiFillSun } from "react-icons/ai";
import { CiDark } from "react-icons/ci";
import { LuSearch } from "react-icons/lu";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  onToggleSidebar: () => void;
  onToggleTheme: () => void;
  isDarkMode: boolean;
}

export default function Header({ onToggleSidebar, onToggleTheme, isDarkMode }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-18 flex items-center justify-between px-4 sm:px-4 bg-[var(--bg-color)] border-b border-[var(--sidebar-border)] z-40 transition-colors duration-300">
        {/* Menu Icon and Logo for mobile - Now visible on small screens */}
        <div className="flex items-center space-x-3 lg:hidden">
          <MenuRoundedIcon 
            className="text-[var(--text-color)] cursor-pointer hover:text-[#239165]" 
            onClick={onToggleSidebar}
          />
          <a href="https://addispay.et/">
            <img src="/logo2.png" alt="AddisPay" className="h-8" />
          </a>
        </div>
        
        {/* Menu Icon only for desktop */}
        <div className="hidden lg:flex items-center">
          <MenuRoundedIcon 
            className="text-[var(--text-color)] cursor-pointer hover:text-[#239165]" 
            onClick={onToggleSidebar}
          />
        </div>
        
        {/* Icons aligned right */}
        <div className="flex flex-grow flex-1 justify-end items-center space-x-6 text-[var(--text-color)]">
          {/* Search Icon */}
          <div className="flex bg-gray-200 dark:bg-gray-600 rounded-md px-4 py-1 justify-between items-center transition-colors duration-300">
            <input 
              type="text" 
              placeholder="search" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="hidden sm:block bg-transparent outline-none flex-1 placeholder-gray-500 dark:placeholder-gray-400 text-[var(--text-color)] cursor-pointer" 
            />
            <LuSearch 
              className="cursor-pointer ml-2 text-gray-500 dark:text-gray-400 hover:text-[#239165] dark:hover:text-[#239165] transition-colors" 
              onClick={handleSearch}
            />
          </div>
          {/* Dark/Light Mode Toggle */}
          {isDarkMode ? (
            <AiFillSun className="cursor-pointer w-6 h-6 text-yellow-500 hover:text-yellow-400 transition-colors" onClick={onToggleTheme} title="Switch to Light Mode"/>
          ) : (
            <CiDark className="cursor-pointer w-6 h-6 text-gray-700 hover:text-gray-900 transition-colors" onClick={onToggleTheme} title="Switch to Dark Mode"/>
          )}
        </div>
      </header>
    </>
  );
}
