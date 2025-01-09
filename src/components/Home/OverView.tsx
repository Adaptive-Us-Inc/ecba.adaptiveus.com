import Image from 'next/image'
import React, { useState } from 'react'
// import overview from '../../../public/images/Adaptive-US-EEP-Certificate 2024.webp'
import overview from '../../../public/images/Adaptive US Inc. - EEP Certificate 2024-2025.svg'
import FormPopup from '../others/FormPopup';

const OverView = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [isDownloadRequested, setIsDownloadRequested] = useState(false);

    const handleApplyNowClick = () => {
        setIsDownloadRequested(false);
        setPopupVisible(true);
    };
    return (
        <div className="text-black py-10  " id='overview'>
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-x-5">
                {/* Left Section with Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col gap-y-2 md:gap-y-5">
                    <h2 className="text-2xl md:text-4xl font-semibold text-gray-800">Overview</h2>
                    <p className="text-sm md:text-lg text-gray-700">
                        Prepare to excel in your career with our industry-leading CBAP Training, designed for aspiring Certified Business Analysis Professionals.
                        This comprehensive program offers 42+ hours of live interactive sessions led by BABOK authors and exam setters, ensuring in-depth knowledge of BABOK V3.
                    </p>

                    <ul className="list-disc pl-5 space-y-2 text-base text-gray-700">
                        <h2 className='text-lg md:text-2xl text-black ' >Our course includes:</h2>
                        <li className='text-sm md:text-base' >35 IIBA PD Hours to meet certification requirements.</li>
                        <li className='text-sm md:text-base' >2300+ Practice Questions and real-world case studies for thorough exam preparation.</li>
                        <li className='text-sm md:text-base' >180+ days Access to course materials and session recordings for continuous learning.</li>
                        <li className='text-sm md:text-base' >Expert insights, tips, and strategies to crack the CBAP exam on your first attempt.</li>
                    </ul>

                    <p className="mt-4 text-sm md:text-lg text-gray-700">
                        Join 850+ successful CBAP-certified professionals who have advanced their careers with Adaptive's trusted program. Unlock your potential and become a recognized expert in Business Analysis!
                    </p>

                    <button className="mt-5 px-3 py-1.5 w-fit bg-custom-gradient text-base md:text-lg text-white rounded-md hover:bg-blue-700 transition-colors" onClick={handleApplyNowClick} >
                        Enroll Now and Achieve Your Prestigious CBAP Certification!
                    </button>
                    <FormPopup isVisible={isPopupVisible} onClose={() => {
                        setPopupVisible(false);
                        setIsDownloadRequested(false);
                    }}
                        isDownloadRequested={isDownloadRequested} />
                </div>

                {/* Right Section with Image */}
                <div className="w-full md:w-2/4 mt-10 md:mt-0">
                    <Image
                        src={overview}
                        alt="CBAP Training"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </div>
    )
}

export default OverView
