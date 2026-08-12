import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  const menuItems = [
    { name: 'Dashboard', path: '/' },
    { name: 'Employees', path: '/employees' },
    { name: 'Leave', path: '/leave' },
    { name: 'Attendance', path: '/attendance' },
    { name: 'Payroll', path: '/payroll' },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold">HR Portal</h1>
      </div>
      <nav className="mt-8">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="block px-6 py-3 hover:bg-gray-800 transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
