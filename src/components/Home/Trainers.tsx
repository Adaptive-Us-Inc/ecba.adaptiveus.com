import React, { useState } from "react";
import Mishra from "../../../public/images/Trainers/LN-Mishra.webp"
import McCoy from "../../../public/images/Trainers/Lora-McCoy.webp"
import Olivia from "../../../public/images/Trainers/Olivia-Hampton.webp"
import Victoria from "../../../public/images/Trainers/Victoria-Cupet.webp"
import Image from "next/image";

const trainers = [
    {
        name: "Victoria Cupet",
        designation: "CBAP, CBDA, AAC, CPOA",
        description: "PhD in Education, Board of director of IIBA. 25+ years of experience. Speaker, author & trainer.",
        photo: Victoria,
    },
    {
        name: "LN Mishra",
        designation: "CBAP, CCBA, ECBA, CBDA, AAC, CPOA, CCA",
        description: "Mentor to 1900+ IIBA Certified Business Analysts. 25+ years of BA experience.",
        photo: Mishra,
    },
    {
        name: "Lora McCoy",
        designation: "CBAP, CBDA, AAC, CPOA, CCA",
        description: "Former Regional Director, IIBA Central Americas. Former President – IIBA Oklahoma Chapter. 22+ years of BA experience.",
        photo: McCoy,
    },
    {
        name: "Olivia Hampton",
        designation: "CBAP, CBDA, AAC, CCA",
        description: "Skilled change management professional and trainer with 15+ years of experience in various roles and industries. ",
        photo: Olivia,
    },
   
   
];

const Trainers = () => {
    const [visible, setVisible] = useState(4)
    const loadMore = () => {
        setVisible((prevVisible) => prevVisible + 4)
    }
    return (
        <div className="bg-white py-10 px-4 " id="trainers" >
            <div className="container mx-auto">
                <h2 className="text-2xl md:text-4xl text-black text-center font-semibold mb-8">
                    Meet Our <span className="text-gradient">Expert Trainers</span>

                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {trainers.slice(0, visible).map((trainer, index) => (
                        <div
                            key={index}
                            className="bg-secondaryBg rounded-lg shadow-lg px-3 py-5 md:p-6 text-center flex flex-col items-center"
                        >
                            <Image
                                src={trainer.photo}
                                alt={trainer.name}
                                className="w-24 h-24 rounded-full object-cover mb-4 shadow-md"
                            />
                            <h3 className="text-base md:text-xl font-bold text-gray-900">{trainer.name}</h3>
                            <p className="text-xs md:text-sm text-gray-600 mb-2">{trainer.designation}</p>
                            <p className="text-gray-800 text-xs md:text-sm">"{trainer.description}"</p>
                        </div>
                    ))}
                </div>
                {visible < trainers.length && (
                    <div className="text-center mt-8">
                        <button
                            onClick={loadMore}
                            className="px-2 md:px-4 py-1 md:py-2 text-base md:text-base bg-custom-gradient text-white rounded-lg shadow-md hover:opacity-90"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>
            
        </div>
    );
};

export default Trainers;
