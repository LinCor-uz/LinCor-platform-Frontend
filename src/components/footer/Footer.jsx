import React from 'react'
import appstore from '../../../public/appstore.svg'
import instagram from '../../../public/instagram.svg'
import facebook from '../../../public/f.svg'
import telegram from '../../../public/telegram.svg'
import playmarket from '../../../public/playmarket.svg'

function Footer() {
    return (
        <div>
            <footer className="bg-gray-100 max-w-[1366px] mx-auto rounded-xl mb-12 text-gray-700 p-6">
                <div className="container max-w-[1360px] h-[220px] flex gap-[150px]">
                    <div className='w-[204px] flex flex-col gap-4'>
                        <a href="lincor" className='text-blue-700 text-[32px] font-extrabold'>LinCor</a>
                        <p className="text-sm">Bizning saytdan foydalanib
                            o’z bilimingizni oshirib boring.</p>
                        <span className='flex gap-4 items-center'>
                            <a className='bg-white p-2 rounded-md shadow-md hover:bg-blue-100 ease duration-200' href="http://instagram.com">
                                <img src={instagram} alt="instagram" />
                            </a>
                            <a className='bg-white p-2 rounded-md shadow-md hover:bg-blue-100 ease duration-200' href="http://facebook.com">
                                <img src={facebook} alt="facebook" />
                            </a>
                            <a className='bg-white p-2 rounded-md shadow-md hover:bg-blue-100 ease duration-200' href="https://t.me/programmer_19">
                                <img src={telegram} alt="telegram" />
                            </a>
                        </span>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-[#1A1A1A] text-[24px] font-bold mb-2'>Kurslar</h3>
                        <a className='text-[#5C5C5C] text-[16px] font-normal hover:text-blue-600 ease duration-200' href="">Boshlang‘ich daraja</a>
                        <a className='text-[#5C5C5C] text-[16px] font-normal hover:text-blue-600 ease duration-200' href="">o‘rta daraja</a>
                        <a className='text-[#5C5C5C] text-[16px] font-normal hover:text-blue-600 ease duration-200' href="">yuqori daraja</a>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-[#1A1A1A] text-[24px] font-bold mb-2'>Topik</h3>
                        <a className='text-[#5C5C5C] text-[16px] font-normal hover:text-blue-600 ease duration-200' href="">Topik I</a>
                        <a className='text-[#5C5C5C] text-[16px] font-normal hover:text-blue-600 ease duration-200' href="">Topik II</a>
                        <a className='text-[#5C5C5C] text-[16px] font-normal hover:text-blue-600 ease duration-200' href="">EPS-Topik</a>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-[#1A1A1A] text-[24px] font-bold mb-2'>Aloqa</h3>
                        <a className='text-[#5C5C5C] text-[16px] font-normal hover:text-blue-600 ease duration-200' href="">Tel: +99899 000-99-01</a>
                        <a className='text-[#5C5C5C] text-[16px] font-normal hover:text-blue-600 ease duration-200' href="">E-mail: examplry@gmail.com</a>
                        <div className="flex gap-4">
                            <button className='bg-black items-center rounded-md w-[170px] p-1 flex gap-5'>
                                <img src={appstore} alt="App Store" />
                                <span>
                                    <p className='text-white text-[12px] font-normal'>Dowloand on the</p>
                                    <p className='text-white text-[18px] font-bold'>App Store</p>
                                </span>
                            </button>
                            <button className='bg-black items-center rounded-md w-[170px] p-1 flex gap-5'>
                                <img className='w-[35px]' src={playmarket} alt="Google Play" />
                                <span>
                                    <p className='text-white text-[12px] font-normal'>GET IN ON</p>
                                    <p className='text-white text-[18px] font-bold'>Google Play</p>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-[1366px] mx-auto border-[1px] border-slate-300 mb-6"></div>
                <h3>Barcha huquqlar himoyalangan 2023 </h3>
            </footer>

        </div>
    )
}

export default Footer