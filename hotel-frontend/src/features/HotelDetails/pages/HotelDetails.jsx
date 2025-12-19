import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { hotelService } from '../services/hotelService';

// Amenity icon component
const AmenityIcon = ({ icon }) => {
  return (
    <img 
      src={icon} 
      alt="amenity icon"
      className="w-[38px] h-[38px] object-contain"
    />
  );
};

export default function HotelDetails() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [treasures, setTreasures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [hotelData, treasureData] = await Promise.all([
          hotelService.getHotelDetails(id),
          hotelService.getTreasures(id)
        ]);
        setHotel(hotelData);
        setTreasures(treasureData);
      } catch (err) {
        console.error('Failed to load hotel details:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading hotel details...</p>
      </div>
    );
  }

  if (!hotel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Hotel not found</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="w-full mx-auto px-8 py-12">

        {/* Title & Location */}
        <div className="text-center mb-12">
          <h1 className="text-[36px] font-bold text-[#152c5b] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {hotel.name}
          </h1>
          <p className="text-[18px] font-light text-[#b0b0b0]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {hotel.location}
          </p>
        </div>

        {/* Photo Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12">
          {/* Large Image */}
          <div className="lg:row-span-2">
            <img 
              src={hotel.images.main} 
              alt={hotel.name}
              className="w-full h-full object-cover rounded-[15px] max-h-[500px]"
            />
          </div>
          
          {/* Small Images */}
          {hotel.images.gallery.map((img, idx) => (
            <div key={idx}>
              <img 
                src={img} 
                alt={`${hotel.name} view ${idx + 1}`}
                className="w-full h-[245px] object-cover rounded-[15px]"
              />
            </div>
          ))}
        </div>

        {/* About & Booking Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* About Section - 2 columns */}
          <div className="lg:col-span-2">
            <h2 className="text-[20px] font-medium text-[#152c5b] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              About the place
            </h2>
            
            {hotel.description.map((para, idx) => (
              <p 
                key={idx} 
                className="text-[16px] font-light text-[#b0b0b0] leading-[1.7] mb-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {para}
              </p>
            ))}

            {/* Amenities Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
              {hotel.amenities.map((amenity, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <AmenityIcon icon={amenity.icon} />
                  <p className="text-[16px] font-light text-[#b0b0b0] mt-2 leading-[1.7]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {amenity.highlight ? (
                      <>
                        <span className="font-medium text-[#152c5b]">{amenity.highlight}</span>{' '}
                        {amenity.label.replace(amenity.highlight, '').trim()}
                      </>
                    ) : (
                      amenity.label
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Sidebar - 1 column */}
          <div className="lg:col-span-1">
            <div className="border border-neutral-200 rounded-[15px] p-8 sticky top-24">
              <h3 className="text-[20px] font-medium text-[#152c5b] mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Start Booking
              </h3>
              <p className="text-[36px] font-light text-[#152c5b] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <span className="font-medium text-[#1abc9c]">${hotel.pricePerNight}</span>{' '}
                <span className="text-[#b0b0b0] font-extralight text-[20px]">per Day</span>
              </p>
              <button className="w-full bg-[#3252df] hover:bg-[#2845c7] text-white text-[20px] font-medium py-3 rounded-[7px] shadow-md transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Book Now!
              </button>
            </div>
          </div>
        </div>

        {/* Treasure to Choose Section */}
        <div className="mb-12">
          <h2 className="text-[20px] font-medium text-[#152c5b] mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Treasure to Choose
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {treasures.map((treasure) => (
              <div key={treasure.id} className="relative">
                <div className="relative w-full h-[180px] rounded-[15px] overflow-hidden">
                  <img 
                    src={treasure.image} 
                    alt={treasure.name}
                    className="w-full h-full object-cover"
                  />
                  {treasure.popular && (
                    <div className="absolute top-0 right-0 h-10 w-[180px] bg-[#3252df] rounded-tr-[15px] rounded-bl-[15px] flex items-center justify-center">
                      <p className="text-white text-[16px] font-light" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        <span className="font-medium">Popular</span> Choice
                      </p>
                    </div>
                  )}
                </div>
                <h3 className="text-[20px] font-normal text-[#152c5b] mt-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {treasure.name}
                </h3>
                <p className="text-[15px] font-light text-[#b0b0b0]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {treasure.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
