import React, { useState, useRef } from 'react';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const img = new Image();
      img.src = URL.createObjectURL(file);

      img.onload = () => {
        const width = img.width;
        const height = img.height;

        setImage(img.src);
        setError(null);
      };
    }
  };

  const triggerFileInput = () => fileInputRef.current.click();

  const handleDeleteImage = () => setImage(null);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full sm:w-96 md:w-[400px] lg:w-[450px]">
        <input
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          ref={fileInputRef}
          onChange={handleImageChange}
        />

        {image ? (
          <div className="relative w-full h-[150px] sm:h-[160px] md:h-[170px] lg:h-[180px] border-4 border-gray-500 rounded-md overflow-hidden">
            <img
              src={image}
              alt="Uploaded"
              className="w-full h-full object-cover rounded-md"
            />
            <button
              onClick={handleDeleteImage}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 p-2 rounded-full shadow-md hover:bg-red-700"
              aria-label="Delete Image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ) : (
          <button
            className="w-full sm:w-40 h-full sm:h-40 border-2 border-gray-500 p-1 rounded flex flex-col justify-center items-center"
            type="button"
            onClick={triggerFileInput}
          >
            <img
              className="w-12"
              src="https://www.svgrepo.com/show/485545/upload-cicle.svg"
              alt="file upload icon"
            />
            <span className="block text-base font-semibold text-blue-900 mt-2">
              Upload a Image
            </span>
            <span className="block text-sm text-gray-500">Size should be 35mm to 45mm</span>
          </button>
        )}
        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
      </div>
    </div>
  );
};

export default ImageUpload;
