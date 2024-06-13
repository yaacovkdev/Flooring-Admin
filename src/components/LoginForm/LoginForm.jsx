import "./LoginForm.scss";
import React, { useState } from "react";
import axios from "axios";
import { sha256 } from "js-sha256";
import { Base64 } from "js-base64";

axios.defaults.withCredentials = true;

const LoginForm = ( {setLoggedIn} ) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  //Ecrypt User Identification in browser
  const stringToSHA256B64 = (strinp) => {
    // Create Hex hash string with sha256 alg
    const hash = sha256.create();
    hash.update(strinp);
    const hexHash = hash.hex();

    // Convert the hex string to a byte
    const byteArray = [];
    for (let i = 0; i < hexHash.length; i += 2) {
      byteArray.push(parseInt(hexHash.substr(i, 2), 16));
    }

    // Return encoded string in Base64
    return Base64.fromUint8Array(new Uint8Array(byteArray));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // Here you would usually handle the form submission, e.g., send the data to your server

    if (email && password) {
      try {
        await axios.post(
          `${process.env.REACT_APP_API_URL}/admin/login`,
          {
            email: stringToSHA256B64(email),
            password: stringToSHA256B64(password),
            real_email: email,
          },
          { withCredentials: true }
        );
        
        setMessage("Login successful!");
        setLoggedIn(true);
      } catch (error) {
        console.error("Login Error");
      }

      // Clear the form
      setEmail("");
      setPassword("");
    } else {
      setMessage("Please fill in both fields.");
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      {message && <p>{message}</p>}
      <form id="loginForm" onSubmit={handleLogin}>
        <div className="login__input">
          <label htmlFor="username">Email:</label>
          <input
            type="email"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="login__input">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
