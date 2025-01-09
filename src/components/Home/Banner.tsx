import React, { useState } from 'react';
import Peoples from '../../../public/images/Banner/peoples.svg';
import Image from 'next/image';
import Form from '../others/Form';
import FormPopup from '../others/FormPopup';
import Popup from '../others/Success';
import { FcGoogle } from 'react-icons/fc';

const Banner = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [isDownloadRequested, setIsDownloadRequested] = useState(false);

    const handleApplyNowClick = () => {
        setIsDownloadRequested(false);
        setPopupVisible(true);
    };

    const handleFormSuccess = (message: string) => {
        setSuccessMessage(message);
    };

    const handleClosePopup = () => {
        setPopupVisible(false);
        setSuccessMessage(null);
    };

    const points = [
        'IIBA Approved Courseware',
        '2 Free Retakes',
        'Success Guaranteed',
        '850+ CBAP Certified',
    ];

    return (
        <div className="bg-[#F5EEE9]" id="banner">
            <div className="container mx-auto px-4 py-10 md:py-12 lg:py-16 text-black flex flex-col md:flex-row items-center gap-y-5 md:gap-x-12 lg:gap-x-20">
                {/* Left Section */}
                <div className="w-full md:w-1/2 flex flex-col gap-y-4">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                        <span className="text-gradient">CBAP</span> Certification Training
                    </h2>
                    <div className="text-sm md:text-base lg:text-xl mt-2 text-gray-600">
                        Certified Business Analyst Professionals Earn{' '}
                        <span className="font-semibold text-gray-800">60% Higher</span> Than
                        Non-Certified Professionals!
                    </div>
                    <div className="mt-4 space-y-2">
                        <ul className="space-y-2">
                            {points?.map((item, index) => (
                                <li
                                    key={index}
                                    className="text-gray-700 flex items-center space-x-2"
                                >
                                    <span className="w-2 h-2 rounded-full bg-custom-gradient"></span>
                                    <span className="text-sm md:text-base lg:text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col md:flex-col lg:flex-row items-center gap-4 mt-4">
                        {/* Star Rating */}
                        <div className="border-y-2 w-full md:w-full lg:w-60 border-black/50 py-2 md:py-3 lg:py-3 flex justify-center gap-x-4 px-5 lg:px-10">
                            <div className="flex justify-center items-center gap-x-2 text-sm">
                                <span className='' ><FcGoogle className='size-8' /></span><span className='text-sm md:text-base font-normal text-nowrap ' > 4.9/5, 322 reviews</span>
                            </div>
                        </div>
                        <div className="bg-pink-400/10 md:w-full lg:w-fit md:justify-between lg:justify-normal text-black py-3 lg:py-3 px-4 rounded-lg flex gap-x-3">
                            <Image src={Peoples} alt="peoples" />
                            <div className="text-sm md:text-base lg:text-lg">
                                <span className="bg-gradient-to-r font-medium from-orange-500 to-pink-500 bg-clip-text text-transparent">
                                    8000+
                                </span>{' '}
                                <br /> Enrolled
                            </div>
                        </div>
                    </div>
                    <button
                        className="text-base md:text-base lg:text-lg w-fit bg-custom-gradient py-1 px-2 md:py-1.5 md:px-3 rounded-md text-white"
                        onClick={handleApplyNowClick}
                    >
                        Unlock Your Potential With Expert Guidance
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

                {/* Right Section */}
                <div className="w-full bg-white md:w-1/2 lg:w-2/5 border px-5 lg:px-10 py-8 rounded-lg">
                    <Form
                        onClose={() => { }}
                        onSuccess={handleFormSuccess}
                    />
                    {successMessage && (
                        <Popup
                            title="Success!"
                            message={successMessage}
                            onClose={handleClosePopup}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Banner;
