import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
  <Route path="/" element={<Navigate to="/admin" replace />} />
  <Route path="/admin" element={<AdminDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;