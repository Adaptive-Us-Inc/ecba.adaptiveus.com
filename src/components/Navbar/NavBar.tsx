import React, { useState } from 'react';
import logo from '../../../public/logo.svg'
import Image from 'next/image';
import { MdOutlinePlayCircle } from 'react-icons/md';
import FormPopup from '../others/FormPopup';

const NavBar = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [isDownloadRequested, setIsDownloadRequested] = useState(false);

    const handleBrochureClick = () => {
        setIsDownloadRequested(true);
        setPopupVisible(true);
    };

    return (
        <div className='bg-white border max-h-20'>
            <div className="container mx-auto py-3 md:py-5 flex justify-between px-4 md:px-10">
                <Image src={logo} alt='logo' className='w-60 lg:max-w-sm h-auto' />
                <div className="hidden md:flex justify-center items-center gap-x-10 text-black">
                    <button 
                        className='flex items-center gap-x-2 text-base border py-2 px-3 font-[500] rounded-md hover:border-black/40'
                        onClick={handleBrochureClick}
                    >
                        <span><MdOutlinePlayCircle className='size-6' /></span>
                        Download Brochure
                    </button>
                    <button 
                        className='bg-custom-gradient px-3 py-2 text-white rounded-md transition-transform hover:scale-105'
                        onClick={() => {
                            setIsDownloadRequested(false);
                            setPopupVisible(true);
                        }}
                    >
                        Apply Now
                    </button>
                    <FormPopup 
                        isVisible={isPopupVisible} 
                        onClose={() => {
                            setPopupVisible(false);
                            setIsDownloadRequested(false);
                        }}
                        isDownloadRequested={isDownloadRequested}
                    />
                </div>
            </div>
        </div>
    );
};

export default NavBar;