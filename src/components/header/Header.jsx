import React from 'react';
import vector from '../../../public/vector.png';

function Header() {
    return (
        <header className="bg-white shadow-md">
            <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">
                <div className="text-blue-600 text-2xl font-bold">
                    <a href="https://lincor" target="_blank" rel="noopener noreferrer">
                        LinCor
                    </a>
                </div>

                <nav className="hidden md:flex space-x-6">
                    <a href="/course" className="text-gray-700 hover:text-blue-600 transition">
                        Kurslar
                    </a>
                    
                    <a href="/topik" className="text-gray-700 hover:text-blue-600 transition">
                        Topik
                    </a>
                    <a href="/education" className="text-gray-700 hover:text-blue-600 transition">
                        Koreada O'qish
                    </a>
                    <a href="/buy" className="text-gray-700 hover:text-blue-600 transition">
                        To'lov
                    </a>
                    <a href="/contact" className="text-gray-700 hover:text-blue-600 transition">
                        Aloqa
                    </a>
                </nav>

                <div>
                    <button
                        className="flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-200 transition"
                        aria-label="Kirish tugmasi"
                    >
                        Kirish
                        <img src={vector} alt="vector arrow" className="ml-2 w-4" />
                    </button>
                </div>

                <div className="md:hidden">
                    <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
