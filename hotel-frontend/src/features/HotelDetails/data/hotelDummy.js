import img1 from '../assets/Image 1.png';
import img2 from '../assets/Image 2.jpg';
import img3 from '../assets/Image 3.jpg';
import img4 from '../assets/Image 4.png';
import img5 from '../assets/Image 5.png';
import img6 from '../assets/Image 6.png';
import img7 from '../assets/Image 7.png';
import icBedroom from '../assets/ic_bedroom.png';
import icBathroom from '../assets/ic_bathroom.png';
import icWifi from '../assets/ic_wifi 1.png';
import icLivingroom from '../assets/ic_livingroom.png';
import icAc from '../assets/ic_ac 1.png';
import icRefrigerator from '../assets/ic_kulkas.png';
import icDiningroom from '../assets/ic_diningroom 1.png';
import icTv from '../assets/ic_tv.png';

// Hotel database - store all hotels
export const hotelsDatabase = {
  1: {
    id: 1,
    name: "Blue Origin Fams",
    location: "Galle, Sri Lanka",
    pricePerNight: 50,
    images: {
      main: img1,
      gallery: [img2, img3]
    },
    description: [
      "Blue Origin Fams offers a unique beachfront experience in the historic city of Galle. This stunning property combines modern luxury with traditional Sri Lankan architecture, providing guests with an unforgettable coastal retreat.",
      "Enjoy breathtaking ocean views, pristine beaches, and easy access to Galle Fort's UNESCO World Heritage sites. Perfect for families and couples seeking relaxation and adventure."
    ],
    amenities: [
      { icon: icBedroom, label: '3 bedroom', highlight: '3' },
      { icon: icWifi, label: '50 mbp/s', highlight: '50' },
      { icon: icLivingroom, label: '2 living room', highlight: '2' },
      { icon: icAc, label: '7 unit ready', highlight: '7' },
      { icon: icBathroom, label: '2 bathroom', highlight: '2' },
      { icon: icRefrigerator, label: '1 refrigerator', highlight: '1' },
      { icon: icDiningroom, label: '1 dining room', highlight: '1' },
      { icon: icTv, label: '3 television', highlight: '3' }
    ]
  },
  2: {
    id: 2,
    name: "Ocean Land",
    location: "Trincomalee, Sri Lanka",
    pricePerNight: 22,
    images: {
      main: img2,
      gallery: [img1, img3]
    },
    description: [
      "Ocean Land is a cozy budget-friendly hotel located in the beautiful coastal town of Trincomalee. Experience authentic Sri Lankan hospitality while enjoying stunning views of the Indian Ocean.",
      "Perfect for backpackers and budget travelers who don't want to compromise on comfort. Close to famous beaches like Nilaveli and Uppuveli."
    ],
    amenities: [
      { icon: icBedroom, label: '1 bedroom' },
      { icon: icWifi, label: '10 mbp/s', highlight: '10' },
      { icon: icLivingroom, label: '1 living room' },
      { icon: icAc, label: '2 unit ready', highlight: '2' },
      { icon: icBathroom, label: '1 bathroom' },
      { icon: icRefrigerator, label: '1 refrigerator' },
      { icon: icDiningroom, label: '1 dining room' },
      { icon: icTv, label: '1 television' }
    ]
  },
  3: {
    id: 3,
    name: "Stark House",
    location: "Dehiwala, Sri Lanka",
    pricePerNight: 856,
    images: {
      main: img3,
      gallery: [img1, img2]
    },
    description: [
      "Stark House is a premium luxury villa in Dehiwala, offering unparalleled comfort and sophistication. This exclusive property features contemporary design, private pool, and personalized butler service.",
      "Ideal for high-end travelers seeking privacy and luxury. Located minutes from Colombo city center with easy access to fine dining, shopping, and entertainment."
    ],
    amenities: [
      { icon: icBedroom, label: '5 bedroom', highlight: '5' },
      { icon: icWifi, label: '100 mbp/s', highlight: '100' },
      { icon: icLivingroom, label: '3 living room', highlight: '3' },
      { icon: icAc, label: '15 unit ready', highlight: '15' },
      { icon: icBathroom, label: '4 bathroom', highlight: '4' },
      { icon: icRefrigerator, label: '2 refrigerator', highlight: '2' },
      { icon: icDiningroom, label: '2 dining room', highlight: '2' },
      { icon: icTv, label: '5 television', highlight: '5' }
    ]
  },
  4: {
    id: 4,
    name: "Vinna Vill",
    location: "Beruwala, Sri Lanka",
    pricePerNight: 62,
    images: {
      main: img4,
      gallery: [img5, img6]
    },
    description: [
      "Vinna Vill is a charming mid-range property in Beruwala, known for its golden beaches and water sports. This comfortable accommodation offers excellent value with modern amenities and warm hospitality.",
      "Great for couples and small families looking for a peaceful beach getaway. Explore nearby temples, enjoy fresh seafood, and experience authentic coastal living."
    ],
    amenities: [
      { icon: icBedroom, label: '2 bedroom', highlight: '2' },
      { icon: icWifi, label: '25 mbp/s', highlight: '25' },
      { icon: icLivingroom, label: '1 living room' },
      { icon: icAc, label: '4 unit ready', highlight: '4' },
      { icon: icBathroom, label: '2 bathroom', highlight: '2' },
      { icon: icRefrigerator, label: '1 refrigerator' },
      { icon: icDiningroom, label: '1 dining room' },
      { icon: icTv, label: '2 television', highlight: '2' }
    ]
  },
  5: {
    id: 5,
    name: "Bobox",
    location: "Kandy, Sri Lanka",
    pricePerNight: 72,
    images: {
      main: img5,
      gallery: [img6, img7]
    },
    description: [
      "Bobox is a boutique hotel nestled in the cultural heart of Sri Lanka - Kandy. Surrounded by lush green hills and tea plantations, this property offers a unique blend of nature and culture.",
      "Visit the Temple of the Tooth, explore botanical gardens, and enjoy traditional Kandyan dance performances. Perfect for cultural enthusiasts and nature lovers."
    ],
    amenities: [
      { icon: icBedroom, label: '2 bedroom', highlight: '2' },
      { icon: icWifi, label: '30 mbp/s', highlight: '30' },
      { icon: icLivingroom, label: '2 living room', highlight: '2' },
      { icon: icAc, label: '5 unit ready', highlight: '5' },
      { icon: icBathroom, label: '2 bathroom', highlight: '2' },
      { icon: icRefrigerator, label: '1 refrigerator' },
      { icon: icDiningroom, label: '1 dining room' },
      { icon: icTv, label: '2 television', highlight: '2' }
    ]
  }
};

