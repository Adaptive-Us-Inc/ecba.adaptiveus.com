import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What is ECBA Certification?",
            answer: "The Entry Certificate in Business Analysis (ECBA) is an entry-level certification from the International Institute of Business Analysis (IIBA) that validates foundational knowledge in business analysis."
        },
        {
            question: "Who is ECBA Certification for?",
            answer: "It is designed for aspiring business analysts, students, and professionals transitioning into business analysis roles, regardless of prior experience."
        },
        {
            question: "What is the format of the ECBA exam?",
            answer: "The ECBA exam is a 1-hour test with 50 multiple-choice questions conducted online through a remote proctoring system."
        },
        {
            question: "What is the passing score for ECBA?",
            answer: "While IIBA does not disclose a specific passing score, it is generally estimated to be around 70-75%."
        },
        {
            question: "How long is the ECBA certification valid?",
            answer: "The ECBA certification is valid for life and does not require renewal."
        },
        {
            question: "Are there prerequisites for ECBA certification?",
            answer: "There are no specific prerequisites, such as work experience or education, making it accessible to anyone interested in business analysis."
        },
        {
            question: "What is the BABOK Guide, and how can I access it?",
            answer: "The BABOK Guide is IIBA's reference framework for business analysis practices. It is available for purchase on the IIBA website and is included free with IIBA membership."
        },
        {
            question: "How do I apply for ECBA certification?",
            answer: "You can apply online through the IIBA website by selecting the ECBA certification option and paying the required fees. No separate application process is needed."
        },
        {
            question: "What is the cost of ECBA certification?",
            answer: "The total cost includes the IIBA membership and exam fees, typically ranging from $250 to $370, depending on your location."
        },
        {
            question: "How can I prepare for the ECBA exam?",
            answer: "You can use IIBA-endorsed training courses, study guides, and practice tests. Adaptive US provides 1000+ practice questions and full-length simulations to prepare effectively."
        },
        {
            question: "Can I take the ECBA exam online?",
            answer: "Yes, the ECBA exam is conducted online and can be taken remotely from home or the workplace."
        },
        {
            question: "What study materials are available for ECBA preparation?",
            answer: "Study guides, online courses, practice tests, and resources like Adaptive US’s condensed ECBA guide are available for comprehensive preparation."
        },
        {
            question: "How long should I study for the ECBA exam?",
            answer: "Preparation time varies but typically ranges between 1-2 months, depending on prior knowledge and study dedication."
        },
        {
            question: "What are the benefits of IIBA membership?",
            answer: "Membership provides access to the BABOK Guide, discounts on certification fees, networking opportunities, and additional resources."
        },
        {
            question: "What is the role of an ECBA-certified Business Analyst?",
            answer: "ECBA-certified professionals are equipped with foundational skills to assist in business analysis activities such as requirements gathering, documentation, and stakeholder communication."
        },
        {
            question: "What is the average salary increase after ECBA certification?",
            answer: "While specific figures vary, ECBA certification can enhance your earning potential and career opportunities in business analysis."
        },
        {
            question: "Can I retake the ECBA exam if I fail?",
            answer: "Yes, you can retake the exam by paying the retake fee, which is $95. Adaptive US offers a success guarantee, covering retake fees for its training students."
        },
        {
            question: "How are ECBA results announced?",
            answer: "Results are displayed immediately after completing the exam."
        },
        {
            question: "Is the ECBA certification recognized globally?",
            answer: "Yes, ECBA is widely recognized as a benchmark for foundational business analysis skills across industries and geographies."
        },
        {
            question: "What happens after earning ECBA certification?",
            answer: "After earning ECBA, you can advance to higher-level certifications like CCBA and CBAP as you gain more experience."
        },
        {
            question: "How does Adaptive US support ECBA preparation?",
            answer: "Adaptive US provides IIBA-endorsed training, access to 1000+ practice questions, six full-length simulations, a condensed study guide, and a success guarantee for exam preparation."
        },
        {
            question: "Can students apply for ECBA certification?",
            answer: "Yes, students and individuals without prior work experience can apply for ECBA, as it is designed for beginners in business analysis."
        },
        {
            question: "How can I schedule or reschedule my ECBA exam?",
            answer: "You can schedule or reschedule your exam through the IIBA’s official testing platform. Rescheduling may involve additional fees."
        },
        {
            question: "What is the role of ECBA in career advancement?",
            answer: "ECBA serves as a strong foundation for launching a career in business analysis, leading to roles like Business Analyst, Product Analyst, and Systems Analyst."
        },
        {
            question: "Are there any additional benefits for Adaptive US students?",
            answer: "Yes, Adaptive US provides discounted ECBA exam vouchers, exclusive study materials, and a high success rate, making it a trusted choice for ECBA training."
        }
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
