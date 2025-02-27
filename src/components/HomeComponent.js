import React from 'react';
import './HomeComponent.css';
import immgProva from '../files/imm_prova.png';
import imgBck from '../files/2023/16.jpg';
import CountdownComponent from "./CountDownComponent";

const HomeComponent = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="title">dove si accende la vita?</h1>
        <h2>CAMPUS BY NIGHT</h2>
        <p>08 - 09 - 10 Maggio 2025</p>
      </header>
      <div className="bckHOME">
        <img src={imgBck} alt="Copertina" className="immagineHome" />
      </div>
      {}
        <CountdownComponent></CountdownComponent>
      <div className="widget-container">
        <div className="widget">
          <h2>Che cos'E' il Campus By Night?</h2>
          <p>
          Il Campus By Night (CBN) è un evento organizzato dagli studenti dell’associazione studentesca Student Office dell’Alma Mater Studiorum Università di Bologna, in collaborazione con The Crew. Tramite mostre e incontri, lo scopo dell’evento è di portare a tutti gli universitari e ai cittadini di Bologna ciò che ci appassiona e ci affascina della vita e dello studio. Giunto alla sua XXII edizione, quest’anno il CBN avrà come titolo 'Dove si accende la Withə' e si svolgerà dal 8 al 10 maggio presso Piazza San Domenico.          </p>
        </div>
        
      </div>
    </div>
  );
};

export default HomeComponent;
