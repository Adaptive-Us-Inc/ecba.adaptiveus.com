import React, { useState } from "react";
import FormPopup from "../others/FormPopup";

const plans = [
    {
        title: "CBAP Master Class",
        price: "USD 949",
        oldPrice: "USD 1249",
        discount: "$300 OFF",
        company: "Our Company",
    },
    {
        title: "CBAP Master Class with CBAP Exam Voucher",
        price: "USD 1499",
        oldPrice: "USD 1899",
        discount: "$400 OFF",
        company: "Our Company",
    },
    {
        title: "CBAP Ultimate",
        price: "USD 1999",
        discount: "$400 OFF",
        oldPrice: "USD 2399",
        company: "Our Company",
    },
    {
        title: "CBAP Ultimate with CBAP Exam Voucher",
        price: "USD 2549",
        oldPrice: "USD 3049",
        discount: "$500 OFF",
        company: "Our Company",
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
                    CBAP Course Price Plans
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
                                    <td className="py-4 px-6 text-gray-800  font-semibold">{plan.title}</td>
                                    <td className="py-4 px-6 text-gray-800">
                                        {plan.oldPrice && (
                                            <p className="text-sm text-gray-500 line-through">{plan.oldPrice}</p>
                                        )}
                                        <p className="text-xl font-bold text-gray-800">{plan.price}</p>
                                        <p className="text-sm text-green-600">{plan.discount}</p>
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
