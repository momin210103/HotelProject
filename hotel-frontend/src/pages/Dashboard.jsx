import React, { useState } from 'react';
import { usersData } from '../data/userData';
import { userBookingsData } from '../data/userBookingsData';

// Tooltip Component - Portal style to avoid overflow issues
function Tooltip({ text, children }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      top: rect.top - 10,
      left: rect.left + rect.width / 2,
    });
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative inline-block"
      >
        {children}
      </div>
      {showTooltip && (
        <div
          className="fixed px-3 py-1 bg-[#0A0A0A] text-white text-xs rounded-md whitespace-nowrap z-[9999] pointer-events-none"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
            transform: 'translate(-50%, -100%)',
          }}
        >
          {text}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-[#0A0A0A]"></div>
        </div>
      )}
    </>
  );
}

export default function Dashboard() {
  // Simulate logged-in user (in production, get from auth context)
  const currentUser = usersData[1]; // John Wick
  const userBookings = userBookingsData.filter(b => b.userId === currentUser.id);
  
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter bookings
  const filteredBookings = userBookings.filter(booking => {
    const matchesStatus = filterStatus === 'all' || booking.status === filterStatus;
    const matchesType = filterType === 'all' || 
      (filterType === 'booking' && booking.status === 'confirmed') ||
      (filterType === 'refund' && booking.status === 'cancelled');
    const matchesSearch = booking.hotelName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.hotelLocation.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesStatus && matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f5f5f5] pb-8">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 md:px-8 py-4 sm:py-6">
        <div className="flex items-center justify-between flex-col sm:flex-row gap-4 sm:gap-0">
          <div>
            <h1
              className="text-xl font-semibold text-[#0A0A0A] mb-1"
              style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '0.15px' }}
            >
              Hello, {currentUser.role}
            </h1>
            <p
              className="text-sm text-[#757575]"
              style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '0.25px' }}
            >
              Have a nice day
            </p>
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-6">
            <button className="relative">
              <svg className="w-6 h-6 text-[#404040]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/>
              </svg>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="h-12 w-px bg-gray-200"></div>
            
            <div className="flex items-center gap-4 cursor-pointer">
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-11 h-11 rounded-full object-cover"
              />
              <div>
                <p
                  className="text-base font-semibold text-[#0A0A0A]"
                  style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '0.5px' }}
                >
                  {currentUser.name}
                </p>
                <p
                  className="text-xs text-[#0A0A0A]"
                  style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '0.4px' }}
                >
                  {currentUser.role}
                </p>
              </div>
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 md:px-8 pt-4 sm:pt-6">
        {/* Username Title */}
        <h2
          className="text-xl sm:text-2xl font-bold text-[#4a85f6] mb-4 sm:mb-6"
          style={{ fontFamily: 'Open Sans, sans-serif' }}
        >
          {currentUser.name}
        </h2>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl px-3 sm:px-5 py-2 sm:py-3 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-4 shadow-sm">
          <svg className="w-4 h-4 text-[#404040] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 outline-none text-sm sm:text-base text-[#404040]"
            style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '0.5px' }}
          />
          <button className="hidden sm:flex text-sm font-semibold text-[#404040] items-center gap-2">
            Sort by
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Filters and Actions */}
        <div className="flex items-center justify-between mb-4 sm:mb-6 flex-wrap gap-3 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto pb-2 sm:pb-0">
            {/* Filter Icons */}
            <Tooltip text="Table View">
              <button className="w-[45px] sm:w-[53px] h-[45px] sm:h-[53px] bg-white rounded-full flex flex-shrink-0 items-center justify-center shadow-sm border-2 border-transparent hover:border-[#4a85f6] hover:cursor-pointer">
                <svg className="w-5 sm:w-6 h-5 sm:h-6 text-[#4a85f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </button>
            </Tooltip>
            <Tooltip text="Grid View">
              <button className="w-[45px] sm:w-[53px] h-[45px] sm:h-[53px] bg-white rounded-full flex flex-shrink-0 items-center justify-center shadow-sm border-2 border-transparent hover:border-[#4a85f6] cursor-pointer">
                <svg className="w-5 sm:w-6 h-5 sm:h-6 text-[#4a85f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
            </Tooltip>
            <Tooltip text="Compact View">
              <button className="w-[45px] sm:w-[53px] h-[45px] sm:h-[53px] bg-white rounded-full flex flex-shrink-0 items-center justify-center shadow-sm border-2 border-transparent hover:border-[#4a85f6] hover:cursor-pointer">
                <svg className="w-5 sm:w-6 h-5 sm:h-6 text-[#4a85f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
              </button>
            </Tooltip>
            <Tooltip text="Export">
              <button className="w-[45px] sm:w-[53px] h-[45px] sm:h-[53px] bg-white rounded-full flex flex-shrink-0 items-center justify-center shadow-sm border-2 border-transparent hover:border-[#4a85f6] hover:cursor-pointer">
                <svg className="w-5 sm:w-6 h-5 sm:h-6 text-[#4a85f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </button>
            </Tooltip>
            <Tooltip text="Delete">
              <button className="w-[45px] sm:w-[53px] h-[45px] sm:h-[53px] bg-white rounded-full flex flex-shrink-0 items-center justify-center shadow-sm border-2 border-transparent hover:border-[#4a85f6] hover:cursor-pointer">
                <svg className="w-5 sm:w-6 h-5 sm:h-6 text-[#4a85f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </Tooltip>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
            {/* Dropdown Filters */}
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="bg-white rounded-lg px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-base text-[#464a53] border border-gray-200 outline-none cursor-pointer flex-1 sm:flex-none"
              style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '13px', letterSpacing: '0.5px' }}
            >
              <option value="all">All Types</option>
              <option value="booking">Booking</option>
              <option value="refund">Refund</option>
            </select>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-white rounded-lg px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-base text-[#464a53] border border-gray-200 outline-none cursor-pointer flex-1 sm:flex-none"
              style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '13px', letterSpacing: '0.5px' }}
            >
              <option value="all">All Status</option>
              <option value="confirmed">Confirmed</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>

            {/* Add New Button */}
            <button className="w-[45px] sm:w-[53px] h-[45px] sm:h-[53px] bg-[#4a85f6] rounded-full flex flex-shrink-0 items-center justify-center text-white text-xl sm:text-2xl font-extrabold shadow-lg hover:shadow-xl transition hover:cursor-pointer">
              +
            </button>
          </div>
        </div>

        {/* Booking List Section */}
        <div className="mb-4">
          <h3
            className="text-base font-normal text-[#464e5f] mb-1"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            Booking List
          </h3>
          <p
            className="text-xs text-[#464e5f] opacity-40"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            {filteredBookings.length} total booking{filteredBookings.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Bookings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {filteredBookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white rounded-lg border-2 border-[#bcc3d1] p-3 sm:p-4 hover:shadow-lg transition"
            >
              {/* Hotel Image */}
              <div className="relative mb-3 sm:mb-4 rounded-2xl overflow-hidden h-[220px] sm:h-[280px] md:h-[330px]">
                <img
                  src={booking.hotelImage}
                  alt={booking.hotelName}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 right-0 bg-[#3252df] text-white px-3 py-1 rounded-bl-2xl rounded-tr-2xl">
                  <span
                    className="text-sm font-medium"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    ${booking.pricePerNight}
                  </span>
                  <span
                    className="text-sm font-light"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {' '}per night
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4
                    className="text-xl font-normal mb-1"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {booking.hotelName}
                  </h4>
                  <p
                    className="text-sm font-light"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {booking.hotelLocation}
                  </p>
                </div>
              </div>

              {/* Booking Details */}
              <div
                className="space-y-3 text-[#152c5b] text-base"
                style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.7' }}
              >
                <p>
                  {new Date(booking.checkIn).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })} - {new Date(booking.checkOut).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}
                </p>
                <p>{String(booking.nights).padStart(2, '0')} Days</p>
                <p className="text-sm">{booking.address}</p>
                <p>Initial Payment ${booking.initialPayment}</p>
                <p className="font-medium">Total Payment ${booking.totalAmount}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 sm:gap-3 mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
                <Tooltip text="Edit Booking">
                  <button className="flex-1 flex items-center justify-center gap-2 text-blue-600 hover:bg-blue-50 py-2 rounded-lg transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                </Tooltip>
                <Tooltip text="Cancel Booking">
                  <button className="flex-1 flex items-center justify-center gap-2 text-red-600 hover:bg-red-50 py-2 rounded-lg transition">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </Tooltip>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredBookings.length === 0 && (
          <div className="text-center py-8 sm:py-12 md:py-16">
            <svg className="w-12 sm:w-16 h-12 sm:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="text-gray-600 text-base sm:text-lg">No bookings found</p>
            <p className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2">Try adjusting your filters or search query</p>
          </div>
        )}
      </div>
    </div>
  );
}
