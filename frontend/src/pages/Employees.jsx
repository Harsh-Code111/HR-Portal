import React from 'react';

function Employees() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Employee Management</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Employees</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add Employee
          </button>
        </div>
        <p className="text-gray-600">Employee list coming soon...</p>
      </div>
    </div>
  );
}

export default Employees;
