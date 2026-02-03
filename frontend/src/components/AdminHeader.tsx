import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'; // Assuming you have a logo image
import { useAuth } from '../context/AuthContext'; // Assuming AuthContext provides user info

interface HeaderProps {
  sidebarOpen: string | boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const AdminHeader = ({ sidebarOpen, setSidebarOpen }: HeaderProps) => {
  const { user, logoutUser } = useAuth();

  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* Hamburger Toggle BTN */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-full rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && '!w-full delay-300'
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-full rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && 'delay-400 !w-full'
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-full rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && '!w-full delay-500'
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && '!h-0 !delay-[0]'
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && '!h-0 !delay-200'
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* End Hamburger Toggle BTN */}

          <Link className="block flex-shrink-0 lg:hidden" to="/admin">
            <img src={Logo} alt="Logo" className="w-auto h-8" />
          </Link>
        </div>

        <div className="hidden sm:block">
          {/* Search Bar - Can add later if needed */}
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {/* Dark Mode Toggle - Can add later if needed */}
            {/* Notification Bell - Can add later if needed */}
            {/* Messages - Can add later if needed */}
          </ul>

          {/* User Area */}
          <div className="relative">
            <Link
              className="flex items-center gap-4"
              to="#"
              // onClick={() => setDropdownOpen(!dropdownOpen)} // For dropdown menu
            >
              <span className="hidden text-right lg:block">
                <span className="block text-sm font-medium text-black dark:text-white">
                  {user?.name || 'Admin'}
                </span>
                <span className="block text-xs">{user?.role || 'Role'}</span>
              </span>

              <span className="h-12 w-12 rounded-full">
                <img src={`https://ui-avatars.com/api/?name=${user?.name || 'Admin'}&background=random`} alt="User" />
              </span>
            </Link>

            {/* Dropdown Start */}
            {/*
            <div
              // ref={dropdownRef}
              onFocus={() => setDropdownOpen(true)}
              onBlur={() => setDropdownOpen(false)}
              className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
                dropdownOpen === true ? 'block' : 'hidden'
              }`}
            >
              <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
                <li>
                  <Link
                    to="/profile"
                    className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
                  >
                    My Profile
                  </Link>
                </li>
              </ul>
              <button
                onClick={logoutUser}
                className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                Log Out
              </button>
            </div>
            */}
            {/* Dropdown End */}
            <button onClick={logoutUser} className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
              Log Out
            </button>
          </div>
          {/* End User Area */}
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
