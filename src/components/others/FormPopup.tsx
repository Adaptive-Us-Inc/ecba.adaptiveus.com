import React, { useState, useEffect } from 'react';
import Form from './Form';
import Popup from './Success';

interface FormPopupProps {
    isVisible: boolean;
    onClose: () => void;
    isDownloadRequested: boolean;
    trainers?: boolean; // Optional trainers flag
}

const FormPopup: React.FC<FormPopupProps> = ({ isVisible, onClose, isDownloadRequested, trainers }) => {
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [shouldDownload, setShouldDownload] = useState(false);

    const handleFormSuccess = (message: string) => {
        setSuccessMessage(message);
        if (isDownloadRequested) {
            setShouldDownload(true);
        }
    };

    useEffect(() => {
        if (shouldDownload) {
            const timer = setTimeout(() => {
                const pdfUrl = '/pdf/ECBA Brochure-2024.pdf';
                const link = document.createElement('a');
                link.href = pdfUrl;
                link.setAttribute('download', 'brochure.pdf');
                link.setAttribute('target', '_blank');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                setShouldDownload(false);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [shouldDownload]);

    const handleClosePopup = () => {
        setSuccessMessage(null);
        setShouldDownload(false);
        onClose();
    };

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            handleClosePopup();
        }
    };

    if (!isVisible && !successMessage) return null;

    return (
        <div
            className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4"
            onClick={handleOverlayClick}
        >
            <div className="bg-white rounded-lg shadow-xl w-full max-w-xl relative mx-auto">
                <div className="p-6 max-h-[90vh] overflow-y-auto">
                    <button
                        onClick={handleClosePopup}
                        className="absolute top-1 right-2 text-gray-500 hover:text-gray-800 z-10"
                        aria-label="Close popup"
                    >
                        ✖
                    </button>
                    <div className="w-full">
                        <Form
                            onClose={handleClosePopup}
                            onSuccess={handleFormSuccess}
                            trainers={trainers} 
                        />
                    </div>
                </div>
            </div>
            {successMessage && (
                <Popup
                    title="Success!"
                    message={isDownloadRequested
                        ? "Thank you for submitting the form. Your brochure download will begin automatically."
                        : successMessage}
                    onClose={handleClosePopup}
                />
            )}
        </div>
    );
};

export default FormPopup;
