import React from 'react';
import { FiHome, FiCalendar, FiFolder } from 'react-icons/fi';
import { IoFastFoodOutline } from "react-icons/io5";
import { TbListNumbers } from "react-icons/tb";
import './bottombar.css';

const BottomBar = ({ activeIndex, setActiveIndex }) => {
  const items = [
    { icon: <FiHome size={24} /> },            // Index 0: Home
    { icon: <FiCalendar size={24} /> },        // Index 1: Info
    { icon: <IoFastFoodOutline size={24} /> }, // Index 2: Food
    { icon: <TbListNumbers size={24} /> },     // Index 3: Lotteria
    { icon: <FiFolder size={24} /> }           // Index 4: Immagini
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
        {/* L'indicatore si sposta in base all'indice attivo */}
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