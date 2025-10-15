// Example: src/Admin-Portal/components/StatsWidget.js
import React from "react";
const StatsWidget = ({ label, value }) => (
  <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "6px", margin: "0.5rem 0" }}>
    <h4>{label}</h4>
    <p>{value}</p>
  </div>
);
export default StatsWidget;
