import React, { useState } from "react";
import FormPopup from "../others/FormPopup";

const plans = [
    {
        title: "ECBA Master Class",
        price: "USD 749",
        oldPrice: "USD 449",
        discount: "$300 OFF",
    },
    {
        title: "ECBA Master Class with ECBA Exam Voucher",
        price: "USD 1099",
        oldPrice: "USD 749",
        discount: "$350 OFF",
    },
    {
        title: "ECBA Ultimate",
        price: "USD 1599",
        oldPrice: "USD 1199",
        discount: "$400 OFF",
    },
    {
        title: "ECBA Ultimate with ECBA Exam Voucher",
        price: "USD 1949",
        oldPrice: "USD 1499",
        discount: "$450 OFF",
    },
];

const CoursePricePlan = () => {
    const [isDownloadRequested, setIsDownloadRequested] = useState(false);
    const [isPopupVisible, setPopupVisible] = useState(false);
    const handleApplyNowClick = () => {
        setIsDownloadRequested(false);
        setPopupVisible(true);
    };

    return (
        <section className="bg-[#F5EEE9] py-16" id="course-price-plans">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 text-center mb-10">
                    ECBA Course Price Plans
                </h2>

                {/* Responsive Table */}
                <div className="overflow-x-auto hidden sm:block">
                    <table className="min-w-full table-auto border-collapse">
                        <thead>
                            <tr className="bg-[#F5EEE9] text-gray-800">
                                <th className="text-xl py-4 px-6 text-left">Plan</th>
                                <th className="text-xl py-4 px-6 text-left">Pricing in USD</th>
                            </tr>
                        </thead>
                        <tbody>
                            {plans.map((plan, index) => (
                                <tr key={index} className="border-b">
                                    <td className="py-4 px-4 text-gray-800 font-semibold">{plan.title}</td>
                                    <td className="py-4 px-4 text-gray-800">
                                        <div className="flex flex-col items-center w-fit">
                                            <p className="text-sm text-green-600">{plan.discount}</p>
                                            <button
                                                className="px-2 py-1.5 md:px-6 md:py-2 bg-custom-gradient text-white text-base md:text-lg rounded-full hover:bg-pink-500 transition"
                                                onClick={handleApplyNowClick}
                                            >
                                                Get Price Info
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile View */}
                <div className="md:hidden space-y-6">
                    {plans.map((plan, index) => (
                        <div key={index} className="bg-white shadow-md rounded-md p-4">
                            <h3 className="text-base font-semibold text-gray-800">{plan.title}</h3>
                            <div className="mt-2">
                                <p className="text-sm font-semibold text-gray-700">Pricing in USD</p>
                                {plan.oldPrice && (
                                    <p className="text-sm text-gray-500 line-through">{plan.oldPrice}</p>
                                )}
                                <p className="text-base font-bold text-gray-800">{plan.price}</p>
                                <p className="text-xs text-green-600">{plan.discount}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <button
                        className=" px-2 py-1.5 md:px-6 md:py-2 bg-custom-gradient text-white text-base md:text-lg rounded-full hover:bg-pink-500 transition"
                        onClick={handleApplyNowClick}
                    >
                        Get a Quote with applicable Offers and Discounts
                    </button>
                    <FormPopup isVisible={isPopupVisible} onClose={() => {
                        setPopupVisible(false);
                        setIsDownloadRequested(false);
                    }}
                        isDownloadRequested={isDownloadRequested} />
                </div>
            </div>
        </section>
    );
};

export default CoursePricePlan;
