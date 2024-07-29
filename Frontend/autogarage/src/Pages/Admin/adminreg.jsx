import React, { useState } from "react";
// import "../../Assets/Styles/adminRegistration.css";
import { useNavigate } from "react-router-dom";

const AdminRegistration = ({ setAdminRegistrations }) => {
  const [adminName, setAdminName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [department, setDepartment] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [officeHours, setOfficeHours] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const newAdminRegistration = {
      email,
      password,
    };

    setAdminRegistrations((prevAdminRegistrations) => {
      const updatedAdminRegistrations = [newAdminRegistration, ...prevAdminRegistrations];
      return updatedAdminRegistrations.slice(0, 10); // Limiting to 10 registrations
    });

    navigate("/adminlogin"); // Navigate to the admin login page after registration
  };

  return (
    <div className="registration-html">
      <div className="registration-body">
        <form id="msform" onSubmit={handleSubmit}>
          <h1 className="fs-title" style={{ padding: "20px" }}>
            ADMIN REGISTRATION FORM
          </h1>
          <fieldset>
            <h2 className="fs-title">Create your account</h2>
            <div className="form-grid">
              <input
                type="text"
                name="adminName"
                placeholder="Name of the Admin"
                value={adminName}
                onChange={(e) => setAdminName(e.target.value)}
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
                name="phoneNumber"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
              <input
                type="text"
                name="department"
                placeholder="Expertise"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Office Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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
                name="officeHours"
                placeholder="Office Hours (e.g., 9:00 AM - 5:00 PM)"
                value={officeHours}
                onChange={(e) => setOfficeHours(e.target.value)}
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

export default AdminRegistration;
