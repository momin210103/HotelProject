export default function DataTable({ columns, data, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-100">
          <tr>
            {columns.map(col => (
              <th key={col.key} className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                {col.label}
              </th>
            ))}
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {data?.map(row => (
            <tr key={row.id} className="hover:bg-gray-50 transition">
              {columns.map(col => (
                <td key={col.key} className="px-6 py-4 text-sm text-gray-900">
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
              <td className="px-6 py-4 text-sm text-center">
                <button onClick={() => onEdit(row.id)} className="text-blue-600 hover:text-blue-700 font-medium mr-3">
                  Edit
                </button>
                <button onClick={() => onDelete(row.id)} className="text-red-600 hover:text-red-700 font-medium">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}