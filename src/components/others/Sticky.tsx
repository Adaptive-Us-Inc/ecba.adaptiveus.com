import React, { useState } from 'react';
import FormPopup from './FormPopup';

const Sticky = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isDownloadRequested, setIsDownloadRequested] = useState(false);

  const handleApplyNowClick = () => {
    setIsDownloadRequested(false);
    setPopupVisible(true);
  };

  return (
    <>
      <button
        onClick={handleApplyNowClick}
        className="fixed md:text-xl font-semibold right-0 top-1/2 -translate-y-1/2 bg-custom-gradient text-white md:px-3 md:py-5 px-2 py-4 rounded-l-lg hover:bg-blue-700 transition-colors"
        style={{ writingMode: 'vertical-lr', textOrientation: 'mixed' }}
      >
        <span className="blink-text">Enquire Now</span>
      </button>

      <FormPopup isVisible={isPopupVisible} onClose={() => {
        setPopupVisible(false);
        setIsDownloadRequested(false);
      }}
        isDownloadRequested={isDownloadRequested} />
    </>
  );
};

export default Sticky;
