import React from 'react';
import { FiHome, FiCalendar, FiFolder } from 'react-icons/fi';
import { IoFastFoodOutline } from "react-icons/io5";
import { TbListNumbers } from "react-icons/tb";
import toast, { Toaster } from 'react-hot-toast'; // Importiamo il toast
import './bottombar.css';

const BottomBar = ({ activeIndex, setActiveIndex }) => {
  const items = [
    { icon: <FiHome size={24} />, disabled: false },
    { icon: <FiCalendar size={24} />, disabled: true },        // Info
    { icon: <IoFastFoodOutline size={24} />, disabled: true }, // Food
    { icon: <TbListNumbers size={24} />, disabled: true },     // Lotteria
    { icon: <FiFolder size={24} />, disabled: false }
  ];

  const handleNavigation = (index, isDisabled) => {
    if (isDisabled) {
      // Se è disabilitato, mostriamo il toast
      toast("Work in progress, coming soon", {
        style: {
          borderRadius: '10px',
          background: '#103682',
          color: '#fff',
        },
        position: 'bottom-right', // O 'bottom-center' se preferisci
      });
    } else {
      // Altrimenti cambiamo pagina
      setActiveIndex(index);
    }
  };

  return (
    <>
      {/* Componente necessario per visualizzare i toast */}
      <Toaster /> 

      <div className="barContainer">
        <div className="buttonsContainer">
          {items.map((item, index) => (
            <button
              key={index}
              className={`navButton ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleNavigation(index, item.disabled)}
              style={{
                opacity: item.disabled ? 0.5 : 1,
                cursor: 'pointer' 
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
    </>
  );
};

export default BottomBar;