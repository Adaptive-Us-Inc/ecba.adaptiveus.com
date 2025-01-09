import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What is CBAP certification?",
            answer: "CBAP is a globally recognized certification for business analysts. It signifies expertise in business analysis."
        },
        {
            question: "How do I apply for CBAP certification?",
            answer: "You can apply for CBAP certification online through the International Institute of Business Analysis (IIBA) website, where you need to meet specific eligibility criteria."
        },
        {
            question: "What are the eligibility criteria for CBAP?",
            answer: "To apply for CBAP, you need a minimum of 7,500 hours of business analysis work experience and 35 hours of professional development within the last 10 years."
        },
        {
            question: "What is the CBAP exam format?",
            answer: "The CBAP exam consists of 120 multiple-choice questions and lasts for 4 hours."
        },
        {
            question: "How can I prepare for the CBAP exam?",
            answer: "Preparation involves studying the Business Analysis Body of Knowledge (BABOK), attending training courses, and practicing with sample questions."
        },
        {
            question: "What is the passing score for CBAP?",
            answer: "The passing score is typically around 75%, but it may vary."
        },
        {
            question: "How much does the CBAP exam cost?",
            answer: "The exam fee for IIBA members is around $325 USD."
        },
        {
            question: "How long is the CBAP certification valid?",
            answer: "CBAP certification is valid for three years."
        },
        {
            question: "How can I renew my CBAP certification?",
            answer: "To renew your certification, you need to earn Continuing Development Units (CDUs) and pay the renewal fee."
        },
        {
            question: "What is the BABOK guide?",
            answer: "The BABOK (Business Analysis Body of Knowledge) is a guide published by IIBA that defines the standard framework for business analysis practices."
        },
        {
            question: "What are the knowledge areas in BABOK?",
            answer: "The six knowledge areas in BABOK are: Business Analysis Planning and Monitoring, Elicitation and Collaboration, Requirements Life Cycle Management, Strategy Analysis, Requirements Analysis and Design Definition, and Solution Evaluation."
        },
        {
            question: "Can I apply for CBAP if I have a non-business degree?",
            answer: "Yes, having a business analysis degree is not a requirement. BA work experience is the key eligibility factor."
        },
        {
            question: "How can I document my BA work experience for CBAP?",
            answer: "You must use the IIBA Experience Verification Form to document your work experience, detailing the specific hours spent on business analysis activities."
        },
        {
            question: "How long does it take to become CBAP certified?",
            answer: "The time to certification depends on individual preparation and application processing. Typically, it takes 3 to 6 months."
        },
        {
            question: "Is CBAP training mandatory?",
            answer: "While formal training is not mandatory, it is highly recommended as part of preparation for the exam."
        },
        {
            question: "How can I earn CDUs for CBAP renewal?",
            answer: "Attend relevant training, webinars, and conferences to earn CDUs for CBAP certification renewal."
        },
        {
            question: "How can I find CBAP study materials?",
            answer: "Study guides, books, and online courses specifically designed for CBAP preparation are available from various providers, including Adaptive US."
        },
        {
            question: "Can I take the CBAP exam online?",
            answer: "Yes, CBAP exams can be taken remotely or at an authorized test center."
        },
        {
            question: "Can I apply for CBAP without IIBA membership?",
            answer: "Yes, you can apply for CBAP as a non-member, though you won’t receive member benefits, such as discounts on exam fees."
        },
        {
            question: "What is the application fee for CBAP?",
            answer: "The CBAP application fee is $145 USD, though local taxes may apply."
        },
        {
            question: "How long is the CBAP application valid?",
            answer: "Once your CBAP application is approved, it is valid for one year."
        },
        {
            question: "Can I use my CBAP certification for job opportunities?",
            answer: "Yes, CBAP certification demonstrates your expertise and enhances career prospects in business analysis."
        },
        {
            question: "How often should I renew my CBAP certification?",
            answer: "CBAP certification needs to be renewed every three years."
        },
        {
            question: "Can I take the CBAP exam without prior training?",
            answer: "While not mandatory, taking training is highly recommended as it will ensure you are fully prepared for the exam."
        },
        {
            question: "What is the CBAP application approval time?",
            answer: "Approval can be quick, but if your application is selected for audit, it may take 2-3 weeks."
        },
        {
            question: "Can I reschedule my CBAP exam?",
            answer: "Yes, you can reschedule your exam, but additional fees may apply depending on the provider."
        },
        {
            question: "Can I use CBAP study materials from previous editions?",
            answer: "It’s recommended to use the latest edition of study materials to ensure alignment with the current exam."
        },
        {
            question: "What is the pass rate for CBAP?",
            answer: "The pass rate varies, but it’s generally around 70-75%."
        },
        {
            question: "Can I apply for CBAP if I am self-employed?",
            answer: "Yes, if you meet the experience requirements, self-employed business analysts can apply for CBAP."
        },
        {
            question: "Can I apply for CBAP if I have a technical background?",
            answer: "Yes, CBAP is suitable for both technical and non-technical professionals, as long as you have relevant business analysis experience."
        },
        {
            question: "Is CBAP recognized globally?",
            answer: "Yes, CBAP is recognized and respected worldwide."
        },
        {
            question: "How can I join a CBAP study group?",
            answer: "You can join online forums, social media groups, or local business analysis networks for study group opportunities."
        },
    ];
    
    

    const toggleAnswer = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div id='faq' className='bg-secondaryBg px-4 py-10'>
            <div className="container mx-auto ">
                <h2 className='text-2xl md:text-4xl font-semibold text-center text-black'>
                    <span className='text-gradient'>Frequently</span> Asked Questions
                </h2>
                <div className="space-y-6 w-full bg-white py-2 px-4 md:py-4 md:px-10 mt-6 rounded-lg shadow-md">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b last:border-none">
                            <div
                                onClick={() => toggleAnswer(index)}
                                className="flex justify-between items-center cursor-pointer text-base md:text-xl font-semibold text-black py-4"
                            >
                                <span>{faq.question}</span>
                                <span>
                                    {activeIndex === index ? (
                                        <FaChevronUp className="text-gray-600 size-3 md:size-4 " />
                                    ) : (
                                        <FaChevronDown className="text-gray-600 size-3 md:size-4  " />
                                    )}
                                </span>
                            </div>
                            <div
                                className={`transition-all duration-500 overflow-hidden ease-in-out ${
                                    activeIndex === index ? 'max-h-96' : 'max-h-0'
                                }`}
                            >
                                {activeIndex === index && (
                                    <div className="text-black text-xs md:text-sm py-2">{faq.answer}</div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;
