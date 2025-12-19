import React from 'react';
import img1 from '../../assets/House_WidthBackward 1.jpg';
import img2 from '../../assets/House_WidthBackward 2.png';
import img3 from '../../assets/House_WidthBackward 3.png';
import img4 from '../../assets/House_WidthBackward 4.png';

const properties = [
  { id: 1, title: 'Shangri-La', location: 'Colombo, Sri Lanka', image: img1, popular: true },
  { id: 2, title: 'Top View', location: 'Hikkaduwe, Sri Lanka', image: img2, popular: false },
  { id: 3, title: 'Green Villa', location: 'Kandy, Sri Lanka', image: img3, popular: false },
  { id: 4, title: 'Wodden Pit', location: 'Ambalangode, Sri Lanka', image: img4, popular: false },
];

function PropertyCard({ property }) {
  return (
    <div className="w-[263px] mx-auto">
      <div className="relative h-[180px] w-[263px] rounded-[15px] overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title} 
          className="absolute inset-0 w-full h-full object-cover rounded-[15px]" 
        />
        {property.popular && (
          <div className="absolute top-0 right-0 h-10 w-[180px] bg-[#3252df] rounded-tr-[15px] rounded-bl-[15px] flex items-center justify-center">
            <p className="text-white text-[16px] font-light" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <span className="font-medium">Popular</span> Choice
            </p>
          </div>
        )}
      </div>
      <div className="mt-3">
        <p className="text-[#152c5b] text-[20px] font-normal" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {property.title}
        </p>
        <p className="text-[#b0b0b0] text-[15px] font-light" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {property.location}
        </p>
      </div>
    </div>
  );
}

export default function HouseWithBackyard() {
  return (
    <section className="w-full mx-auto py-8">
      <div className="w-full mx-auto">
        <h2 className="text-[#152c5b] text-[24px] font-medium mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
          House With Backyard
        </h2>
        <div className="grid mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {properties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
