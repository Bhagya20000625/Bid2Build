import React from 'react';
import { HardHat, Wrench, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ConstructorDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <HardHat className="h-8 w-8 text-orange-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Constructor Dashboard</h1>
            </div>
            <button
              onClick={() => navigate('/login')}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Login
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-4">
            <Wrench className="h-6 w-6 text-orange-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900">Welcome, Constructor!</h2>
          </div>
          <p className="text-gray-600">This is your constructor dashboard placeholder. Your actual dashboard components will go here.</p>
        </div>
      </div>
    </div>
  );
};

export default ConstructorDashboard;