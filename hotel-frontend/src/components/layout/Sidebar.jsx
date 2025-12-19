import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import dashboardIcon from '../../assets/icons/sidebar/dashboard.svg';
import bookingsIcon from '../../assets/icons/sidebar/bookings.svg';
import refundsIcon from '../../assets/icons/sidebar/refunds.svg';
import messageIcon from '../../assets/icons/sidebar/message.svg';
import helpIcon from '../../assets/icons/sidebar/help.svg';
import settingsIcon from '../../assets/icons/sidebar/settings.svg';

const menuItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: dashboardIcon,
    path: '/dashboard',
    section: 1,
  },
  {
    id: 'bookings',
    label: 'Bookings',
    icon: bookingsIcon,
    path: '/bookings',
    section: 1,
  },
  {
    id: 'refunds',
    label: 'Refunds',
    icon: refundsIcon,
    path: '/refunds',
    section: 1,
  },
  {
    id: 'message',
    label: 'Message',
    icon: messageIcon,
    path: '/message',
    section: 2,
  },
  {
    id: 'help',
    label: 'Help',
    icon: helpIcon,
    path: '/help',
    section: 2,
  },
  {
    id: 'settings',
    label: 'Setting',
    icon: settingsIcon,
    path: '/settings',
    section: 2,
  },
];

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const section1Items = menuItems.filter((item) => item.section === 1);
  const section2Items = menuItems.filter((item) => item.section === 2);

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full bg-white shadow-lg
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0 z-50' : '-translate-x-full z-0'}
          lg:translate-x-0 lg:static lg:z-auto lg:shadow-none
          w-[254px] flex flex-col
        `}
        aria-label="Sidebar navigation"
      >
        {/* Logo */}
        <div className="pt-10 px-8 pb-14 shrink-0">
          <Link
            to="/"
            className="block font-medium text-[36px] leading-none"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            onClick={onClose}
          >
            <span className="text-[#3252df]">Lanka</span>
            <span className="text-[#152c5b]">Stay.</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-8 space-y-16">
          {/* Section 1 */}
          <div className="space-y-8">
            {section1Items.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={onClose}
                  className={`
                    flex items-center gap-4 transition-colors
                    ${
                      active
                        ? 'text-[#4a85f6]'
                        : 'text-[#757575] hover:text-[#4a85f6]'
                    }
                  `}
                >
                  <img
                    src={item.icon}
                    alt=""
                    className="w-6 h-6 shrink-0"
                    style={{
                      filter: active
                        ? 'brightness(0) saturate(100%) invert(47%) sepia(96%) saturate(1467%) hue-rotate(201deg) brightness(100%) contrast(93%)'
                        : 'brightness(0) saturate(100%) invert(55%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(90%)',
                    }}
                  />
                  <span
                    className={`text-base tracking-[0.5px] leading-normal ${
                      active ? 'font-semibold' : 'font-normal'
                    }`}
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Section 2 */}
          <div className="space-y-8">
            {section2Items.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={onClose}
                  className={`
                    flex items-center gap-4 transition-colors
                    ${
                      active
                        ? 'text-[#4a85f6]'
                        : 'text-[#757575] hover:text-[#4a85f6]'
                    }
                  `}
                >
                  <img
                    src={item.icon}
                    alt=""
                    className="w-6 h-6 shrink-0"
                    style={{
                      filter: active
                        ? 'brightness(0) saturate(100%) invert(47%) sepia(96%) saturate(1467%) hue-rotate(201deg) brightness(100%) contrast(93%)'
                        : 'brightness(0) saturate(100%) invert(55%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(90%)',
                    }}
                  />
                  <span
                    className={`text-base tracking-[0.5px] leading-normal ${
                      active ? 'font-semibold' : 'font-normal'
                    }`}
                    style={{ fontFamily: 'Open Sans, sans-serif' }}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Close button for mobile */}
        <button
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 p-2 text-[#757575] hover:text-[#152c5b]"
          aria-label="Close sidebar"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </aside>
    </>
  );
}
