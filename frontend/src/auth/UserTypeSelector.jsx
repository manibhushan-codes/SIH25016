import React from "react";

const UserTypeSelector = ({ userType, setUserType }) => (
  <div className="user-type-selector">
    <button
      className={userType === "Student" ? "active" : ""}
      onClick={() => setUserType("Student")}
      type="button"
    >
      Student
    </button>
    <button
      className={userType === "Staff" ? "active" : ""}
      onClick={() => setUserType("Staff")}
      type="button"
    >
      Staff
    </button>
    
  </div>
);

export default UserTypeSelector;