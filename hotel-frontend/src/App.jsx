import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Sidebar from './components/layout/Sidebar';
import MenuButton from './components/layout/MenuButton';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import HotelDetails from './features/HotelDetails/pages/HotelDetails';
import Dashboard from './pages/Dashboard';
import Bookings from './pages/Bookings';
import Refunds from './pages/Refunds';
import Message from './pages/Message';
import Help from './pages/Help';
import Settings from './pages/Settings';
import AdminLayout from './admin/layouts/AdminLayout';
import AdminDashboard from './admin/pages/AdminDashboard';
import AdminHotels from './admin/pages/AdminHotels';

// Routes that should show the sidebar instead of navbar/footer
const sidebarRoutes = ['/dashboard', '/bookings', '/refunds', '/message', '/help', '/settings'];

function AppContent() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const showSidebar = sidebarRoutes.includes(location.pathname);
  const isAdminRoute = location.pathname.startsWith('/admin');

  // Admin routes get their own layout
  if (isAdminRoute) {
    return (
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="hotels" element={<AdminHotels />} />
        </Route>
      </Routes>
    );
  }

  return (
    <div className="min-h-screen w-full flex bg-white">
      {showSidebar ? (
        <>
          {/* Sidebar Layout */}
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          <div className="flex-1 flex flex-col min-h-screen">
            {/* Top bar with menu button for mobile */}
            <div className="lg:hidden sticky top-0 z-30 bg-white border-b border-gray-200 px-4 py-3 flex items-center">
              <MenuButton onClick={() => setSidebarOpen(true)} />
              <span className="ml-4 font-medium text-xl text-[#152c5b]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <span className="text-[#3252df]">Lanka</span>Stay.
              </span>
            </div>
            <main className="flex-1 bg-gray-50">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/refunds" element={<Refunds />} />
                <Route path="/message" element={<Message />} />
                <Route path="/help" element={<Help />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
          </div>
        </>
      ) : (
        <>
          {/* Standard Layout with Navbar and Footer */}
          <div className="flex-1 flex flex-col">
            <Navbar />
            <main className="flex-1 pt-20">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/hotel/:id" element={<HotelDetails />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

function App() {
  return <AppContent />;
}

export default App;
