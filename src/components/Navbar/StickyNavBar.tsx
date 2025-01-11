import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlinePlayCircle } from 'react-icons/md';
import FormPopup from '../others/FormPopup';

interface LinkItem {
    href: string;
    label: string;
}

const StickyNavBar = () => {
    const [isDownloadRequested, setIsDownloadRequested] = useState(false);
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const scrollRef = useRef<HTMLDivElement | null>(null);
    
    const links: LinkItem[] = [
        { href: "#overview", label: "Overview" },
        { href: "#Why-choose-us", label: "Why Choose Us?" },
        { href: "#syllabus", label: "Syllabus" },
        { href: "#course-price-plans", label: "ECBA Course Price Plans" },
        { href: "#eligibility", label: "Eligibility" },
        { href: "#reviews", label: "Reviews" },
        { href: "#trainers", label: "Trainers" },
        { href: "#faq", label: "FAQ" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const bannerElement = document.querySelector('#banner') as HTMLElement;
            if (bannerElement) {
                const bannerHeight = bannerElement.offsetHeight;
                const scrollPosition = window.scrollY;
                const triggerPoint = bannerHeight * 0.7;
                setIsVisible(scrollPosition > triggerPoint);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleWheelScroll = (event: WheelEvent) => {
            if (scrollRef.current) {
                event.preventDefault();
                scrollRef.current.scrollBy({ left: event.deltaY, behavior: 'smooth' });
            }
        };

        const currentRef = scrollRef.current;
        if (currentRef) {
            currentRef.addEventListener('wheel', handleWheelScroll);
        }

        return () => {
            if (currentRef) {
                currentRef.removeEventListener('wheel', handleWheelScroll);
            }
        };
    }, []);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        const navbarHeight = document.querySelector('header')?.offsetHeight || 0;
        const yOffset = -60;
        const offsetTop = targetElement ? targetElement.getBoundingClientRect().top + window.scrollY + yOffset - navbarHeight : 0;

        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    };

    const handleBrochureClick = () => {
        setIsDownloadRequested(true);
        setPopupVisible(true);
    };

    const handleApplyNowClick = () => {
        setIsDownloadRequested(false);
        setPopupVisible(true);
    };

    useEffect(() => {
        if (isPopupVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isPopupVisible]);

    return (
        <>
            {/* Sticky Top Navbar */}
            <div className={`fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-3xl shadow-md transform transition-transform duration-300 z-40 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="md:max-w-6xl lg:max-w-6xl mx-auto md:px-4 py-2 md:py-6 flex md:justify-between items-center">
                    <div className="w-96 md:w-full lg:w-2/3 flex justify-between items-center">
                        <button onClick={scrollLeft} className="text-gray-500 hover:text-gray-900 p-2">
                            <MdKeyboardArrowLeft size={25} />
                        </button>

                        <div ref={scrollRef} className="flex items-center space-x-10 overflow-x-auto no-scrollbar">
                            {links.map((items, index) => (
                                <Link
                                    key={index}
                                    href={items.href}
                                    className="text-black text-base md:text-base lg:text-lg hover:text-gray-900 whitespace-nowrap"
                                    onClick={(e) => handleLinkClick(e, items.href)}
                                >
                                    {items.label}
                                </Link>
                            ))}
                        </div>
                        <button onClick={scrollRight} className="text-gray-500 hover:text-gray-900 p-2">
                            <MdKeyboardArrowRight size={25} />
                        </button>
                    </div>

                    <div className="hidden lg:flex items-center space-x-4">
                        <button
                            className="flex items-center gap-x-2 text-nowrap text-base border text-black py-2 px-3 font-[500] rounded-md hover:border-black/40"
                            onClick={handleBrochureClick}
                        >
                            <span><MdOutlinePlayCircle className="size-6" /></span>
                            Download Brochure
                        </button>
                        <button
                            className="px-6 py-2 bg-custom-gradient text-nowrap text-white rounded-md hover:bg-[#c91920]"
                            onClick={handleApplyNowClick}
                        >
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Sticky Buttons for Mobile */}
            <div className={`fixed bottom-0 left-0 right-0 bg-white shadow-md py-6 px-2 flex justify-between gap-x-4 items-center z-50 lg:hidden transform transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
                <button
                    className="flex items-center gap-x-2 text-nowrap text-xs border text-black py-2 px-3 font-[500] rounded-md hover:border-black/40"
                    onClick={handleBrochureClick}
                >
                    <span><MdOutlinePlayCircle className="size-6" /></span>
                    Download Brochure
                </button>
                <button
                    className="px-6 py-3 bg-custom-gradient text-xs text-nowrap text-white rounded-md hover:bg-[#c91920]"
                    onClick={handleApplyNowClick}
                >
                    Apply Now
                </button>
            </div>

            <FormPopup 
                isVisible={isPopupVisible} 
                onClose={() => {
                    setPopupVisible(false);
                    setIsDownloadRequested(false);
                }}
                isDownloadRequested={isDownloadRequested} 
            />
        </>
    );
};

export default StickyNavBar;