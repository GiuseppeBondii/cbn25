import React from 'react';
import './HomeComponent.css';
import immgProva from '../files/imm_prova.png';
import imgBck from '../files/2023/16.jpg';
import CountdownComponent from "./CountDownComponent";

const HomeComponent = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="title">This Year's Title</h1>
        <p>08 - 09 - 10 Maggio 2025</p>
      </header>
      <div className="bckHOME">
        <img src={imgBck} alt="Copertina" className="immagineHome" />
      </div>
      {}
        <CountdownComponent></CountdownComponent>
      <div className="widget-container">
        <div className="widget">
          <h2>Widget Title</h2>
          <p>
            Loden ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
            neque euismod, ullamcorper velit ac, commodo turpis.
          </p>
        </div>
        <div className="widget">
          <h2>Widget Title</h2>
          <p>
            Loden ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
            neque euismod, ullamcorper velit ac, commodo turpis.
          </p>
          <img src={immgProva} alt="Prova immagine" className="immagine" />
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
