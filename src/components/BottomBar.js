import React from 'react';
import { FiHome, FiCalendar, FiFolder } from 'react-icons/fi';
import { IoFastFoodOutline } from "react-icons/io5";
import { TbListNumbers } from "react-icons/tb";


import './bottombar.css';

const BottomBar = ({ activeIndex, setActiveIndex }) => {
  const items = [
    { icon: <FiHome size={24} /> /*, label: 'Home' */}, //TODO: quando sarà da modificare il numero di pagine bisogna guardare qui
    //{ icon: <FiCalendar size={24} /> /*, label: 'Info' */},
    //{ icon: <IoFastFoodOutline size={24} /> /*, label: 'Food'*/ },
    //{ icon: <TbListNumbers size={24} /> /*, label: 'Lotteria' */},
    { icon: <FiFolder size={24} />/*, label: 'Immagini'*/ }
  ];

  return (
    <div className="barContainer">
      <div className="buttonsContainer">
        {items.map((item, index) => (
          <button
            key={index}
            className={`navButton ${activeIndex === index ? 'active' : ''}`}
            onClick={() => {
              setActiveIndex(index);
            }}
          >
            {item.icon}
          </button>
        ))}
        <div
          className="activeIndicator"
          style={{
            transform: `translateX(${activeIndex * 100}%)`
          }}
        />
      </div>
    </div>
  );
};

export default BottomBar;
