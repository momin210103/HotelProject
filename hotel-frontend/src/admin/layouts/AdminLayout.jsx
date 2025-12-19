import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { ADMIN_MENU } from '../config/adminConfig';

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Admin Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-white border-r border-gray-200 transition-all duration-300`}>
        <div className="h-20 flex items-center justify-center border-b border-gray-200">
          <h1 className={`text-xl font-bold text-[#3252DF] ${!sidebarOpen && 'hidden'}`}>Admin</h1>
        </div>
        <nav className="p-4 space-y-2">
          {ADMIN_MENU.map(item => (
            <Link
              key={item.href}
              to={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                location.pathname === item.href
                  ? 'bg-blue-100 text-[#3252DF] font-semibold'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {sidebarOpen && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-2xl text-gray-600 hover:text-gray-900"
          >
            ☰
          </button>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-[#3252DF] text-white font-semibold">
              A
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}