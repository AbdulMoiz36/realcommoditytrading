import React, { useState } from 'react';
import { FaAngleRight } from "react-icons/fa";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className={`my-3 rounded-md ${activeIndex === index ? 'border-b border-x border-[#86D207]' : ''}`}>

          <div
            className="flex justify-between items-center rounded-t-lg bg-[#86D207] cursor-pointer p-4"
            onClick={() => toggleAccordion(index)}
          >
            <h2 className="text-lg font-semibold text-white">{item.title}</h2>
            <FaAngleRight 
              className={`w-6 h-6 text-white transition-transform ${
                activeIndex === index ? 'transform rotate-90' : ''
              }`}
            />
            
          </div>
          {activeIndex === index && (
            <div className="p-4 ">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;