import React, { useState, useRef } from 'react';
import heroimage from '../../public/heroimage.png';
import playvideo from '../../public/polygonplay.png';
import video from '../../public/video.png';
import vectortwon from '../../public/vectortwon.png';
import koreanpng from '../../public/koreanpng.png';
import professor from '../../public/professor.png';
import confident from '../../public/confident.png'
import obraznovie from '../../public/obraznovie.png'
import obraznovie2 from '../../public/obraznovie2.png'
import obraznovie3 from '../../public/obraznovie3.png'
import photofx from '../../public/photofx.png'

function Main() {

    const [activeImage, setActiveImage] = useState(0);
    // const scrollContainerRef = useRef(null)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    })


    const images = [
        { id: 1, src: confident },
        { id: 2, src: confident },
        { id: 3, src: confident },
    ];

    const handleClick = (index) => {
        setActiveImage(index);
    };

    // const scroll = (direction) => {
    //     if (scrollContainerRef.current) {
    //         const scrollAmount = 300
    //         scrollContainerRef.current.scrollBy({
    //             left: direction === 'left' ? -scrollAmount : scrollAmount,
    //             behavior: 'smooth'
    //         })
    //     }
    // }

    const cards = [
        {
            id: 1,
            title: "Eshmatov Toshmat",
            points: [
                "Bu topik darsliklari sizning yuqori daraja olishingizga",
                "Bu topik darsliklari sizning yuqori daraja olishingizga"
            ]
        },
        {
            id: 2,
            title: "Eshmatov Toshmat",
            points: [
                "Bu topik darsliklari sizning yuqori daraja olishingizga",
                "Bu topik darsliklari sizning yuqori daraja olishingizga"
            ]
        },
        {
            id: 3,
            title: "Eshmatov Toshmat",
            points: [
                "Bu topik darsliklari sizning yuqori daraja olishingizga",
                "Bu topik darsliklari sizning yuqori daraja olishingizga"
            ]
        },
        {
            id: 4,
            title: "Eshmatov Toshmat",
            points: [
                "Bu topik darsliklari sizning yuqori daraja olishingizga",
                "Bu topik darsliklari sizning yuqori daraja olishingizga"
            ]
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }


    return (
        <div>
            <section className="flex flex-col lg:flex-row items-center mt-[60px] justify-center gap-8 lg:gap-48 mb-20 px-4">
                <div className="flex flex-col lg:flex-row items-center h-auto lg:h-[560px] rounded-[20px] text-white p-10 w-full lg:w-[1386px] bg-[#1D68F9]">
                    <div className="lg:w-1/2">
                        <h1 className="text-3xl lg:text-6xl font-bold -mt-[10px] mb-[20px] lg:mb-[40px]">
                            Online til o‘rgan koreada o‘qi!
                        </h1>
                        <p className="text-sm lg:text-base text-gray-300 w-full lg:w-[220px] mb-6 lg:mb-10">
                            Bitta saytni o‘zida bilim oling testdan o‘ting koreaga boring!
                        </p>
                        <button className="w-full lg:w-[234px] bg-white mt-10 lg:mt-20 p-2 rounded-full text-blue-600 font-bold gap-[10px] flex items-center justify-between">
                            <span className="ml-4">Birinchi Dars</span>
                            <span className="bg-blue-600 flex text-white items-center justify-center w-[50px] lg:w-[65px] h-[50px] lg:h-[65px] p-4 rounded-full">
                                <img src={playvideo} alt="play" />
                            </span>
                        </button>
                    </div>
                    <div className="mt-6 lg:mt-0 lg:ml-56 -mb-[40px]">
                        <img className="w-full lg:w-[800px] lg:h-[520px]" src={heroimage} alt="Hero" />
                    </div>
                </div>
            </section>

            <section className="max-w-[1366px] mx-auto mb-12 px-4">
                <div className="mb-12 text-center lg:text-left">
                    <h3 className="font-extrabold text-3xl lg:text-5xl text-[#1A1A1A] mb-[24px]">Kurslar</h3>
                    <p className="font-normal text-base lg:text-xl text-[#5C5C5C] mx-auto lg:mx-0 lg:w-80 mb-[64px]">
                        Bu darsliklari sizning yuqori daraja olishingizga yordam beradi.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {['Boshlang‘ich', 'O‘rta', 'Yuqori'].map((title, index) => (
                        <div key={index} className="w-full p-[40px] bg-[#1D68F9] rounded-[20px]">
                            <h3 className="font-bold text-2xl lg:text-[32px] text-white mb-4">{title}</h3>
                            <p className="font-normal text-white text-sm lg:text-[16px] mb-10">
                                Siz yigirma beshtadan darslarni olasiz yigirma beshtadan ortiq darslarni olasiz.
                            </p>
                            <button className="bg-white px-8 py-4 rounded-[20px] text-black text-[16px] font-[500]">
                                Boshladik
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            <div className="max-w-[1366px] mx-auto mb-12 px-4">
                <img className="w-full" src={video} alt="Video" />
            </div>
            <div className="w-full max-w-[1366px] mx-auto border-[1px] border-slate-300 mb-12"></div>

            <section className="max-w-[1366px] mx-auto mb-12 px-4">
                <div className="p-6 lg:p-12 bg-[#FF9D7B] rounded-[20px]">
                    <h2 className="text-white mb-[40px] font-extrabold text-3xl lg:text-[56px]">
                        Topik darsliklar
                    </h2>
                    <p className="font-normal text-sm lg:text-[16px] mb-[68px] text-white w-full lg:w-80">
                        Bu darsliklari sizning yuqori daraja olishingizga yordam beradi.
                    </p>
                    <div className="w-[421px] h-[300px] bg-white lg:pt-4 lg:pl-8 lg:pb-4 rounded-[20px]">
                        <h3 className="font-bold mt-4 text-2xl lg:text-[48px] text-blue-700 mb-4">Topik I</h3>
                        <p className="text-blue-500 w-[310px] mt-6 mb-10 text-sm lg:text-base">
                            Bu darsliklari sizning yuqori daraja olishingizga yordam beradi.
                        </p>
                        <div className="flex items-center gap-4">
                            <span className="bg-blue-600 flex text-white items-center justify-center w-[40px] lg:w-[50px] h-[40px] lg:h-[50px] p-4 rounded-full">
                                <img src={playvideo} alt="play" />
                            </span>
                            <p>24 Video</p>
                        </div>
                        <div className="w-full mt-6 border-[1px] border-slate-300"></div>
                        <div className="mt-3 mb-2">
                            <img className='cursor-pointer' src={vectortwon} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <div className="w-full max-w-[1366px] mx-auto border-[1px] border-slate-300 mb-4"></div>

            <section className="max-w-[1366px] mx-auto mt-[83px] px-4">
                <div className="container flex gap-[108px] max-w-[1360px] h-[350px] mx-auto">
                    <div className="w-1/2">
                        <h3 className="flex justify-start text-[#1A1A1A] text-[56px] font-bold mb-4">Markazimiz</h3>
                        <p className="text-[#5C5C5C] text-[18px] font-normal] w-[309px]">
                            Bu topik darsliklari sizning yuqori daraja olishingizga yordam
                            beradi.
                        </p>
                    </div>
                    <div className="flex mt-[20px] gap-4 w-[420px] h-[250px]">
                        {images.map((image, index) => (
                            <img
                                key={image.id}
                                src={image.src}
                                alt={`Slide ${index + 1}`}
                                className={`cursor-pointer rounded-lg transition-all duration-300 ${activeImage === index
                                    ? "w-3/4 h-auto"
                                    : "w-[107px] h-auto opacity-70"
                                    }`}
                                onClick={() => handleClick(index)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <div className="w-full max-w-[1366px] mx-auto border-[1px] border-slate-300 mb-4"></div>


            <div className="max-w-[1400px] mx-auto p-8">
                <div className="max-w-[1360px] h-[604px] p-10 bg-[#F5F5F5] rounded-xl mx-auto">
                    <div className="flex flex-col md:flex-row items-start justify-between gap-80">
                        <div className="relative w-64 h-64">
                            <div className="absolute top-20 left-64 w-48 h-48 rounded-full overflow-hidden bg-gray-200">
                                <img src={koreanpng} alt="Student 1" className="w-full h-full object-cover" />
                            </div>

                            <div className="absolute top-20 right-4 w-48 h-48 rounded-full overflow-hidden bg-gray-200">
                                <img src={koreanpng} alt="Student 2" className="w-full h-full object-cover" />
                            </div>

                            <div className="absolute top-72 left-12 w-48 h-48 rounded-full overflow-hidden bg-gray-200">
                                <img src={professor} alt="Teacher" className="w-full h-full object-cover" />
                            </div>

                            <div className="absolute top-72 left-64 w-48 h-48 rounded-full overflow-hidden bg-gray-200">
                                <img src={koreanpng} alt="Student 3" className="w-full h-full object-cover" />
                            </div>

                            <div className="absolute top-[280px] left-[250px] -translate-x-1/2 -translate-y-1/2 w-[90px] h-[90px] bg-blue-600 transform rotate-45 flex items-center justify-center">
                                <span className="text-white text-xs transform -rotate-45">린 코르</span>
                            </div>
                        </div>

                        <div className="flex-1">
                            <h1 className="text-[50px] mt-20 ml-32 text-[#1A1A1A] w-[352px] font-[700] mb-4">O'qituvchilarni sarasi bizda!</h1>
                            <p className="text-[#5C5C5C] text-[18px] font-normal w-[339px] ml-32">Bu topik darsliklari sizning yuqori daraja olishingizga yordam beradi</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-[1366px] mx-auto border-[1px] border-slate-300 mb-4"></div>

            <div className="container max-w-[1366px] mb-4 mx-auto px-4 py-12 md:py-16">
                <div className="flex items-start justify-between md:grid-cols-2 gap-8">
                    <div className="flex flex-col justify-center space-y-6">
                        <h1 className="text-[#1A1A1A] text-[56px] font-extrabold md:text-5xl font-bold tracking-tight">
                            Koreaga Go
                        </h1>
                        <p className="text-gray-600 text-lg md:text-xl max-w-md">
                            Bu topik darsliklari sizning yuqori daraja olishingizga yordam beradi
                        </p>
                        <div>
                            <button className="bg-blue-600 mt-10 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
                                Boshladik
                            </button>
                        </div>
                    </div>

                    <div className="">
                        <div className="flex w-[455px] gap-4 mb-4">
                            <img
                                src={obraznovie}
                                alt="Graduates"
                                className="w-[206px] h-[206px] object-cover rounded-lg"
                            />
                            <img
                                src={obraznovie2}
                                alt="Venice canal"
                                className="w-full h-[206px] object-cover rounded-lg"
                            />
                        </div>
                        <div className='flex gap-4'>
                            <img
                                src={obraznovie3}
                                alt="Busan cityscape"
                                className="w-[456px] h-[206] object-cover rounded-lg col-span-2"
                            />
                            <img
                                src={obraznovie}
                                alt="Graduates celebration"
                                className="w-[206px] h-[206] object-cover rounded-lg col-span-2"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[1366px] mx-auto border-[1px] border-slate-300 mb-12"></div>

            <section className='mb-12'>
                <div className="container max-w-[1366px] mx-auto">
                    <div className="content p-12 bg-gray-50 rounded-[12px]">
                        <h2 className='text-[#1A1A1A] text-[56px] font-extrabold mb-12'>Maslahatlar</h2>
                        <div

                            className="flex gap-6 mb-12"
                        >
                            {cards.map((card) => (
                                <div
                                    key={card.id}
                                    className="min-w-[300px] bg-white p-6 rounded-[16px] shadow-sm snap-start 
                                    hover:bg-orange-50 transition-all ease-in duration-300"
                                >
                                    <h2 className="text-xl font-medium mb-4">{card.title}</h2>
                                    <div className="border-[1px] mb-4"></div>

                                    <ul className="space-y-4">
                                        {card.points.map((point, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <span className="w-2 h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                                                <p className="text-gray-600 hover:text-orange-500">{point}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-end gap-1">
                            <button className="bg-white w-10 p-1 text-orange-400 rounded-s-3xl hover:bg-orange-50">↩</button>
                            <button className="bg-white w-10 p-1 text-orange-400 rounded-e-3xl hover:bg-orange-50">↪</button>
                        </div>

                    </div>
                </div>
            </section>


            <div className="w-full max-w-[1366px] mx-auto border-[1px] border-slate-300 mb-12"></div>

            <section>
                <div className="container justify-between flex max-w-[1366px] h-[580px] mx-auto bg-[#1D68F9] mb-12 rounded-xl p-20">
                    <div className="content w-[420px]">
                        <h1 className="text-white text-[56px] leading-[64px] font-bold mb-8">
                            Xabar yuborish.
                        </h1>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Ism"
                                className="w-full p-3 rounded-lg bg-blue-500/50 text-white placeholder-blue-200 border-none focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            />

                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Telefon nomer"
                                className="w-full p-3 rounded-lg bg-blue-500/50 text-white placeholder-blue-200 border-none focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            />

                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Xabar yuborish"
                                rows="4"
                                className="w-full p-3 rounded-lg bg-blue-500/50 text-white placeholder-blue-200 border-none focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
                            />

                            <button
                                type="submit"
                                className="w-full bg-white text-blue-600 font-medium py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors"
                            >
                                Yuborish
                            </button>
                        </form>

                    </div>
                    <div className=''>
                        <img className="mt-[34px]" src={photofx} alt="" />
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Main;
