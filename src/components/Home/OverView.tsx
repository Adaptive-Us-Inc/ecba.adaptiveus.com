import Image from 'next/image'
import React, { useState } from 'react'
// import overview from '../../../public/images/Adaptive-US-EEP-Certificate 2024.webp'
import overview from '../../../public/images/Adaptive US Inc. - EEP Certificate 2024-2025.svg'
import FormPopup from '../others/FormPopup';

const courseIncludes =
    ["30+ Live Interactive Hours led by industry experts and experienced trainers.",
        "21 IIBA PD Hours to meet the certification eligibility requirements.",
        "1000+ Practice Questions and hands-on assignments to strengthen your understanding of key concepts.",
        "Real-World Case Studies to bridge the gap between theory and practice.",
        "LMS Access to course materials and session recordings for continuous learning."]

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
                    <div className="space-y-2   ">
                        <h2 className='text-base md:text-xl font-semibold md:text-nowrap' >Launch Your Career with Adaptive's Industry-Leading ECBA® Training!</h2>
                        <p className="text-sm md:text-lg text-gray-700">
                            Prepare to become a successful Entry Certificate in Business Analysis (ECBA®) professional with our comprehensive training program. Tailored for aspiring Business Analysts, this program equips you with the foundational knowledge and skills to excel in business analysis and clear the ECBA® exam with confidence.
                        </p>
                    </div>

                    <ul className="list-disc pl-5 space-y-2 text-base text-gray-700">
                        <h2 className='text-lg md:text-2xl text-black ' >Our course includes:</h2>
                        {courseIncludes.map((item, index) => (
                            <li key={index} className="text-sm md:text-base">
                                {item}
                            </li>
                        ))}

                    </ul>

                    <p className="mt-4 text-sm md:text-lg text-gray-700">
                    Gain exclusive insights, expert strategies, and guidance to pass the ECBA® exam on your first attempt. Join thousands of professionals who have trusted AdaptiveUS to build their business analysis careers. Don’t miss this opportunity to unlock your potential and take the first step toward becoming a Business Analysis expert!
                    </p>

                    <button className="mt-5 px-3 py-1.5 w-fit bg-custom-gradient text-base md:text-lg text-white rounded-md hover:bg-blue-700 transition-colors" onClick={handleApplyNowClick} >
                    Enroll Now and Achieve Your ECBA® Certification!
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
                        alt="ECBA Training"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </div>
    )
}

export default OverView
