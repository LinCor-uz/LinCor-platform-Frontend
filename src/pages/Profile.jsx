import React, { useState } from "react";

const Profile = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-[1366px] flex justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">
            Profil
          </h1>
          <p className="text-center text-gray-600 mb-6">
            Ma'lumotingizni tekshiring
          </p>
          <div className="flex flex-col items-center mb-6">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 border border-gray-300 flex justify-center items-center">
              {image ? (
                <img
                  src={image}
                  alt="Profil rasmi"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-500 text-sm">
                  JPG yoki PNG formatdagi suratni joylang
                </span>
              )}
            </div>
            <label
              htmlFor="imageUpload"
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600"
            >
              Rasm joylash
            </label>
            <input
              type="file"
              id="imageUpload"
              accept="image/png, image/jpeg"
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>
          <form>
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Ismingiz
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Ismingizni kiriting"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="lastName"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Familiyangiz
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Familiyangizni kiriting"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md text-lg font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Tasdiqlash
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
