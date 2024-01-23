import React, { useState } from "react";
import "./ContactForm.css"; // Import your CSS file

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    nameError: "",
    emailError: "",
    messageError: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic here
    const newFormErrors = {};

    if (!formData.name.trim()) {
      newFormErrors.nameError = "Name is required";
    } else {
      newFormErrors.nameError = "";
    }

    // Validate email format (You can use a library like "validator" for more robust email validation)
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newFormErrors.emailError = "Email is invalid";
    } else {
      newFormErrors.emailError = "";
    }

    if (!formData.message.trim()) {
      newFormErrors.messageError = "Message is required";
    } else {
      newFormErrors.messageError = "";
    }

    setFormErrors(newFormErrors);

    // If there are no errors, you can submit the form data
    if (
      Object.values(newFormErrors).every((error) => error === "") &&
      Object.values(formData).every((field) => field.trim() !== "")
    ) {
      // Perform form submission or other actions here
      console.log("Form data submitted:", formData);
    }
  };

  return (
    <div className="form-container">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <span className="error">{formErrors.nameError}</span>
        </div>

        <div className="form-group">
          <label className="label">Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <span className="error">{formErrors.emailError}</span>
        </div>

        <div className="form-group">
          <label className="label">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <span className="error">{formErrors.messageError}</span>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


