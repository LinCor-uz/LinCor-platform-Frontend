import React from "react";

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-[1366px] flex justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">
            Ro'yxatdan o'tish
          </h1>
          <p className="text-center text-gray-600 mb-6">
            Bizga qo'shiling!{" "}
            <a href="#" className="text-blue-500 font-medium">
              Ro'yxatdan o'tish
            </a>
          </p>
          <form>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Telefon raqamingiz
              </label>
              <input
                type="text"
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Telefon raqamingizni kiriting"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Yangi parol
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Yangi parolni kiriting"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="confirm-password"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Yangi parolni takrorlash
              </label>
              <input
                type="password"
                id="confirm-password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Parolni takrorlang"
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

export default Register;
