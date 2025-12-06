import { AiFillSun } from "react-icons/ai";
import { CiDark } from "react-icons/ci";
import { LuSearch } from "react-icons/lu";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

interface HeaderProps {
  onToggleSidebar: () => void;
}

export default function Header({ onToggleSidebar }: HeaderProps) {

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-18 flex items-center justify-between px-4 sm:px-4 bg-[#f9fafb] z-50">
        {/* Logo: visible only on small & medium screens */}
        {/* Icons aligned right */}
        <div className="flex flex-grow flex-1 justify-end items-center space-x-6 text-gray-700">
          {/* Search Icon */}
          <div className="flex bg-gray-200 rounded-md px-4 py-1 justify-between items-center">
            <input type="text" placeholder="search" className="hidden sm:block bg-transparent outline-none flex-1" />
            <LuSearch className="cursor-pointer ml-2" />
          </div>
          {/* Dark/Light Mode Toggle */}
          <AiFillSun className="cursor-pointer"/>
          <CiDark className="cursor-pointer hidden"/>
          {/* Menu Icon - Toggle Sidebar on Mobile */}
            <MenuRoundedIcon 
              className="lg:hidden text-green text-center cursor-pointer" 
              onClick={onToggleSidebar}
            />
        </div>
      </header>
    </>
  );
}
