import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Settings = () => {
  return (
    <div className="container px-4 md:px-6 max-w-[1366px] mx-auto">
      <Header></Header>
      <h1 className="text-3xl mt-5 font-sans">Profil sozlamalari</h1>
      <div class="flex flex-wrap">
        <div className="bg-blue-500 text-white rounded-lg pt-6 w-[350px] border-blue-400 border-blue-400 h-72 mt-10">
          <div class="flex mb-4 bg-white text-blue-500 w-[350px] mt-10 pl-3">
            <i class="fas fa-cog w-6 h-6 mr-2 text-blue-600 mt-2"></i>
            <h1 class="text-lg font-semibold">Profil Sozlamalari</h1>
          </div>
          <div class="p-4 rounded-lg ">
            <div className="flex">
              <i class="fas fa-lock w-6 h-6 mr-2 text-white mt-2"></i>
              <h2 class="text-lg font-medium">xafsizlik</h2>
            </div>
          </div>
        </div>

       <div>
       <div className="ml-2 mt-20 flex flex-wrap">
          <div className="flex">
            <h1 className="w-24 h-24 pt-7 text-center text-3xl rounded-[100%] border-blue-500 border-2">
              SH
            </h1>
            <p className="mt-5 ml-5">
              <span className="text-2xl font-bold">Sizning Suratingiz</span>{" "}
              <br /> <span>Rasmni o’zgartirish jpg yoki png</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-4 ml-2 mt-5">
            <button class="bg-white w-40 h-12 text-black border-2 border-black rounded-2xl p-2">
              O'chirish
            </button>
            <button class="text-blue-500 w-40  h-12  border-2 border-blue-500 rounded-2xl p-2">
              Tasdiqlash
            </button>
          </div>
          
        </div> <hr  className="mt-5 ml-4 h-1 bg-gray-400"/>
        <div>
        <p className="mt-5 ml-5">
              <span className="text-2xl font-bold">Shaxsiy malumotlar</span>
              <br /> <span>Shaxsiy malumotingizni o'zgartirishingiz mumkin</span>
            </p>

            <div class="">
  <form className="flex flex-wrap ml-4 mt-10 gap-4">
    <div>
     <div className="flex flex-wrap">
     <div>
       <div class="mb-4 w-80">
      <label for="isim" class="block text-gray-700">Isim</label>
      <input type="text" id="isim" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Isim" />
    </div>
    <div class="mb-4 w-80">
      <label for="email" class="block text-gray-700">Email</label>
      <input type="email" id="email" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" />
    </div>
     </div>
    <div class="mb-4">
      <label for="familiya" class="block text-gray-700 w-80">Familiya</label>
      <input type="text" id="familiya" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Familiya" />
    </div>
     </div>
    <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none w-80">
      Tasdiqlash
    </button>
    </div>
    
    
  </form>
</div>

        </div>
        </div> 
       <div className="mt-64">
        <Footer></Footer>
       </div>
      </div>
    </div>
  );
};

export default Settings;