// Treasures by hotel
export const treasuresByHotel = {
  1: [
    { id: 1, name: 'Galle Fort Walk', category: 'Historical', image: img4, popular: true },
    { id: 2, name: 'Beach Sunset', category: 'Beach', image: img5, popular: false },
    { id: 3, name: 'Local Market', category: 'Shopping', image: img6, popular: false },
    { id: 4, name: 'Whale Watching', category: 'Adventure', image: img7, popular: true }
  ],
  2: [
    { id: 1, name: 'Nilaveli Beach', category: 'Beach', image: img4, popular: true },
    { id: 2, name: 'Pigeon Island', category: 'Snorkeling', image: img5, popular: true },
    { id: 3, name: 'Hot Springs', category: 'Nature', image: img6, popular: false },
    { id: 4, name: 'Koneswaram Temple', category: 'Historical', image: img7, popular: false }
  ],
  3: [
    { id: 1, name: 'Colombo City Tour', category: 'City', image: img4, popular: false },
    { id: 2, name: 'Shopping Mall', category: 'Shopping', image: img5, popular: false },
    { id: 3, name: 'Fine Dining', category: 'Restaurant', image: img6, popular: true },
    { id: 4, name: 'Spa & Wellness', category: 'Relaxation', image: img7, popular: true }
  ],
  4: [
    { id: 1, name: 'Water Sports', category: 'Adventure', image: img4, popular: true },
    { id: 2, name: 'Beach Volleyball', category: 'Sports', image: img5, popular: false },
    { id: 3, name: 'Seafood Restaurant', category: 'Dining', image: img6, popular: true },
    { id: 4, name: 'Sunset Cruise', category: 'Boat Tour', image: img7, popular: false }
  ],
  5: [
    { id: 1, name: 'Temple of Tooth', category: 'Religious', image: img4, popular: true },
    { id: 2, name: 'Botanical Garden', category: 'Nature', image: img5, popular: true },
    { id: 3, name: 'Tea Plantation Tour', category: 'Culture', image: img6, popular: true },
    { id: 4, name: 'Kandyan Dance Show', category: 'Entertainment', image: img7, popular: false }
  ]
};

// Legacy exports for backward compatibility
export const dummyHotelDetails = hotelsDatabase[1];
export const dummyTreasures = treasuresByHotel[1];
