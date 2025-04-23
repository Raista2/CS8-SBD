import { useState, useEffect } from 'react'
import EABar from './assets/EANavbar.svg'

function NavBar() {
    const [headerText, setHeaderText] = useState("Games");
    const [animate, setAnimate] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        const texts = [
            "Games",
            "Experience",
            "About Us"
        ];

        let currentIndex = 0;

        const intervalId = setInterval(() => {
            setAnimate(true);

            setTimeout(() => {
                currentIndex = (currentIndex + 1) % texts.length;
                setHeaderText(texts[currentIndex]);
                setAnimate(false);
            }, 500); // 500ms - waktu untuk fade out
        }, 3000); // Mengubah teks setiap 3 detik

        return () => clearInterval(intervalId);
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 w-full bg-gray-800 text-white p-4 shadow-md z-50">
            <div className="w-full px-4 flex justify-between items-center">
                <div className='flex items-center'>
                    <img src={EABar} className="h-11 w-30" alt="EA logo" />
                </div>

                <div className="relative w-36">
                    {/* Dropdown button dengan teks yang berganti */}
                    <button
                        onClick={toggleDropdown}
                        className="flex items-center gap-1 font-bold text-l hover:text-gray-300 transition-colors w-full justify-end"
                    >

                        <div className="w-50 h-8 flex items-center justify-end overflow-hidden relative">
                            <span
                                className={`transition-opacity duration-500 ${animate ? 'opacity-0' : 'opacity-100'} whitespace-nowrap`}
                            >
                                {headerText}
                            </span>
                        </div>
                        <svg
                            className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {/* Dropdown menu */}
                    {isDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 bg-gray-700 rounded-md shadow-lg p-2 min-w-[160px] z-20">
                            <a href="#games" className="block py-2 px-3 hover:bg-gray-600 rounded transition-colors">Games</a>
                            <a href="#experience" className="block py-2 px-3 hover:bg-gray-600 rounded transition-colors">Experience</a>
                            <a href="#about" className="block py-2 px-3 hover:bg-gray-600 rounded transition-colors">About Us</a>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default NavBar;