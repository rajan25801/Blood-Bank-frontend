import React, { useState } from "react";

const Form = ({ formTitle, submitBtn, formType, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // 🔥 Send data to parent (Login or Register page)
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-card p-4 shadow">
        <h3 className="text-center mb-4">{formTitle}</h3>

        {formType === "register" && (
          <>
            <div className="mb-3">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </>
        )}

        <div className="mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Role Selector */}
        <div className="mb-3">
          <select
            name="role"
            className="form-select"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="donar">Donor</option>
            <option value="hospital">Hospital</option>
            <option value="organization">Organization</option>
          </select>
        </div>

        {/* Show phone and address fields only in register */}
        {formType === "register" && (
          <>
            <div className="mb-3">
              <input
                type="text"
                name="phone"
                className="form-control"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                name="address"
                className="form-control"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
          </>
        )}

        <button type="submit" className="btn btn-primary w-100">
          {submitBtn}
        </button>
      </form>
    </>
  );
};

export default Form;
