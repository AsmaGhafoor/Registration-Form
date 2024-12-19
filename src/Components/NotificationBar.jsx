import React, { useState } from "react";

const NotificationBar = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) {
        return null;
    }

    return (
        <div
            id="toast-notification"
            className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-3 max-w-sm w-full text-gray-900 dark:bg-gray-800 dark:text-gray-300 z-50"
            role="alert"
        >
            {/* Header */}
            <div className="flex items-center ml-3">
                <span className="text-sm font-semibold  text-xl">Congratulations</span>
                <img
                    className="w-8 h-8 rounded-full"
                    src="../src/assets/Congratulations.jpg"
                    alt="Profile"
                />
                <button
                    type="button"
                    className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1 inline-flex items-center justify-center h-6 w-6 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                    onClick={() => setIsVisible(false)}
                    aria-label="Close"
                >
                    <svg
                        className="w-3 h-3"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 1l6 6m0 0l6-6m-6 6l6 6m-6-6L1 13"
                        />
                    </svg>
                </button>
            </div>

            {/* Content */}
            <div className="flex items-center mt-2">
                {/* <img
                    className="w-8 h-8 rounded-full"
                    src="../src/assets/Congratulations.jpg"
                    alt="Profile"
                /> */}
                <div className="ms-3 text-sm">
                    <div className="font-semibold"> Your verification is complete now fill the registration form.</div>
                    {/* <div>commented on your photo</div> */}
                    {/* <span className="text-xs text-blue-600 dark:text-blue-500">
                        a few seconds ago
                    </span> */}
                    <div className="mb-4 flex">
                        <button type="submit"
                            className="mt-2 bg-green-600 text-white font-bold py-1 px-6 rounded-full hover:bg-green-700 shadow-md hover:shadow-lg transition duration-300">
                            Go for Registration 
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default NotificationBar;
