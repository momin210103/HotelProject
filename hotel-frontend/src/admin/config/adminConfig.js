export const ADMIN_CONFIG = {
  useDummyData: import.meta.env.VITE_USE_DUMMY_DATA === 'true',
  itemsPerPage: 10,
};

export const ADMIN_MENU = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: '📊' },
  { label: 'Hotels', href: '/admin/hotels', icon: '🏨' },
  { label: 'Bookings', href: '/admin/bookings', icon: '📅' },
  { label: 'Users', href: '/admin/users', icon: '👥' },
  { label: 'Settings', href: '/admin/settings', icon: '⚙️' },
];