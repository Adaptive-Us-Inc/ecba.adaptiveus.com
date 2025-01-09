import React, { useEffect, useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

interface AlertProps {
    message: string;
    onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, onClose }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);

        const timer = setTimeout(() => {
            setShow(false);
            onClose();
        }, 5000); 

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div
            className={`fixed top-4 right-4 bg-red-500 w-80 text-white px-3 py-2 md:p-3 rounded-md text-center z-50 transition-all duration-500 ease-out ${show ? "transform translate-x-0 opacity-100" : "transform translate-x-full opacity-0"
                }`}
            style={{ transition: "transform 0.5s ease-out, opacity 0.5s ease-out" }}
        >
            <div className="flex justify-between items-center">
                <span className="text-sm md:text-base" >{message}</span>
                <button
                    onClick={onClose}
                    className="ml-4 text-white font-semibold"
                >
                    <span  >
                        <IoMdCloseCircleOutline size={20} />
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Alert;
