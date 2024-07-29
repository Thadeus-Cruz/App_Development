import React, { useState } from "react";
import "../../Assets/Styles/registration.css";
import { useNavigate } from "react-router-dom";

const Registration = ({ setRegistrations }) => {
  const [garageOwner, setGarageOwner] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const newRegistration = {
      email,
      password,
    };

    setRegistrations((prevRegistrations) => {
      const updatedRegistrations = [newRegistration, ...prevRegistrations];
      return updatedRegistrations.slice(0, 10);
    });

    navigate("/login");
  };

  return (
    <div className="registration-html">
    <div className="registration-body">
    <form id="msform" onSubmit={handleSubmit}>
      <h1 className="fs-title" style={{ padding: "20px" }}>
        REGISTRATION FORM FOR AUTOGARAGE
      </h1>
      <fieldset>
        <h2 className="fs-title">Create your account</h2>
        <div className="form-grid">
          <input
            type="text"
            name="garageOwner"
            placeholder="Name"
            value={garageOwner}
            onChange={(e) => setGarageOwner(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="pass"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            name="cpass"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />

          <input
            type="tel"
            name="contactNumber"
            placeholder="Contact Number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
        </div>
      </fieldset>
      <button type="submit" className="submit action-button">
        Submit
      </button>
    </form>
    </div>
    </div>
  );
};

export default Registration;
