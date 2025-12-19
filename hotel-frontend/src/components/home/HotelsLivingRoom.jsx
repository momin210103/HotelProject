import React from 'react';
import img1 from '../../assets/Hotel_living_Room 1.png';
import img2 from '../../assets/Hotel_Living_Room 2.png';
import img3 from '../../assets/Hotel_living_Room 3.jpg';
import img4 from '../../assets/Hotel_living_Room 4.png';

const hotels = [
  { id: 1, title: 'Boutiqe', location: 'Kandy, Sri Lanka', image: img1, popular: false },
  { id: 2, title: 'Modern', location: 'Nuwereliya, Sri Lanka', image: img2, popular: false },
  { id: 3, title: 'Silver Rain', location: 'Dehiwala, Sri Lanka', image: img3, popular: false },
  { id: 4, title: 'Cashville', location: 'Ampara, Sri Lanka', image: img4, popular: true },
];

function HotelCard({ hotel }) {
  return (
    <div className="w-[263px] mx-auto">
      <div className="relative mx-auto h-[180px] w-[263px] rounded-[15px] overflow-hidden">
        <img 
          src={hotel.image} 
          alt={hotel.title} 
          className="absolute inset-0 w-full h-full object-cover rounded-[15px]" 
        />
        {hotel.popular && (
          <div className="absolute top-0 right-0 h-10 w-[180px] bg-[#3252df] rounded-tr-[15px] rounded-bl-[15px] flex items-center justify-center">
            <p className="text-white text-[16px] font-light" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <span className="font-medium">Popular</span> Choice
            </p>
          </div>
        )}
      </div>
      <div className="mt-3">
        <p className="text-[#152c5b] text-[20px] font-normal" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {hotel.title}
        </p>
        <p className="text-[#b0b0b0] text-[15px] font-light" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {hotel.location}
        </p>
      </div>
    </div>
  );
}

export default function HotelsLivingRoom() {
  return (
    <section className="w-full mx-auto py-8">
      <div className="max-w-full mx-auto px-8">
        <h2 className="text-[#152c5b] text-[24px] font-medium mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Hotels Living Room
        </h2>
        <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {hotels.map(hotel => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>
    </section>
  );
}
