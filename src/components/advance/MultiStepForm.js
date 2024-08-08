import React, { useState } from 'react';
import { StepOne, StepTwo, StepThree } from './FormSteps';

function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic
    console.log('Form submitted', formData);
  };

  return (
    <div>
      <h1>Multi-Step Form</h1>
      <form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <StepOne formData={formData} handleChange={handleChange} />
        )}
        {currentStep === 2 && (
          <StepTwo formData={formData} handleChange={handleChange} />
        )}
        {currentStep === 3 && (
          <StepThree formData={formData} handleChange={handleChange} />
        )}

        <div>
          {currentStep > 1 && (
            <button type="button" onClick={handlePrevious}>
              Previous
            </button>
          )}
          {currentStep < 3 && (
            <button type="button" onClick={handleNext}>
              Next
            </button>
          )}
          {currentStep === 3 && <button type="submit">Submit</button>}
        </div>
      </form>
    </div>
  );
}

export default MultiStepForm;
