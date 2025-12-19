import React from 'react';
import { useNavigate } from 'react-router-dom';
import IMG_1 from '../../assets/Blue.png';
import IMG_2 from '../../assets/Mostpicked2.png';
import IMG_3 from '../../assets/Mostpicked3.png';
import IMG_4 from '../../assets/Mostpicked4.png';
import IMG_5 from '../../assets/Mostpicked5.png';


const items = [
  { id: 1, title: 'Blue Origin Fams', location: 'Galle, Sri Lanka', price: 50, img: IMG_1, large: true },
  { id: 2, title: 'Ocean Land', location: 'Trincomalee, Sri Lanka', price: 22, img: IMG_2 },
  { id: 3, title: 'Stark House', location: 'Dehiwala, Sri Lanka', price: 856, img: IMG_3 },
  { id: 4, title: 'Vinna Vill', location: 'Beruwala, Sri Lanka', price: 62, img: IMG_4 },
  { id: 5, title: 'Bobox', location: 'Kandy, Sri Lanka', price: 72, img: IMG_5 },
];

function PriceBadge({ price }) {
  return (
    <div className="absolute top-0 right-0 h-10 w-44 bg-[#3252df] rounded-tr-[15px] rounded-bl-[15px] flex items-center justify-center">
      <p className="text-white text-[16px] font-light" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <span className="font-medium">${price}</span> per night
      </p>
    </div>
  );
}


function Card({ item,onCardClick }) {
  return (
    <div
    onClick={onCardClick}
      className={`relative rounded-[15px] overflow-hidden group shadow-sm bg-neutral-200 ${
        item.large ? 'h-[460px]' : 'h-[215px]'
      }`}
    >
      <img
        src={item.img}
        alt={item.title}
        className={`absolute inset-0 w-full h-full object-cover transition-scale duration-500 group-hover:scale-[1.03] ${
          item.large ? '' : ''
        }`}
        loading="lazy"
      />
      {/* dark gradient for readability */}
      <div className={`absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent ${item.large ? '' : ''}`} />
      <PriceBadge price={item.price} />
      <div className="absolute left-6 bottom-10">
        <h3 className="text-white text-[20px] font-normal mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.title}</h3>
        <p className="text-white text-[15px] font-light" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.location}</p>
      </div>
    </div>
  );
}

export default function MostPicked() {
  const navigate = useNavigate();
  const handleCardClick = (hotelId) =>{
    navigate(`/hotel/${hotelId}`)
  }
  return (
    <section className="w-full py-8">
      <div className="max-w-full mx-auto px-8">
        <h2 className="text-[#152c5b] text-[24px] font-medium mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>Most Picked</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[215px] gap-6 lg:gap-8 hover:cursor-pointer">
        {items.map(item => (
          <div
            key={item.id}
            className={`${item.large ? 'sm:row-span-2 sm:h-[460px]' : ''}`}
          >
            <Card className="hover:cursor-pointer" item={item} onCardClick={()=>handleCardClick(item.id)}/>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
