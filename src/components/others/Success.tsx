import React from "react";

interface PopupProps {
  title: string;
  message: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ title, message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <h2 className="text-lg font-semibold text-green-600 mb-4">{title}</h2>
        <p className="text-gray-700 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
