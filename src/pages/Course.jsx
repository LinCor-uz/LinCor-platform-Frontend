import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Card from '../components/card/Card';
import Card2 from '../components/card/Card2';
import teachervideo from '../../public/confident-teacher.png';

function Course() {
    const videos = [
        { id: 1, title: "Bo'g'in oxirida ikkitalik undosh bo'lsa", time: "12:34", isActive: true },
        { id: 2, title: "Bo'g'in oxirida ikkitalik undosh bo'lsa", time: "12:34", isActive: true },
        { id: 3, title: "Keyingi bo'g'in", time: "10:12", isActive: false },
        { id: 4, title: "Bo'g'in oxirida ikkitalik undosh bo'lsa", time: "08:45", isActive: false },
        { id: 5, title: "Keyingi bo'g'in", time: "15:00", isActive: false },
        { id: 6, title: "Bo'g'in oxirida ikkitalik undosh bo'lsa", time: "09:34", isActive: false },
        { id: 7, title: "Keyingi bo'g'in", time: "15:50", isActive: false },
        { id: 8, title: "Bo'g'in oxirida ikkitalik undosh bo'lsa", time: "09:34", isActive: false },
    ];

    return (
        <div>
            <Header />
            <section className='video mb-8 md:mb-12'>
                <div className='container px-4 md:px-6 max-w-[1366px] mx-auto'>
                    <h3 className='text-[#1A1A1A] mt-6 md:mt-12 mb-4 font-normal text-sm md:text-[14px]'>Boshlangich daraja</h3>
                    <img src={teachervideo} alt="confident teacher video" className='w-full rounded-lg' />
                    <p className='font-medium w-full md:w-[605px] mt-4 text-[#1A1A1A] text-base md:text-[20px]'>Bo'g'in oxirida ikkitalik undosh bo'lsa keyingi bo'g'in Bo'g'in oxirida ikkitalik undosh bo'lsa keyingi bo'g'in </p>
                    <div className="w-full max-w-[1366px] mx-auto border-[1px] mt-4 border-slate-300 mb-4"></div>

                    <div className="flex flex-col md:flex-row mt-6 md:mt-8 items-start md:items-center justify-between gap-6 md:gap-4">
                        <h3 className='font-bold text-[#1A1A1A] text-2xl md:text-[32px]'>Boshlang'ich Course</h3>
                        <span className='flex items-center gap-4 text-sm md:text-[16px] font-medium text-[#5C5C5C]'>24 video <p className='font-extrabold text-[#1A1A1A] text-lg md:text-[20px]'>+</p> workbook</span>
                        <span className='text-[#D15260] font-medium text-xl md:text-[24px] flex flex-col'>
                            320 000 so'm
                            <span className='text-xs md:text-[14px] flex justify-end text-[#909090] font-bold'>6 oy uchun</span>
                        </span>
                        <button className='w-full md:w-auto bg-[#1D68F9] text-white px-6 md:px-[120px] py-4 md:py-[16px] rounded-[28px] font-bold text-base md:text-[16px] hover:bg-blue-900 ease-in-out duration-300 active:bg-blue-600'>
                            Sotib Olish
                        </button>
                    </div>
                    <div className="w-full max-w-[1366px] mx-auto border-[1px] mt-8 md:mt-10 border-slate-300 mb-4"></div>
                </div>
            </section>

            <section className='mb-8 md:mb-12'>
                <div className='container px-4 md:px-6 max-w-[1366px] mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-12'>
                    <div className="flex flex-col justify-between gap-8 md:gap-0">
                        <h2 className='text-black font-bold text-2xl md:text-[32px] leading-tight'>Video darsliklar</h2>

                        <div className="w-full md:w-96 rounded-[20px] bg-[#F5F5F5] p-5 md:p-7">
                            <h3 className='text-2xl md:text-[32px] mb-2 font-bold text-[#1A1A1A]'>Workbook</h3>
                            <p className='text-[#5C5C5C] text-sm md:text-[16px] font-normal max-w-[240px]'>Workbook mashqlar bajarish uchun yuklab oling</p>
                            <div className="flex items-center gap-4">
                                <button className='px-6 md:px-[52px] mt-8 md:mt-12 py-3 md:py-[14px] text-white font-bold bg-[#1F6AFA] rounded-[20px]'>
                                    Yuklab olish
                                </button>
                                <button className='flex items-center justify-center w-12 h-12 mt-8 md:mt-12 bg-[#1F6AFA33] rounded-[50%] text-blue-900'>
                                    <i className="fa-solid fa-download"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="videolar w-full md:w-[900px]">
                        <div className="space-y-2">
                            {videos.map((video) => (
                                <div
                                    key={video.id}
                                    className={`flex items-center justify-between p-3 md:p-4 rounded-lg ${video.isActive ? 'bg-blue-100' : 'bg-gray-100'}`}
                                >
                                    <div className="flex items-center">
                                        <button
                                            className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full mr-3 md:mr-4 ${video.isActive ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                                        >
                                            {video.isActive ? '▶' : '🔒'}
                                        </button>
                                        <div>
                                            <h3 className="text-xs md:text-sm font-semibold">{video.title}</h3>
                                            <p className="text-[10px] md:text-xs text-gray-500">Keyingi Bo'g'in</p>
                                        </div>
                                    </div>
                                    <p className="text-xs md:text-sm text-gray-600">{video.time}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="w-full max-w-[1320px] mx-auto border-[1px] mt-8 md:mt-10 border-slate-300 mb-8 md:mb-12"></div>

            <section className='mb-8 md:mb-12'>
                <div className="container flex justify-between px-4 md:px-6 max-w-[1366px] mx-auto flex flex-col md:flex-row gap-6 md:gap-4 justify-between">
                    <Card></Card>
                    <Card2></Card2>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Course;

