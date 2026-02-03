import React, { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
//import logo from '../assets/logo.png'; // Assuming you have a logo image

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const AdminSidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <NavLink to="/admin">
         
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          {/* SVG for closing sidebar */}
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.3333 1.5V0H0.666667V1.5H19.3333ZM19.3333 8.25V6.75H0.666667V8.25H19.3333ZM19.3333 15V13.5H0.666667V15H19.3333Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* End Sidebar Header */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* Sidebar Menu */}
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">MENU</h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {/* Menu Item Dashboard */}
              <li>
                <NavLink
                  to="/admin"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname === '/admin' && 'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  {/* SVG Icon for Dashboard */}
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.25 15.75H15.75V2.25H2.25V15.75ZM0.75 1.5C0.75 1.08579 1.08579 0.75 1.5 0.75H16.5C16.9142 0.75 17.25 1.08579 17.25 1.5V16.5C17.25 16.9142 16.9142 17.25 16.5 17.25H1.5C1.08579 17.25 0.75 16.9142 0.75 16.5V1.5Z" fill="#8A8A8A"/>
                  </svg>
                  Dashboard
                </NavLink>
              </li>
              {/* Menu Item Articles */}
              <li>
                <NavLink
                  to="/admin/articles"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('/admin/articles') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  {/* SVG Icon for Articles */}
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.75 2.25H2.25C1.83579 2.25 1.5 2.58579 1.5 3V15C1.5 15.4142 1.83579 15.75 2.25 15.75H15.75C16.1642 15.75 16.5 15.4142 16.5 15V3C16.5 2.58579 16.1642 2.25 15.75 2.25ZM2.25 1.5C1.41738 1.5 0.75 2.16738 0.75 3V15C0.75 15.8326 1.41738 16.5 2.25 16.5H15.75C16.5826 16.5 17.25 15.8326 17.25 15V3C17.25 2.16738 16.5826 1.5 15.75 1.5H2.25Z" fill="#8A8A8A"/>
                  </svg>
                  Articles
                </NavLink>
              </li>
              {/* Menu Item Podcasts */}
              <li>
                <NavLink
                  to="/admin/podcasts"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('/admin/podcasts') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  {/* SVG Icon for Podcasts */}
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="#8A8A8A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 9H12" stroke="#8A8A8A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 6V12" stroke="#8A8A8A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Podcasts
                </NavLink>
              </li>
              {/* Menu Item Videos */}
              <li>
                <NavLink
                  to="/admin/videos"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('/admin/videos') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  {/* SVG Icon for Videos */}
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 4.5C16.5 3.96957 16.2893 3.46086 15.9142 3.08579C15.5391 2.71072 15.0304 2.5 14.5 2.5H3.5C2.96957 2.5 2.46086 2.71072 2.08579 3.08579C1.71072 3.46086 1.5 3.96957 1.5 4.5V13.5C1.5 14.0304 1.71072 14.5391 2.08579 14.9142C2.46086 15.2893 2.96957 15.5 3.5 15.5H14.5C15.0304 15.5 15.5391 15.2893 15.9142 14.9142C16.2893 14.5391 16.5 14.0304 16.5 13.5V4.5Z" stroke="#8A8A8A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.5 4.5L1.5 13.5L16.5 13.5L16.5 4.5L1.5 4.5Z" fill="#8A8A8A" fillOpacity="0"/>
                    <path d="M10.5 9L7.5 7.5V10.5L10.5 9Z" stroke="#8A8A8A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Videos
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        {/* End Sidebar Menu */}
      </div>
    </aside>
  );
};

export default AdminSidebar;