import React from 'react';

function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Welcome to HR Portal</h2>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-900">Profile</button>
          <button className="text-gray-600 hover:text-gray-900">Logout</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
