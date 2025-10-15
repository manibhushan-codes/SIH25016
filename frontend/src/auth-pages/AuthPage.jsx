import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";
import UserTypeSelector from "../auth/UserTypeSelector";
import "./AuthPage.css";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState("Student");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Helper to get portal route
  const getPortalRoute = (type) => {
    switch (type) {
      case "Student": return "/student";
      case "Staff": return "/staff";
      case "Admin": return "/admin";
      default: return "/";
    }
  };

  // Login handler
  const handleLogin = async ({ email, password, userType }) => {
    setError("");
    // Simple validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, userType }),
      });
      const data = await res.json();
      if (res.ok) {
        // Redirect to portal
        navigate(getPortalRoute(userType));
      } else {
        setError(data.message || "Login failed.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
  };

  // Signup handler
  const handleSignup = async ({ fullName, email, password, userType }) => {
    setError("");
    // Simple validation
    if (!fullName || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, password, userType }),
      });
      const data = await res.json();
      if (res.ok) {
        // Redirect to portal
        navigate(getPortalRoute(userType));
      } else {
        setError(data.message || "Signup failed.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <UserTypeSelector userType={userType} setUserType={setUserType} />
        {error && <div style={{ color: "red", marginBottom: "1rem" }}>{error}</div>}
        {isLogin ? (
          <LoginForm userType={userType} onLogin={handleLogin} />
        ) : (
          <SignupForm userType={userType} onSignup={handleSignup} />
        )}
        <div className="toggle-auth">
          {isLogin ? (
            <p>
              Don't have an account?{" "}
              <button onClick={() => setIsLogin(false)}>Sign Up</button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button onClick={() => setIsLogin(true)}>Sign In</button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;