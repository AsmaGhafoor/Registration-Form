import React from "react";
import { useNavigate } from "react-router-dom";
// import backgroundImage from "../assets/background.jpg";
// import "../styles/Background.css"; // Import external CSS file

const Background = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/reg"); // Route to registration component
    };

    return (
        <div className="background-container">
            {/* Background Overlay */}
            <div className="background-overlay"></div>

            {/* Animated Shapes */}
            <div className="shape shape-blue"></div>
            <div className="shape shape-purple"></div>

            {/* Text and Button Content */}
            <div className="content-container">
                <h1 className="welcome-text">Welcome for Newly Appointed Lecturers</h1>
                <button
                    type="submit"
                    onClick={handleClick}
                    className="registration-button"
                >
                    Click here for Registration
                </button>
            </div>
        </div>
    );
};

export default Background;
