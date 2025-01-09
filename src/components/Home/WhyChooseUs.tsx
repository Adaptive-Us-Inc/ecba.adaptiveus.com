import React from 'react';
import success from '../../../public/images/why-us/target.svg'
import money from '../../../public/images/why-us/money-bag.svg'
import books from '../../../public/images/why-us/books.svg'
import questions from '../../../public/images/why-us/questions.svg'
import clock from '../../../public/images/why-us/clock.svg'
import book from '../../../public/images/why-us/book.svg'
import penPaper from '../../../public/images/why-us/pen-paper.svg'
import recordings from '../../../public/images/why-us/video-rec.svg'
import application from '../../../public/images/why-us/application-filling.svg'
import access from '../../../public/images/why-us/access.svg'
import Audio_book from '../../../public/images/why-us/Audio-book.svg'
import Flash_cards from '../../../public/images/why-us/Flash-cards.svg'
import Class_recordings from '../../../public/images/why-us/Class-recordings.svg'
import Simulations from '../../../public/images/why-us/Simulations.svg'
import Prep_Support from '../../../public/images/why-us/Prep-Support.svg'
import Image from 'next/image';
import { FaPlayCircle } from 'react-icons/fa';
const simulationIcon = <FaPlayCircle />;

interface Deliverable {
  id: number;
  title: string;
  description: string;
  icon: string; 
}

const deliverables: Deliverable[] = [
  { id: 1, title: '100% Exam Success Guarantee', description: 'We ensure success on the first attempt else we pay for your retakes and offer a free retraining.', icon: success },
  { id: 2, title: 'Money Back Guarantee', description: 'Receive a refund of remaining fees after retakes are paid if our promises are not met.', icon:money },
  { id: 3, title: '42+ Hours of Expert Led Live Training', description: 'Interactive sessions led by industry experts.', icon: books },
  { id: 4, title: '2,300+ Practice Questions', description: 'Extensive question bank for comprehensive practice.', icon:questions},
  { id: 5, title: '35 IIBA PD Hours', description: 'Accredited professional development hours.', icon: clock },
  { id: 6, title: 'BABoK V3 based Study Guide', description: 'Stay aligned with the BABoK V3 standards.', icon: book },
  { id: 7, title: 'Exam Tips and Prep Plan', description: 'Strategic preparation tips and plans.', icon: penPaper },
  { id: 8, title: '10+ Hours of CBAP Video Learning', description: 'Engage with detailed video lessons.', icon: recordings },
  { id: 9, title: 'Application Filing Support', description: 'Guidance for hassle-free application filing.', icon: application },
  { id: 10, title: '180+ days Access to Learning Resources', description: 'Learn at your pace with lifetime access to all learning materials.', icon: access },
  { id: 11, title: '6 Full-Length Simulations', description: 'Test your skills with realistic, exam-like simulations.', icon:Simulations  },
  { id: 12, title: 'Audio book', description: 'Learn on the Go', icon:Audio_book  },
  { id: 13, title: 'Flash cards', description: 'Learn in a gamified manner', icon:Flash_cards  },
  { id: 14, title: 'Class recordings', description: 'Review your class recordings later', icon:Class_recordings  },
  { id: 15, title: 'Extended Exam Prep Support', description: '12 Live Q&A sessions - 75 Minutes each', icon:Prep_Support  },
  
];

const WhyChooseUs = () => {
  return (
    <div className="bg-custom-gradient py-10  px-4 " id="Why-choose-us">
      <div className="container mx-auto md:px-6 lg:px-20">
        <h2 className="text-xl md:text-4xl font-bold text-white mb-6 text-center">
          Why CBAP Course from <br /> ADAPTIVEUS ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-transform hover:scale-105 ">
              <Image src={item.icon} alt='icon' className="size-12 mb-4"/>
              <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-xs md:text-sm text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
