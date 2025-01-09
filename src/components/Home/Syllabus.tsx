import React, { useState } from 'react';
import book from '../../../public/images/Cbap.png';
import Image from 'next/image';
import FormPopup from '../others/FormPopup';

const Syllabus = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [isDownloadRequested, setIsDownloadRequested] = useState(false);

    const handleBrochureClick = () => {
        setIsDownloadRequested(true);
        setPopupVisible(true);
    };

    return (
        <section className="bg-white" id="syllabus">
            <div className="container mx-auto py-10 px-4 md:py-16 md:px-6 flex flex-col lg:flex-row items-center justify-between gap-y-4 md:gap-8">
                {/* Left Content */}
                <div className="md:w-3/4 flex flex-col gap-y-5 text-center lg:text-left">
                    <h2 className="text-lg lg:text-3xl font-bold text-black leading-snug">
                        Kickstart your CBAP journey! <br />
                        Download the syllabus now and explore a pathway to comprehensive learning.
                    </h2>
                    <div className="flex justify-center items-center">
                        <button className="px-4 md:px-8 py-2 md:py-3 w-fit text-base md:text-lg bg-custom-gradient text-white rounded-full shadow-md hover:shadow-lg hover:scale-105 transition duration-300" onClick={handleBrochureClick} >
                            Download Brochure
                        </button>
                    </div>
                    <FormPopup isVisible={isPopupVisible} onClose={() => {
                        setPopupVisible(false);
                        setIsDownloadRequested(false);
                    }}
                        isDownloadRequested={isDownloadRequested} />

                </div>

                <div className="">
                    <Image
                        src={book}
                        alt="Book"
                        className="w-40 h-40 md:w-60 md:h-auto object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </div>
        </section>
    );
};

export default Syllabus;
