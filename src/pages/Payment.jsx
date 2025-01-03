import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export default function Payment() {
  return (
    <div>
      <Header />

      {/* Kurslar Section */}
      <section className="py-12">
        <div className="max-w-[1366px] mx-auto px-4 justify-self-start">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Kurslar</h1>
          <p className="text-gray-600 mb-8">
            Bu darsliklari sizning yuqori daraja olishingizga yordam beradi
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Kurs Cards */}
            {[ 
              { title: "Boshlang‘ich daraja", price: "320 000 so'm" },
              { title: "O’rta daraja", price: "320 000 so'm" },
              { title: "Yuqori daraja", price: "320 000 so'm" },
            ].map((kurs, index) => (
              <div
                key={index}
                className="bg-blue-500 text-white p-8 rounded-[20px] shadow-md flex flex-col items-start text-left"
              >
                <h2 className="text-xl font-semibold mb-2">{kurs.title}</h2>
                <p className="text-sm mb-4">
                  Siz yigirma beshtadan darslarni olasiz yigirma beshtadan ortiq
                  darslarni olasiz
                </p>
                <div className="flex items-center mb-4 justify-end">
                  <div className="bg-white text-blue-500 rounded-full p-1 flex items-center justify-center w-8 h-8">
                    <FontAwesomeIcon icon={faPlay} className="text-lg" />
                  </div>
                  <p className="text-sm font-medium ml-2">24 Video <span>+ Workbook</span></p>
                </div>

                <span className="block font-semibold text-lg mb-4">{kurs.price}</span>
                <button className="bg-white text-blue-500 py-2 px-4 rounded-lg font-medium hover:bg-gray-100 transition">
                  Sotib olish
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topik Section */}
      <section className="py-12">
        <div className="max-w-[1366px] mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Topik</h1>
          <p className="text-gray-600 mb-8">
            Bu darsliklari sizning yuqori daraja olishingizga yordam beradi
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Topik Cards */}
            {[ 
              { title: "Topik I", price: "320 000 so'm" },
              { title: "Topik II", price: "320 000 so'm" },
              { title: "EPS-Topik", price: "320 000 so'm" },
            ].map((topik, index) => (
              <div
                key={index}
                className="bg-[#F19474] text-white p-8 rounded-[20px] shadow-md flex flex-col  items-start text-left"
              >
                <h2 className="text-xl font-semibold mb-2">{topik.title}</h2>
                <p className="text-sm mb-4">
                  Siz yigirma beshtadan darslarni olasiz yigirma beshtadan ortiq
                  darslarni olasiz
                </p>
                <div className="flex items-center mb-4 justify-end">
                  <div className="bg-white text-[#F19474] rounded-full p-1 flex items-center justify-center w-8 h-8">
                    <FontAwesomeIcon icon={faPlay} className="text-lg" />
                  </div>
                  <p className="text-sm font-medium ml-2">24 Video </p>
                </div>
                <span className="block font-semibold text-lg mb-4">{topik.price}</span>
                <button className="bg-white text-blue-500 py-2 px-4 rounded-lg font-medium hover:bg-gray-100 transition">
                  Sotib olish
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
