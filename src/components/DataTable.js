'use client'
import { useState } from "react"

const DataTable = ({ dataTable }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 10

  const indexOfLastRecord = currentPage * recordsPerPage
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
  const currentRecords = dataTable.slice(indexOfFirstRecord, indexOfLastRecord)
  const totalPages = Math.ceil(dataTable.length / recordsPerPage)

  return (
    <div className="overflow-x-auto shadow-md rounded-lg dark:bg-gray-600">
      <table className="w-full divide-y divide-gray-200">
        <thead className="bg-blue-200">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentRecords.map(user => (
            <tr key={user.login.uuid}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{`${user.name.first} ${user.name.last}`}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.phone}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{`${user.location.city}, ${user.location.country}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-200 rounded p-2 "
        >
          Anterior
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-200 rounded p-2"
        >
          Siguiente
        </button>
      </div>
    </div>
  )
}

export default DataTable
