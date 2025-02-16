import React from 'react';
import { FiHome, FiCalendar, FiMap, FiFolder } from 'react-icons/fi';
import './bottombar.css';

const BottomBar = ({ activeIndex, setActiveIndex }) => {
  const items = [
    { icon: <FiHome size={24} /> },
    { icon: <FiCalendar size={24} /> },
    {  icon: <FiMap size={24} /> },
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
