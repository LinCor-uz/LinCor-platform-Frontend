import React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import contactImage from '../../public/photofx.png';

function Contact() {
  return (
    <div>
      <Header />
      {/* Main Content */}
      <main className="max-w-[1366px] mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Aloqa</h1>
        <p className="text-gray-600 mb-8">Bizga murojaat qilmoqchi bo‘lsangiz</p>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card for Contact Info */}
          <div className="bg-blue-500 p-8 rounded-lg shadow-md text-white">
            <h2 className="text-lg font-semibold">Aloqa ma'lumoti</h2>
            <p className="mt-2">Tel: +99899 000-99-01</p>
            <p>E-Mail: example@gmail.com</p>
          </div>
          {/* Card for Address */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-blue-500">
            <h2 className="text-lg font-semibold text-blue-500">Manzil</h2>
            <p className="mt-2">2260 Lady Bug Drive, New York, NY 10011</p>
          </div>
          {/* Card for Working Hours */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-blue-500">
            <h2 className="text-lg font-semibold text-blue-500">Ish Vaqti</h2>
            <p className="mt-2">Monday - Friday</p>
            <p>10:00 AM - 7:30 PM</p>
          </div>
        </div>

        {/* Contact Form with Image */}
        <div className="bg-blue-500 p-12 rounded-lg shadow-md mb-12">
          <div className="flex flex-col md:flex-row gap-6">

            {/* Contact Form */}
            <section className="p-6 rounded-lg flex-1  ">
              <h2 className="text-2xl font-bold mb-4 text-white">Xabar yuboring.</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Ism"
                  className="p-3 bg-[#4A86FA] rounded-lg border border-gray-300 focus:ring-2 focus:outline-none focus:ring-blue-400 text-white placeholder:text-white"
                />
                <input
                  type="text"
                  placeholder="Telefon nomer"
                  className="p-3 bg-[#4A86FA] rounded-lg border border-gray-300 focus:ring-2 focus:outline-none focus:ring-blue-400 text-white placeholder:text-white"
                />
                <textarea
                  placeholder="Xabar yuboring"
                  rows="4"
                  className="p-3 bg-[#4A86FA] rounded-lg border border-gray-300 focus:ring-2 focus:outline-none focus:ring-blue-400 text-white placeholder:text-white col-span-1 md:col-span-2"
                />
                <button
                  type="submit"
                  className="bg-white text-blue-500 py-2 px-6 rounded-lg font-medium hover:bg-gray-100 transition col-span-1 md:col-span-2"
                >
                  Yuborish
                </button>
              </form>
            </section>

            {/* Image Section */}
            <div className="relative flex-1">
              <img
                src={contactImage}
                alt="contactImage"
                className="max-w-full h-auto object-cover rounded-b-lg"
              />
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;

