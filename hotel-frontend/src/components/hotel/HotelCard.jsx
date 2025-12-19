import React from 'react';

const HotelCard = ({ image, name, location, price, rating }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden group">
      <div className="relative h-48">
        <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-[1.02] transition" />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs font-semibold">
          ⭐ {rating}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-gray-900 text-lg">{name}</h3>
        <p className="text-xs text-gray-500 mt-1">{location}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-primary font-bold text-lg">${price}
            <span className="text-gray-500 text-xs font-normal"> /night</span>
          </span>
          <button className="text-sm font-medium text-primary hover:underline">View</button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;