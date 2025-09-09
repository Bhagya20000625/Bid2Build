import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import CustomerDashboard from './components/dashboards/CustomerDashboard';
import ConstructorDashboard from './components/dashboards/ConstructorDashboard';
import SupplierDashboard from './components/dashboards/SupplierDashboard';
import ArchitectDashboard from './components/dashboards/ArchitectDashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/customer-dashboard" element={<CustomerDashboard />} />
          <Route path="/constructor-dashboard" element={<ConstructorDashboard />} />
          <Route path="/supplier-dashboard" element={<SupplierDashboard />} />
          <Route path="/architect-dashboard/*" element={<ArchitectDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;