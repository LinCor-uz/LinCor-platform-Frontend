import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Card from "../components/card/Card";
import Card2 from "../components/card/Card2";
import teachervideo from "../../public/confident-teacher.png";
const Coursereg = () => {
  return (
    <div>
      <Header></Header>
      <div>
  <div className="container px-4 md:px-6 max-w-[1366px] mx-auto flex flex-wrap">
    <div className="w-full lg:w-2/3">
      <h3 className="text-[#1A1A1A] mt-6 md:mt-12 mb-4 font-normal text-sm md:text-[14px]">
        Boshlangich daraja
      </h3>
      <img
        src={teachervideo}
        alt="confident teacher video"
        className="w-full md:w-[850px] h-auto rounded-lg"
      />
      <p className="font-medium w-full md:w-[605px] mt-4 text-[#1A1A1A] text-base md:text-[20px]">
        Bo'g'in oxirida ikkitalik undosh bo'lsa keyingi bo'g'in Bo'g'in
        oxirida ikkitalik undosh bo'lsa keyingi bo'g'in
      </p>
      <p className="w-full md:w-[605px] mt-4 text-[#918f8f] text-base md:text-[14px]">
        Bo’g’in oxirida ikkitalik undosh bo’lsa keyingi bo’g’in ham undosh
        bilan boshlansa, ular orasidan faqat bitta undosh o’qiladi.
        <br />
        <hr className="h-[2px] bg-gray-500 mt-4" />
        <div className="collapse collapse-arrow join-item border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium"></div>
          <div className="collapse-content">
            <p className="w-full md:w-60">
              한국어 선생님: Koreys tili o’qituvchisi 학생: O’quvchi
              한국어 수업: Koreys tili darsi 한국어 교실: Koreys tili
              darsxonasi
            </p>
          </div>
        </div>
      </p>
    </div>

    <div className="w-full lg:w-1/3 mt-8 lg:mt-16">
      <div className="w-full max-w-md mx-auto bg-white rounded-lg border-black shadow-md overflow-hidden">
        <div className="p-4">
          <h2 className="text-lg font-semibold text-blue-600 flex justify-between">
            Barcha Video Darsliklar <span className="text-gray-500 text-sm ">25 ta</span>
          </h2>
          <hr className="my-4" />
          <div className="flex items-center p-3 bg-gray-100 rounded-lg shadow-sm">
            <button className="w-12 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center">
              <i className="fas fa-play"></i>
            </button>
            <div className="ml-4 flex justify-between items-center w-full">
              <h2 className="text-sm font-medium text-gray-800">
                Bo’g’in oxirida ikkitalik undosh bo’lsa keyingi bo’g’in
              </h2>
              <div className="flex items-center">
                <span className="text-xs text-gray-500 mt-4 ml-4">12:34</span>
                <span className="w-2 h-2 bg-blue-500 rounded-full ml-2 mt-4"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-100 rounded-2xl p-6 w-72 shadow-lg mx-auto mt-5">
  <h1 class="text-2xl font-bold text-black mb-3">Workbook</h1>
  <p class="text-sm text-gray-500 mb-5">
    Workbook mashqlar bajarish uchun yuklab oling
  </p>
  <button class="bg-blue-600 text-white text-base font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
    Yuklab olish
  </button>
</div>

    </div>
  </div>
</div>


      <hr className="h-[2px] bg-gray-500 container flex justify-between px-4 md:px-6 max-w-[1366px] mx-auto" />
      <div className="container flex justify-between px-4 md:px-6 max-w-[1366px] mx-auto flex flex-col md:flex-row gap-6 md:gap-6 justify-between mt-10 mb-10">
        <Card></Card>
        <Card2></Card2>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Coursereg;
