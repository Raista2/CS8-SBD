import { useState, useEffect, useCallback } from 'react'

// Import semua gambar carousel
import ITT from './assets/Carousel/It-Takes-Two-Main.avif'
import Madden from './assets/Carousel/Madden.jpg'
import NFS from './assets/Carousel/NFS.jpg'
import SIMS from './assets/Carousel/SIMS.jpg'
import Apex from './assets/Carousel/ApexLegend.jpg'

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    
    // Array gambar-gambar carousel
    const images = [
        { src: ITT, alt: "It Takes Two", title: "It Takes Two" },
        { src: Madden, alt: "Madden NFL", title: "Madden NFL" },
        { src: NFS, alt: "Need For Speed", title: "Need For Speed" },
        { src: SIMS, alt: "The Sims", title: "The Sims" },
        { src: Apex, alt: "Apex Legends", title: "Apex Legends" }
    ];

    // Fungsi untuk pindah ke slide berikutnya
    const nextSlide = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            setIsTransitioning(false);
        }, 500); // Waktu transisi fade out/in
    }, [isTransitioning, images.length]);

    // Fungsi untuk pindah ke slide sebelumnya
    const prevSlide = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            setIsTransitioning(false);
        }, 500);
    }, [isTransitioning, images.length]);

    // Effect untuk otomatis berganti slide setiap 3 detik
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(interval);
    }, [nextSlide]);

    // Handle touch events for mobile swipe
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 75) {
            // Swipe left, go to next slide
            nextSlide();
        }

        if (touchStart - touchEnd < -75) {
            // Swipe right, go to prev slide
            prevSlide();
        }

        // Reset values
        setTouchStart(0);
        setTouchEnd(0);
    };

    return (
        <div 
            id="games" 
            className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] relative overflow-hidden mt-16 md:mt-20 z-10"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {/* Carousel images */}
            <div className="w-full h-full">
                {images.map((image, index) => (
                    <div 
                        key={index} 
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        } ${isTransitioning ? 'opacity-50' : ''}`}
                    >
                        <img 
                            src={image.src} 
                            alt={image.alt} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 md:p-4">
                            <h2 className="text-xl md:text-2xl font-bold">{image.title}</h2>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation arrows - hidden on small screens */}
            <button 
                onClick={prevSlide}
                className="hidden sm:block absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-20 hover:bg-opacity-75"
            >
                <svg className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button 
                onClick={nextSlide}
                className="hidden sm:block absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-20 hover:bg-opacity-75"
            >
                <svg className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Indicators */}
            <div className="absolute bottom-12 md:bottom-20 left-0 right-0 flex justify-center space-x-2 z-20">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            if (isTransitioning) return;
                            setIsTransitioning(true);
                            setTimeout(() => {
                                setCurrentIndex(index);
                                setIsTransitioning(false);
                            }, 500);
                        }}
                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                            index === currentIndex ? 'bg-white' : 'bg-gray-400'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Carousel;