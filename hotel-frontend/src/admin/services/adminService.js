import adminApi from '../api/adminApi';
import { ADMIN_CONFIG } from '../config/adminConfig';
import { dashboardStats, hotelsData, bookingsData, usersData } from '../data/adminDummy';

const adminService = {
  getDashboardStats: async () => {
    try {
      if (ADMIN_CONFIG.useDummyData) {
        return dashboardStats;
      }
      return await adminApi.getDashboardStats();
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
      throw error;
    }
  },

  getHotels: async (params = {}) => {
    try {
      if (ADMIN_CONFIG.useDummyData) {
        return {
          data: hotelsData,
          total: hotelsData.length,
          page: params.page || 1,
          pageSize: ADMIN_CONFIG.itemsPerPage,
        };
      }
      return await adminApi.getHotels(params);
    } catch (error) {
      console.error('Error fetching hotels:', error);
      throw error;
    }
  },

  getBookings: async (params = {}) => {
    try {
      if (ADMIN_CONFIG.useDummyData) {
        return {
          data: bookingsData,
          total: bookingsData.length,
          page: params.page || 1,
          pageSize: ADMIN_CONFIG.itemsPerPage,
        };
      }
      return await adminApi.getBookings(params);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      throw error;
    }
  },

  getUsers: async (params = {}) => {
    try {
      if (ADMIN_CONFIG.useDummyData) {
        return {
          data: usersData,
          total: usersData.length,
          page: params.page || 1,
          pageSize: ADMIN_CONFIG.itemsPerPage,
        };
      }
      return await adminApi.getUsers(params);
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },
};

export default adminService;