import axiosClient from "../../api/axiosClient"

const adminApi = {
    // Dashboard
  getDashboardStats: async () => {
    return axiosClient.get('/admin/dashboard/stats');
  },

  // Hotels
  getHotels: async (params) => {
    return axiosClient.get('/admin/hotels', { params });
  },
  createHotel: async (data) => {
    return axiosClient.post('/admin/hotels', data);
  },
  updateHotel: async (id, data) => {
    return axiosClient.put(`/admin/hotels/${id}`, data);
  },
  deleteHotel: async (id) => {
    return axiosClient.delete(`/admin/hotels/${id}`);
  },

  // Bookings
  getBookings: async (params) => {
    return axiosClient.get('/admin/bookings', { params });
  },

  // Users
  getUsers: async (params) => {
    return axiosClient.get('/admin/users', { params });
  },
  
};

export default adminApi;