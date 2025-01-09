import React, { useEffect, useState } from 'react';
import Form from './Form';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import Popup from './Success';
import Image from 'next/image';
import logo from '../../../public/logo.svg';
import money from '../../../public/images/why-us/money-bag.svg';
import RunGuarantee from '../../../public/images/why-us/Run Guarantee.svg';
import SuccessGuarantee from '../../../public/images/why-us/SuccessGuarantee.svg';
import EndorsedCourses from '../../../public/images/why-us/EndorsedCourses.svg';
import Tick from '../../../public/images/why-us/Subtract.svg';

const PopUp = ({ children }: { children: React.ReactNode }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleAnswer = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {
        const firstVisit = sessionStorage.getItem('hasVisited') === null;

        if (firstVisit) {
            const timer = setTimeout(() => {
                setIsModalOpen(true);
                sessionStorage.setItem('hasVisited', 'true');
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSuccessMessage(null);
    };

    const handleFormSuccess = (message: string) => {
        setSuccessMessage(message);
        setIsModalOpen(false);
    };

    const buildCareer = [
        { img: EndorsedCourses, text: 'Endorsed Courses' },
        { img: SuccessGuarantee, text: 'Success Guarantee' },
        { img: money, text: 'Money Back Guarantee' },
        { img: RunGuarantee, text: 'Run Guarantee' },
    ];

    const mockQuestions = [
        'IIBA Prep Training By IIBA Experts',
        'Success Guarantee + 2 Free Retakes + 12 Months Support',
        '2000+ Successful IIBA Certifications',
        'IIBA PD Hours, Study Guide, Question Bank, Simulations',
        'Benefits Up to $1000 Now',
    ];

    return (
        <div>
            {children}

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="relative flex flex-col md:flex-row rounded-md bg-white p-2 py-2 md:p-6 max-w-full md:max-w-[1066px]">
                        <button
                            onClick={handleCloseModal}
                            className="absolute text-black md:text-white size-8 md:-top-5 -right-2 -top-1 md:-right-9 rounded-full text-xl"
                        >
                            <IoMdCloseCircleOutline />
                        </button>
                        {/* Desktop View */}
                        <div className="hidden md:flex gap-x-5">
                            <div className="space-y-5">
                                <div className="p-2 space-y-4">
                                    <div className="flex justify-start items-center gap-x-2">
                                        <h2 className="text-xl font-normal text-black">
                                            Build your BA career with{' '}
                                        </h2>
                                        <Image src={logo} alt="logo" className="w-[200px]" />
                                    </div>
                                    <div className="flex flex-row border border-red-600 rounded-lg p-4 gap-8 justify-center items-center">
                                        {buildCareer.map((item, index) => (
                                            <div key={index} className="flex flex-col items-center">
                                                <div className="bg-white w-fit p-2.5 border flex justify-center items-center border-black rounded-full mb-2">
                                                    <Image src={item.img} alt="logo" className="w-10" />
                                                </div>
                                                <p className="text-black text-xs text-center">{item.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-6 px-5">
                                    {mockQuestions.map((item, index) => (
                                        <div key={index} className="flex items-center gap-4">
                                            <div className="w-6 h-6 flex-shrink-0">
                                                <Image src={Tick} alt="Tick icon" className="w-full h-full" />
                                            </div>
                                            <p className="text-black text-sm md:text-base">{item}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-start">
                                    <p className="text-black mt-5 text-base px-5 font-semibold">
                                        Get{' '}
                                        <span className="text-red-500">50 Free CBDA Mock Questions </span>& More{' '}
                                        <span className="text-green-500">@ USD 0!</span>
                                    </p>
                                </div>
                            </div>
                            <div className="border p-4 rounded-lg">
                                <Form onClose={() => { }} onSuccess={handleFormSuccess} />
                            </div>
                        </div>
                        {/* Mobile View */}
                        <div className="flex flex-col w-full bg-white py-2 px-5 md:hidden  rounded-lg shadow-md">
                            <button
                                className="w-full py-3 text-center px-4 text-black font-medium border-b"
                                onClick={() => toggleAnswer(0)}
                            >
                                Course Details
                            </button>
                            <div className={`overflow-hidden p-1 space-y-3 transition-all duration-300 ${activeIndex === 0 ? 'max-h-screen' : 'max-h-0'}`}>
                                <div className="space-y-2">
                                    <div className="flex flex-col justify-start items-center gap-x-1">
                                        <h2 className="text-base text-nowrap font-normal text-black">
                                            Build your BA career with{' '}
                                        </h2>
                                        <Image src={logo} alt="logo" className="w-40" />
                                    </div>
                                    <div className="grid grid-cols-2 border border-red-600 rounded-lg p-3 gap-1 justify-center items-center">
                                        {buildCareer.map((item, index) => (
                                            <div key={index} className="flex flex-col items-center">
                                                <div className="bg-white w-fit p-2 border flex justify-center items-center border-black rounded-full mb-2">
                                                    <Image src={item.img} alt="logo" className="w-6" />
                                                </div>
                                                <p className="text-black text-xs w-20 text-center">{item.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-3 px-5">
                                    {mockQuestions.map((item, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <div className="flex-shrink-0">
                                                <Image src={Tick} alt="Tick icon" className="w-4 h-4 md:w-full md:h-full" />
                                            </div>
                                            <p className="text-black text-xs">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Accordion: Form */}
                            <button
                                className="w-full text-center py-3 px-4 text-blue-500 underline text-sm font-medium border-b"
                                onClick={() => toggleAnswer(2)}
                            >
                                Apply Now
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${activeIndex === 2 ? 'max-h-screen' : 'max-h-0'}`}>
                                <div className="py-4">
                                    <Form onClose={() => { }} onSuccess={handleFormSuccess} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {successMessage && (
                <Popup
                    title="Success!"
                    message={successMessage}
                    onClose={() => setSuccessMessage(null)}
                />
            )}
        </div>
    );
};

export default PopUp;
