import React from "react";
import { useNavigate } from "react-router-dom";
// import backgroundImage from "../assets/background.jpg";
// import "../styles/Background.css"; // Import external CSS file

const Background = () => {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate("/registration"); // Route to registration component
    };

    const handleCertificateClick = () => {
        navigate("/certificate"); // Route to certificate generation component (update as needed)
    };

    const handleVerificationClick = () => {
        navigate("/verificationform");
    };

    return (
        <>
            <div className="background-container">

            </div>

            {/* Text Content */}
            <div className="registration-text">
                <h2 className="text-2xl font-bold text-center text-white p-4">
                    Newly recruited lecturers are required to complete this
                    mandatory database registration and submit the certificate
                    along with offer acceptance.
                </h2>
            </div>

            {/* Buttons Content */}
            <div className="button-container">
                <button type="submit" onClick={handleVerificationClick}
                    className="mt-2 bg-green-600 text-white font-bold py-1 px-6 rounded-full hover:bg-green-700 shadow-md hover:shadow-lg transition duration-300">
                    Go for Registration
                </button>
                <button
                    type="button"
                    onClick={handleRegisterClick}
                    className="registration-button"
                >
                    Click here for Registration
                </button>
                <button
                    type="button"
                    onClick={handleCertificateClick}
                    className="generate-button"
                >
                    Generate Certificate (Already Registered)
                </button>
            </div>
        </>


    );
};

export default Background;
