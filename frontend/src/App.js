import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AdminPortal from "./Admin-Portal/App";
import StaffPortal from "./Staff-Portal/App";
import StudentPortal from "./Student-Portal/App";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin-dashboard" element={<AdminPortal />} />
        <Route path="/staff-dashboard" element={<StaffPortal />} />
        <Route path="/student-dashboard" element={<StudentPortal />} />
      </Routes>
    </Router>
  );
}
export default App;
