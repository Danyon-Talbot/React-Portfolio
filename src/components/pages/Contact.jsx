import React, { useState } from "react";

export const Contact = () => {
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
        e.preventDefault();
        const { name, email, message } = formData;
        let isValid = true;

        const errors = {
            nameError: "",
            emailError: "",
            messageError: "",
        };

        if (!name.trim()) {
            errors.nameError = "Name is Required";
            isValid = False;
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            errors.emailError = "Invalid email format";
            isValid = false;
        }

        if (!message.trim()) {
            errors.messageError = "Message is Required";
        }

        setFormErrors(errors);

        if (isValid) {
            console.log("Form Submitted", formData);
        }
    };

    return (
        <div className="App">
          <h1>Contact Us</h1>
          <form onSubmit={handleChange}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <span className="error">{formErrors.nameError}</span>
            </div>
    
            <div className="form-group">
              <label>Email:</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <span className="error">{formErrors.emailError}</span>
            </div>
    
            <div className="form-group">
              <label>Message:</label>
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