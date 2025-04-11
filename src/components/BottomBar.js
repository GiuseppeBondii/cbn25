import React from 'react';
import { FiHome, FiCalendar, FiFolder } from 'react-icons/fi';
import { IoFastFoodOutline } from "react-icons/io5";
import { TbListNumbers } from "react-icons/tb";


import './bottombar.css';

const BottomBar = ({ activeIndex, setActiveIndex }) => {
  const items = [
    { icon: <FiHome size={24} /> },/*
    { icon: <FiCalendar size={24} /> },
    {  icon: <IoFastFoodOutline size={24} /> },*/
    { icon: <TbListNumbers size={24} />},
    {  icon: <FiFolder size={24} /> }
  ];

  return (
    <div className="barContainer">
      <div className="buttonsContainer">
        {items.map((item, index) => (
          <button
            key={index}
            className={`navButton ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            {item.icon}
            <span className="label">{item.label}</span>
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
