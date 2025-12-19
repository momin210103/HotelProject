import React, { useState } from 'react';

export default function BookingBar() {
  const [person, setPerson] = useState(2);

  return (
    <section className="w-full py-8">
      <div className="max-w-full px-8">
        <div className="bg-[#eaf1ff] rounded-[42px] w-full flex flex-col md:flex-row md:h-[117px] items-stretch md:items-center justify-center gap-4 md:gap-6 px-5 sm:px-6 md:px-8 py-5 md:py-0">
        
        {/* Check Available */}
        <div className="bg-white rounded-xl h-14 md:h-[60px] px-5 md:px-6 flex items-center gap-4 md:gap-5 shadow-[0px_4px_5px_0px_rgba(0,0,0,0.12)] w-full md:min-w-[211px]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#1e1e1e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 2V6" stroke="#1e1e1e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 2V6" stroke="#1e1e1e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 10H21" stroke="#1e1e1e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-[#1e1e1e] text-[15px] sm:text-[16px] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
            Check Available
          </span>
        </div>

        {/* Person Selector */}
        <div className="bg-white rounded-xl h-14 md:h-[60px] px-5 md:px-6 flex items-center gap-4 md:gap-5 shadow-[0px_4px_5px_0px_rgba(0,0,0,0.12)] w-full md:min-w-[216px]">
          <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12C11.7614 12 14 9.76142 14 7C14 4.23858 11.7614 2 9 2C6.23858 2 4 4.23858 4 7C4 9.76142 6.23858 12 9 12Z" stroke="#1e1e1e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17 22C17 18.134 13.866 15 10 15H8C4.13401 15 1 18.134 1 22" stroke="#1e1e1e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-[#1e1e1e] text-[15px] sm:text-[16px] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
            Person
          </span>
          <span className="text-black text-[15px] sm:text-[16px] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
            {person}
          </span>
          <button 
            onClick={() => setPerson(prev => Math.max(1, prev - 1))}
            className="hover:opacity-70 transition"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-90">
              <path d="M2 6L6 2L10 6" stroke="#1e1e1e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Select Location */}
        <div className="bg-white rounded-xl h-14 md:h-[60px] px-5 md:px-6 flex items-center gap-4 md:gap-5 shadow-[0px_4px_5px_0px_rgba(0,0,0,0.12)] w-full md:min-w-[212px]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="#1e1e1e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="9" r="2.5" stroke="#1e1e1e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-[#1e1e1e] text-[15px] sm:text-[16px] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
            Select Location
          </span>
        </div>

        {/* Search Button */}
        <button className="bg-[#3252df] text-[#fffcfc] text-[16px] sm:text-[18px] md:text-[20px] font-semibold rounded-xl px-6 sm:px-8 h-[50px] shadow-[0px_0px_17.8px_1px_rgba(0,0,0,0.25)] hover:bg-[#2845c7] transition-all w-full md:w-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
          Search
        </button>

        </div>
      </div>
    </section>
  );
}
