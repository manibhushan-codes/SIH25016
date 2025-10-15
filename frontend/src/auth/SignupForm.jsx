import React, { useState } from "react";

const SignupForm = ({ userType, onSignup }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    onSignup({ fullName, email, password, userType });
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>{userType} Signup</h2>
      <input
        type="text"
        placeholder="Full Name"
        required
        value={fullName}
        onChange={e => setFullName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;