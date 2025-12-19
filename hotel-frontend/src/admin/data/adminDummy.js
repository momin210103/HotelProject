export const dashboardStats = {
  totalHotels: 156,
  totalBookings: 2543,
  totalUsers: 5821,
  totalRevenue: '$425,680',
  monthlyGrowth: 12.5,
  occupancyRate: 78.3,
  stats: [
    { label: 'Total Hotels', value: 156, change: '+2.5%', icon: '🏨' },
    { label: 'Total Bookings', value: 2543, change: '+8.2%', icon: '📅' },
    { label: 'Total Users', value: 5821, change: '+5.1%', icon: '👥' },
    { label: 'Total Revenue', value: '$425,680', change: '+12.5%', icon: '💰' },
  ],
};

export const hotelsData = [
  { id: 1, name: 'Grand Luxury Resort', location: 'Maldives', status: 'active', rooms: 156, revenue: '$45,680' },
  { id: 2, name: 'Urban City Hotel', location: 'New York', status: 'active', rooms: 89, revenue: '$32,450' },
  { id: 3, name: 'Mountain View Lodge', location: 'Aspen', status: 'inactive', rooms: 45, revenue: '$18,920' },
  { id: 4, name: 'Beachfront Paradise', location: 'Bora Bora', status: 'active', rooms: 120, revenue: '$52,300' },
];

export const bookingsData = [
  { id: 1, hotelName: 'Grand Luxury Resort', guestName: 'John Doe', checkIn: '2024-01-15', status: 'confirmed', amount: '$450' },
  { id: 2, hotelName: 'Urban City Hotel', guestName: 'Jane Smith', checkIn: '2024-01-20', status: 'pending', amount: '$220' },
  { id: 3, hotelName: 'Mountain View Lodge', guestName: 'Mike Wilson', checkIn: '2024-01-25', status: 'confirmed', amount: '$340' },
];

export const usersData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', joinDate: '2024-01-01', status: 'active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', joinDate: '2024-01-05', status: 'active' },
  { id: 3, name: 'Mike Wilson', email: 'mike@example.com', joinDate: '2024-01-10', status: 'active' },
];