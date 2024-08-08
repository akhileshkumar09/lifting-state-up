import React from 'react';

function StepOne({ formData, handleChange }) {
  return (
    <div>
      <h2>Step 1: Personal Information</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

function StepTwo({ formData, handleChange }) {
  return (
    <div>
      <h2>Step 2: Contact Information</h2>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

function StepThree({ formData, handleChange }) {
  return (
    <div>
      <h2>Step 3: Address</h2>
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        City:
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Zip Code:
        <input
          type="text"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export { StepOne, StepTwo, StepThree };
