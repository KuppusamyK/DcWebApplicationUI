import React from "react";
import LoginPage from "./LoginPage";
import { Routes, Route, useNavigate } from "react-router-dom";
function HomePage() {
  const navigate = useNavigate;
  const goToHomePage = () => {
    navigate("/HomePage");
  };

  const goToSignUpPage = () => {
    navigate("/");
  };
  return (
    <form>
      <h1> DC Web Application</h1>
      <label>
        <p>Username</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <button onClick={goToHomePage}>Login</button>
        <button type="submit" onClick={goToSignUpPage}>
          Sign Up
        </button>
        <Routes>
          <Route path="/HomePage" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </form>
  );
}
export default HomePage;
