import { AiFillSun } from "react-icons/ai";
import { CiDark } from "react-icons/ci";
import { LuSearch } from "react-icons/lu";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

interface HeaderProps {
  onToggleSidebar: () => void;
  onToggleTheme: () => void;
  isDarkMode: boolean;
}

export default function Header({ onToggleSidebar, onToggleTheme, isDarkMode }: HeaderProps) {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-18 flex items-center justify-between px-4 sm:px-4 bg-[#f9fafb] z-40">
        {/* Menu Icon and Logo for mobile - Now visible on small screens */}
        <div className="flex items-center space-x-3 lg:hidden">
          <MenuRoundedIcon 
            className="text-gray-700 cursor-pointer hover:text-[#239165]" 
            onClick={onToggleSidebar}
          />
          <a href="https://addispay.et/">
            <img src="/logo2.png" alt="AddisPay" className="h-8" />
          </a>
        </div>
        
        {/* Menu Icon only for desktop */}
        <div className="hidden lg:flex items-center">
          <MenuRoundedIcon 
            className="text-gray-700 cursor-pointer hover:text-[#239165]" 
            onClick={onToggleSidebar}
          />
        </div>
        
        {/* Icons aligned right */}
        <div className="flex flex-grow flex-1 justify-end items-center space-x-6 text-gray-700">
          {/* Search Icon */}
          <div className="flex bg-gray-200 rounded-md px-4 py-1 justify-between items-center">
            <input type="text" placeholder="search" className="hidden sm:block bg-transparent outline-none flex-1" />
            <LuSearch className="cursor-pointer ml-2" />
          </div>
          {/* Dark/Light Mode Toggle */}
          {isDarkMode ? (
            <AiFillSun className="cursor-pointer" onClick={onToggleTheme} title="Switch to Light Mode"/>
          ) : (
            <CiDark className="cursor-pointer" onClick={onToggleTheme} title="Switch to Dark Mode"/>
          )}
        </div>
      </header>
    </>
  );
}
