import React from 'react';
import './HomeComponent.css';
import CountdownComponent from "./CountDownComponent";
import imgBck from '../files/sfondoHS.jpg';
import data from "./HomeComponent.json"

const HomeComponent = () => {

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>{data.title}</h1>
        <h2>{data.subtitle}</h2>
        <p>{data.date}</p>
      </header>
      <div className="bckHOME">
        <img src={imgBck} alt="Copertina" className="immagineHome" />
      </div>
      <CountdownComponent />
      <div className="widget-container">
        <div className="widget">
          <h2>{data.widgetTitle}</h2>
          <p>{data.widgetText}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
