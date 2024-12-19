import React, { useState } from 'react';
import NotificationBar from './NotificationBar'; // Import the NotificationBar component

const VerificationForm = () => {
  const [verificationForm, setVerificationForm] = useState({
    cnic: "",
    dob: "",
    meritNo: "",
    subject: "",
    spscRollNo: "",
  });

  const [showNotification, setShowNotification] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setVerificationForm((prevForm) => ({
      ...prevForm,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Verification Form Data Submitted:", verificationForm);

    // Simulate form submission success and show notification
    setShowNotification(true);
  };

  const handleNotificationButtonClick = () => {
    // Redirect to registration form or show the form here
    console.log("Redirecting to the registration form...");
  };

  return (
    <div className="verifictaion-container">
      {/* Show notification if the state is true */}
      {showNotification && (
        <NotificationBar 
          message="Congratulations your verification is complete" 
          onButtonClick={handleNotificationButtonClick} 
        />
      )}

      {/* Left side with image and overlay */}
      <div className="verifictaion-image"></div>

      {/* Right side with text */}
      <div className="verifictaion-text bg-green-600">
        {/* Right Section */}
        <div className="bg-white p-8 md:w-1/2 h-full md:h-auto rounded-lg shadow-lg">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-green-600">Welcome to CED</h2>
            <p className="text-gray-500">Login in to your account to continue</p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* CNIC */}
            <div>
              <input
                type="number"
                placeholder="CNIC"
                id="cnic"
                value={verificationForm.cnic}
                onChange={handleInputChange}
                className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            {/* Date of Birth */}
            <div>
              <input
                type="date"
                placeholder="Date of Birth"
                id='dob'
                value={verificationForm.dob}
                onChange={handleInputChange}
                className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Merit No */}
            <div>
              <input
                type="number"
                placeholder="Merit No"
                id="meritNo"
                value={verificationForm.meritNo}
                onChange={handleInputChange}
                className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Subject */}
            <div>
              <input
                type="text"
                placeholder="Subject"
                id="subject"
                value={verificationForm.subject}
                onChange={handleInputChange}
                className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* SPSC Roll No */}
            <div>
              <input
                type="number"
                placeholder="SPSC Roll No"
                id="spscRollNo"
                value={verificationForm.spscRollNo}
                onChange={handleInputChange}
                className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white rounded-full py-2 hover:bg-green-700 transition"
            >
              Verify
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              Don’t have an account?{" "}
              <a href="#" className="text-green-600 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationForm;
