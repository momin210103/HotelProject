import React, { useState } from 'react';
import { useAdminData } from '../hooks/useAdminData';
import adminService from '../services/adminService';
import DataTable from '../components/DataTable';
import LoadingSpinner from '../components/LoadingSpinner';

export default function AdminHotels() {
    const [page, setPage] = useState(1);
    const { data: hotelsData, loading, error } = useAdminData(() =>
        adminService.getHotels({ page })
    );

    const columns = [
        { key: 'name', label: 'Hotel Name' },
        { key: 'location', label: 'Location' },
        { key: 'rooms', label: 'Rooms' },
        { key: 'revenue', label: 'Revenue' },
        {
            key: 'status',
            label: 'Status',
            render: (status) => (
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                    {status}
                </span>
            ),
        },
    ];

    if (loading) return <LoadingSpinner />;
    if (error) return <div className="text-red-600">Error: {error}</div>;

    return (
        <div>
            <DataTable columns={columns} data={hotelsData?.hotels || []} />

            {/* Pagination controls */}
            <div className="flex justify-center gap-4 mt-4">
                <button
                    onClick={() => setPage(prev => Math.max(1, prev - 1))}
                    disabled={page === 1}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
                >
                    Previous
                </button>
                <span className="py-2">Page {page}</span>
                <button
                    onClick={() => setPage(prev => prev + 1)}
                    disabled={!hotelsData?.hasMore}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
                >
                    Next
                </button>
            </div>
        </div>
    );
}