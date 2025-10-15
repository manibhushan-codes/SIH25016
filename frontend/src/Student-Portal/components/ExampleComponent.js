// src/Admin-Portal/App.js
import React from "react";
import StatsWidget from "./components/StatsWidget"; // Widget for displaying stats
const AdminPortal = () => (
  <div>
    <h1>Admin Dashboard</h1>
    <StatsWidget label="Total Students" value={1200} />
    <StatsWidget label="Attendance Rate" value="96%" />
    {/* You can add charts/components for attendance and more */}
  </div>
);
export default AdminPortal;
