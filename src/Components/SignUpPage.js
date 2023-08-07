import { useNavigate } from "react-router-dom";
import React from "react";

function SignUpPage() {
  const navigate = useNavigate;
  return (
    <>
      <div>
        <h3> Enter WM Username</h3>
        <input type="text" />
      </div>
      <div>
        <h3> Enter your Email Id</h3>
        <input type="email" />
      </div>
      <div>
        <h3>Enter Password </h3>
        <input type="password" />
      </div>
      <div>
        <h3>Confirm Password</h3>
        <input type="password" />
      </div>

      <div>
        <button onClick={navigate}> Sign Up</button>
      </div>
    </>
  );
}
export default SignUpPage;
