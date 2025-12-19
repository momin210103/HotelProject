import React from 'react';
import { useAdminData } from '../hooks/useAdminData';
import adminService from '../services/adminService';
import StatCard from '../components/StatCard';
import LoadingSpinner from '../components/LoadingSpinner';

export default function AdminDashboard() {
  const { data: stats, loading, error } = useAdminData(() =>
    adminService.getDashboardStats()
  );

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-600">Error: {error}</div>;

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's what's happening.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats?.stats?.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Revenue Overview</h2>
          <p className="text-gray-600">Chart placeholder - integrate Chart.js or Recharts</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Occupancy Rate</h2>
          <p className="text-3xl font-bold text-blue-600">{stats?.occupancyRate}%</p>
        </div>
      </div>
    </div>
  );
}