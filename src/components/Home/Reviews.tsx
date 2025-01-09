import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import Chioma from "../../../public/images/Reviews/Chioma Ogamba.webp";
import Ghalib from "../../../public/images/Reviews/Ghalib-2.webp";
import Kirill from "../../../public/images/Reviews/Kirill.webp";
import Samantha from "../../../public/images/Reviews/Samantha.webp";
import Sandra from "../../../public/images/Reviews/Sandra.webp";
import Satenik from "../../../public/images/Reviews/Satenik.webp";
import FormPopup from "../others/FormPopup";

const reviews = [
    {
        name: "Samantha Carvalho",
        review: "Adaptive is a one-stop solution for CBAP Prep that takes away all the confusion of applying & preparing for CBAP. Their resources are on point with extremely knowledgeable and experienced faculty. Thank you for the stellar experience & exam success.",
        country: "USA",
        photo: Samantha,
    },
    {
        name: "Ghalib Riaz",
        review: "I passed CBAP on the first attempt. Your guarantees are not just words! I want to acknowledge that your training material is very reassuring and prepares one for the exam. It gives me the courage to take up a BA role with more confidence.",
        country: "Canada",
        photo: Ghalib,
    },
    {
        name: "Chioma Ogamba",
        review: "Studying at Adaptive US was the BEST choice I made. I passed the CBAP exam in just 1 month. Their customer service is top notch! A huge THANK YOU to the faculty Lora McCoy, LN Mishra, Peter Johnson at Adaptive US that taught and helped me immensely!",
        country: "USA",
        photo: Chioma,
    },
    {
        name: "Sandra Mafiejor",
        review: "Adaptive’s course was a game-changer in my CBAP exam journey. The extensive range of learning materials helped me achieve higher scores in all knowledge areas after studying rigorously for 3 months. I finished my exam in less than 100 minutes, well under the allotted 210 minutes.",
        country: "USA",
        photo: Sandra,
    },
    {
        name: "Kirill Sergeev",
        review: "I've been learning with Adaptive to prepare for my CBAP Exam. I could say that without the simulations that they provide it would have been highly complicated to pass the exam since the questions available in their question bank and simulations are very much similar to what you'll be asked during the real exam. Really appreciate the trainers’ efforts and everyone involved!",
        country: "Poland",
        photo: Kirill,
    },
    {
        name: "Satenik Stepanyan",
        review: "Adaptive US provided an exceptional CBAP training experience! The instructors were experts who made complex concepts easy to understand. Learning was made practical and relevant through engaging sessions with real-world examples. As a result of my training with Adaptive US, I not only passed the CBAP exam but also gained valuable skills that have benefited my career growth. It is highly recommended!",
        country: "Canada",
        photo: Satenik,
    },
];

const Reviews = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [isDownloadRequested, setIsDownloadRequested] = useState(false);

    const handleApplyNowClick = () => {
        setIsDownloadRequested(false);
        setPopupVisible(true);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    };

    return (
        <div className="bg-secondaryBg py-10 px-4" id="reviews">
            <div className="container mx-auto ">
                <h2 className="text-2xl md:text-4xl text-black text-center font-semibold mb-8">
                    Trusted by Students <span className="text-gradient">Worldwide</span>
                </h2>
                <Slider {...settings}>
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg h-72 shadow-lg px-6 py-5 md:py-10 flex flex-col justify-center items-center text-center"

                        >
                            <div className="flex flex-col items-center ">
                                <Image
                                    src={review.photo}
                                    alt={review.name}
                                    className="w-24 h-24 rounded-full object-cover mb-4 shadow-md"
                                />
                                <h3 className="text-sm md:text-xl font-bold text-gray-900">{review.name}</h3>
                                <p className="text-xs md:text-sm text-gray-600">{review.country}</p>
                                <p className="text-xs md:text-sm text-gray-800 italic mt-2 mb-4">&quot;{review.review}&quot;</p>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className="text-center mt-8">
                    <button
                        className="px-4 md:px-6 py-2 bg-custom-gradient text-white text-base md:text-xl rounded-md hover:bg-pink-500 transition"
                        onClick={handleApplyNowClick}
                    >
                        Schedule a call
                    </button>
                    <FormPopup isVisible={isPopupVisible} onClose={() => {
                        setPopupVisible(false);
                        setIsDownloadRequested(false);
                    }}
                        isDownloadRequested={isDownloadRequested} />
                </div>
            </div>
        </div>
    );
};

export default Reviews;
