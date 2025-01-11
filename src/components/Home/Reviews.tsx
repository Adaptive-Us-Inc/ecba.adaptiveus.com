import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import Bartlomiej from "../../../public/images/Reviews/Bartlomiej-Hagowski-2.webp";
import Khady from "../../../public/images/Reviews/Khady Sane-webp.webp";
import Kuda from "../../../public/images/Reviews/Kuda-Kamushinda-1.webp";
import Sarah from "../../../public/images/Reviews/Sarah-Beasley-webp.webp";
import Shelly from "../../../public/images/Reviews/Shelly-Johnson.jpg";
import FormPopup from "../others/FormPopup";

const reviews = [
    {
        name: "Shelly Johnson",
        review: "Adaptive ECBA course is amazing, the live classes, material, videos and quizzes are all so thorough that the exam feels no different than Adaptive's simulations. I am so pleased with the course that I am signing up for the CCBA instructor-led classes!",
        country: "USA",
        photo: Sarah,
    },
    {
        name: "Bartlomiej Hagowski",
        review: "The training material from Adaptive US is exactly what you need to be prepared for IIBA certification. The online classes helped a lot with understanding BABOK. LN Mishra did a great job in supporting and preparing me for the ECBA exam. Thanks LN :)",
        country: "USA",
        photo: Khady,
    },
    {
        name: "Kuda Kamushinda",
        review: "From day one, Adaptive US was incredibly supportive. With their ECBA Training & material, I am proud to say that I did it in just 6 weeks. The classes are filled with practical examples. so for those looking to give them a shot, I highly recommend them!",
        country: "Canada",
        photo: Bartlomiej,
    },
    {
        name: "Sarah Beasley",
        review: "Adaptive was instrumental in my passing the ECBA. LN was an amazing instructor who not only took the time to teach us the skills but also how to apply them, all in an interactive learning environment. I wouldn't have passed without Adaptive and LN.",
        country: "USA",
        photo: Shelly,
    },
    {
        name: "Khady Sane",
        review: "I was trained by LN for ECBA training. I really liked the course format (online). Explanations were clear and concise and course content was easy to follow even though I am a beginner in the area. No doubt Adaptive is the way to go to get you to your goal! :)",
        country: "Nigeria",
        photo: Kuda,
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
