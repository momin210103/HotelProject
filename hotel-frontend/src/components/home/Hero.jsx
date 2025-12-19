import React from "react";
import HeroImage from "../../assets/HeroImage.jpg";
import icTraveler from "../../assets/ic_traveler.png";
import icCities from "../../assets/ic_cities 1.png";
import icTreasure from "../../assets/ic_treasure1.png";

export default function Hero() {
  return (
    <section className="w-full py-14">
      <div className="w-full px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* ================= LEFT CONTENT ================= */}
        <div className="w-full lg:w-[45%] flex flex-col">
          <h1 className="text-[#152c5b] text-[30px] sm:text-[38px] lg:text-[44px] font-bold leading-tight mb-6 font-[Poppins]">
            Forget Busy Work, <br /> Start Next Vacation
          </h1>

          <p className="text-[#b0b0b0] text-[15px] sm:text-[16px] leading-relaxed mb-10 max-w-[420px] font-[Poppins]">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>

          <div className="mb-14">
            <button className="bg-[#3252df] text-white h-[50px] px-10 rounded-lg text-[17px] font-medium shadow-[0_12px_20px_rgba(50,82,223,0.35)] hover:bg-[#2845c7] transition">
              Show Me
            </button>
          </div>

          {/* ================= STATS ================= */}
          <div className="flex flex-wrap gap-14">
            <Stat icon={icTraveler} value="2500" label="Users" />
            <Stat icon={icTreasure} value="200" label="Treasure" />
            <Stat icon={icCities} value="100" label="Cities" />
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="relative w-full lg:w-[50%] h-80 sm:h-[380px] lg:h-[440px] flex justify-end">
          
          {/* Decorative Frame */}
          <div className="hidden lg:block absolute inset-0 translate-x-6 translate-y-6 border-2 border-neutral-200 rounded-2xl" />

          {/* Main Image */}
          <img
            src={HeroImage}
            alt="Hotel room"
            className="relative w-full h-full object-cover rounded-tl-[90px] rounded-tr-xl rounded-bl-xl rounded-br-xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

/* ================= Small Reusable Stat Component ================= */

function Stat({ icon, value, label }) {
  return (
    <div className="flex flex-col gap-2">
      <img src={icon} alt={label} className="w-8 h-8" />
      <p className="text-[16px] font-light font-[Poppins]">
        <span className="text-[#152c5b] font-medium">{value}</span>
        <span className="text-[#b0b0b0]"> {label}</span>
      </p>
    </div>
  );
}
