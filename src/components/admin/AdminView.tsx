import React from 'react';
import LeadsTable from './LeadsTable';

export default function AdminView() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-10">
        <header className="mb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white shadow rounded-lg">
              <LeadsTable />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}