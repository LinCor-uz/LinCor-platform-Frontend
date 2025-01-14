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
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

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
            <Header></Header>
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
                    <h2 className="text-white mb-6 lg:mb-[40px] font-extrabold text-2xl sm:text-3xl lg:text-[56px]">
                        Topik darsliklar
                    </h2>
                    <p className="font-normal text-sm sm:text-base lg:text-[16px] mb-8 lg:mb-[68px] text-white w-full lg:w-80">
                        Bu darsliklari sizning yuqori daraja olishingizga yordam beradi.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 lg:gap-0">
                        <div className="w-full sm:w-[421px] lg:w-[421px] h-auto lg:h-[300px] bg-white p-4 lg:pt-4 lg:pl-8 lg:pb-4 rounded-[20px]">
                            <h3 className="font-bold mt-4 text-xl sm:text-2xl lg:text-[48px] text-blue-700 mb-4">
                                Topik I
                            </h3>
                            <p className="text-blue-500 w-full sm:w-[310px] mt-4 lg:mt-6 mb-6 lg:mb-10 text-sm sm:text-base">
                                Bu darsliklari sizning yuqori daraja olishingizga yordam beradi.
                            </p>
                            <div className="flex items-center gap-4">
                                <span className="bg-blue-600 flex text-white items-center justify-center w-[40px] lg:w-[50px] h-[40px] lg:h-[50px] p-4 rounded-full">
                                    <img src={playvideo} alt="play" />
                                </span>
                                <p className="text-sm sm:text-base">24 Video</p>
                            </div>
                            <div className="w-full mt-6 border-[1px] border-slate-300"></div>
                            <div className="mt-3 mb-2">
                                <img className="cursor-pointer" src={vectortwon} alt="icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="w-full max-w-[1366px] mx-auto border-[1px] border-slate-300 mb-4"></div>

            <section className="max-w-[1366px] mx-auto mt-[83px] px-4">
                <div className="container flex flex-col lg:flex-row gap-8 lg:gap-[108px] max-w-[1360px] mx-auto">
                    {/* Text section */}
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-[#1A1A1A] text-2xl sm:text-4xl lg:text-[56px] font-bold mb-4">
                            Markazimiz
                        </h3>
                        <p className="text-[#5C5C5C] text-sm sm:text-base lg:text-[18px] font-normal w-full lg:w-[309px]">
                            Bu topik darsliklari sizning yuqori daraja olishingizga yordam beradi.
                        </p>
                    </div>
                    {/* Images section */}
                    <div className="flex flex-wrap sm:flex-nowrap mt-[20px] gap-4 w-full lg:w-[420px] h-auto lg:h-[250px]">
                        {images.map((image, index) => (
                            <img
                                key={image.id}
                                src={image.src}
                                alt={`Slide ${index + 1}`}
                                className={`cursor-pointer rounded-lg transition-all duration-300 ${activeImage === index
                                    ? "w-[70%] sm:w-3/4 h-auto"
                                    : "w-[80px] sm:w-[107px] h-auto opacity-70"
                                    }`}
                                onClick={() => handleClick(index)}
                            />
                        ))}
                    </div>
                </div>
            </section>


            <div className="w-full max-w-[1366px] mx-auto border-[1px] border-slate-300 mb-4"></div>


            <div className="max-w-[1400px] mx-auto p-8">
                <div className="max-w-[1360px] h-auto md:h-[604px] p-10 bg-[#F5F5F5] rounded-xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-12 md:gap-80">
                        {/* Images Section */}
                        <div className="relative w-64 h-64 mx-auto md:mx-0">
                            {/* Only one image for mobile */}
                            <div className="block md:hidden w-48 h-48 rounded-full overflow-hidden bg-gray-200 mx-auto">
                                <img src={professor} alt="Teacher" className="w-full h-full object-cover" />
                            </div>

                            {/* All images for larger screens */}
                            <div className="hidden md:block">
                                <div className="absolute top-20 left-16 md:left-64 w-32 md:w-48 h-32 md:h-48 rounded-full overflow-hidden bg-gray-200">
                                    <img src={koreanpng} alt="Student 1" className="w-full h-full object-cover" />
                                </div>

                                <div className="absolute top-20 right-4 w-32 md:w-48 h-32 md:h-48 rounded-full overflow-hidden bg-gray-200">
                                    <img src={koreanpng} alt="Student 2" className="w-full h-full object-cover" />
                                </div>

                                <div className="absolute top-56 md:top-72 left-8 md:left-12 w-32 md:w-48 h-32 md:h-48 rounded-full overflow-hidden bg-gray-200">
                                    <img src={professor} alt="Teacher" className="w-full h-full object-cover" />
                                </div>

                                <div className="absolute top-56 md:top-72 left-40 md:left-64 w-32 md:w-48 h-32 md:h-48 rounded-full overflow-hidden bg-gray-200">
                                    <img src={koreanpng} alt="Student 3" className="w-full h-full object-cover" />
                                </div>

                                <div className="absolute top-[200px] md:top-[280px] left-[120px] md:left-[250px] -translate-x-1/2 -translate-y-1/2 w-[60px] md:w-[90px] h-[60px] md:h-[90px] bg-blue-600 transform rotate-45 flex items-center justify-center">
                                    <span className="text-white text-[10px] md:text-xs transform -rotate-45">린 코르</span>
                                </div>
                            </div>
                        </div>

                        {/* Text Section */}
                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-[30px] sm:text-[40px] md:text-[50px] mt-10 md:mt-20 mx-auto md:ml-32 text-[#1A1A1A] w-full md:w-[352px] font-[700] mb-4">
                                O'qituvchilarni sarasi bizda!
                            </h1>
                            <p className="text-[#5C5C5C] text-[14px] sm:text-[16px] md:text-[18px] font-normal w-full md:w-[339px] mx-auto md:ml-32">
                                Bu topik darsliklari sizning yuqori daraja olishingizga yordam beradi
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-full max-w-[1366px] mx-auto border-[1px] border-slate-300 mb-4"></div>

            <div className="container max-w-[1366px] mb-4 mx-auto px-4 py-12 md:py-16">
                <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-center md:items-start">
                    {/* Text Section */}
                    <div className="flex flex-col justify-center space-y-6 text-center md:text-left">
                        <h1 className="text-[#1A1A1A] text-[36px] md:text-[56px] font-extrabold tracking-tight">
                            Koreaga Go
                        </h1>
                        <p className="text-gray-600 text-lg md:text-xl max-w-md mx-auto md:mx-0">
                            Bu topik darsliklari sizning yuqori daraja olishingizga yordam beradi
                        </p>
                        <div>
                            <button className="bg-blue-600 mt-6 md:mt-10 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
                                Boshladik
                            </button>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="flex flex-col gap-4">
                        {/* Mobile View: Single Image */}
                        <div className="block md:hidden">
                            <img
                                src={obraznovie}
                                alt="Graduates"
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>

                        {/* Desktop View: Grid of Images */}
                        <div className="hidden md:grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-4">
                                <img
                                    src={obraznovie}
                                    alt="Graduates"
                                    className="w-full h-[206px] object-cover rounded-lg"
                                />
                                <img
                                    src={obraznovie3}
                                    alt="Busan cityscape"
                                    className="w-full h-[206px] object-cover rounded-lg"
                                />
                            </div>
                            <div className="flex flex-col gap-4">
                                <img
                                    src={obraznovie2}
                                    alt="Venice canal"
                                    className="w-full h-[206px] object-cover rounded-lg"
                                />
                                <img
                                    src={obraznovie}
                                    alt="Graduates celebration"
                                    className="w-full h-[206px] object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-[1366px] mx-auto border-[1px] border-slate-300 mb-12"></div>

            <section className='mb-12'>
                <div className="container max-w-[1366px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="content p-6 sm:p-8 md:p-12 bg-gray-50 rounded-[12px]">
                        <h2 className='text-[#1A1A1A] text-[36px] sm:text-[44px] md:text-[56px] font-extrabold mb-8 sm:mb-10 md:mb-12'>
                            Maslahatlar
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8 sm:mb-10 md:mb-12">
                            {cards.map((card) => (
                                <div
                                    key={card.id}
                                    className="flex-1 min-w-[250px] sm:min-w-[300px] bg-white p-4 sm:p-6 rounded-[16px] shadow-sm snap-start 
                        hover:bg-orange-50 transition-all ease-in duration-300"
                                >
                                    <h2 className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">{card.title}</h2>
                                    <div className="border-[1px] mb-3 sm:mb-4"></div>
                                    <ul className="space-y-3 sm:space-y-4">
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
                <div className="container flex flex-col md:flex-row justify-between items-center max-w-[1366px] h-auto md:h-[580px] mx-auto bg-[#1D68F9] mb-12 rounded-xl p-6 sm:p-10 md:p-20">
                    <div className="content w-full md:w-[420px] mb-6 md:mb-0">
                        <h1 className="text-white text-[36px] sm:text-[44px] md:text-[56px] leading-[44px] sm:leading-[52px] md:leading-[64px] font-bold mb-6 sm:mb-8">
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
                    <div className="w-full md:w-auto flex justify-center">
                        <img className="w-[80%] md:w-auto mt-[20px] md:mt-[34px]" src={photofx} alt="" />
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
}

export default Main;
