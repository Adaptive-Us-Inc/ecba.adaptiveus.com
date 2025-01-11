import React, { useState } from 'react'
import FormPopup from '../others/FormPopup';

const ExamEligible = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);
     const [isDownloadRequested, setIsDownloadRequested] = useState(false);
    
        const handleApplyNowClick = () => {
            setIsDownloadRequested(false);
            setPopupVisible(true);
        };

    const requirements = [
        {
            title: "Basic Business and IT Knowledge",
            description: "Have a foundational understanding of business and IT concepts."
        },
        {
            title: "English Proficiency",
            description: "Be comfortable engaging with course materials in English."
        },
        {
            title: "Technical Requirements",
            description: "Have access to a computer or laptop with a functional microphone, speaker, and  high-speed internet (>2Mbps)."
        },
        {
            title: "Learning Environment",
            description: "Ensure a noise-free setting for uninterrupted online classes."
        }
    ];

    return (
        <div>
            <div className="container mx-auto px-4 py-10 space-y-6 " id='eligibility' >
                <div className="space-y-2">
                    <h2 className='text-black text-xl md:text-4xl font-semibold text-center ' >Exam Eligibility for <span className='text-gradient' >ECBA</span> </h2>
                    <p className='text-sec text-sm md:text-lg text-center ' >This course is ideal for aspiring Business Analysts, recent graduates, or professionals transitioning into business analysis.</p>
                </div>
                <div className="space-y-10">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                            {requirements.map((req, index) => (
                                <div
                                    key={index}
                                    className="bg-[#ffffff] rounded-lg shadow-lg p-6 flex flex-col items-start text-left border border-red-500 hover:shadow-xl transition duration-300"
                                >
                                    <h3 className="text-base md:text-xl font-bold lg:text-nowrap text-gradient mb-4">{req.title}</h3>
                                    <p className="text-sm md:text-lg text-gray-800  ">{req.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center justify-center">

                        <button className="text-base md:text-lg bg-custom-gradient py-2 px-3 md:py-2 md:px-4 rounded-md text-white" onClick={handleApplyNowClick} >
                        Check Your Eligibility
                        </button>
                        <FormPopup isVisible={isPopupVisible} onClose={() => {
                            setPopupVisible(false);
                            setIsDownloadRequested(false);
                        }}
                            isDownloadRequested={isDownloadRequested} /> 

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExamEligible
