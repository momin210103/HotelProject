import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full mt-24 bg-white border-t border-neutral-200">
      <div className="max-w-[1142px] mx-auto px-8 py-14 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        <div className="flex-1 max-w-xs">
          <h3 className="text-[26px] font-medium text-[#152c5b] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <span className="text-[#3252df]">Lanka</span>Stay.
          </h3>
          <p className="text-[16px] text-[#b0b0b0] leading-normal font-light" style={{ fontFamily: 'Poppins, sans-serif' }}>
            We kaboom your beauty holiday instantly and memorable.
          </p>
        </div>
        <div className="flex flex-col items-start md:items-end">
          <p className="text-[#152c5b] text-[18px] font-medium mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Become hotel Owner
          </p>
          <button className="bg-[#3252df] text-white h-8 px-6 rounded-[5px] text-[14px] font-medium hover:brightness-110 transition" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Register Now
          </button>
        </div>
      </div>
      <div className="w-full bg-[#3252df] h-[27px] flex items-center justify-center">
        <p className="text-[#f5f6f8] text-[14px] font-light" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Copyright 2024 • All rights reserved • Salman Faris
        </p>
      </div>
    </footer>
  );
}