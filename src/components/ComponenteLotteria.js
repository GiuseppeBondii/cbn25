import React from 'react';
import premi from './PremiLotteria.json';

const Lotteria = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className='title'>Lotteria</h1>
      </header>
      <div className='widget'>
        <h2>
        Estrazione
        </h2>
        <p>
        dei biglietti vincenti <br></br>
        10 Maggio 2025, ore 20:00<br></br> 
        Piazza S.Domenico, Bologna
        </p>
      </div>
      <div className="widget-container">
        {premi.map((premio) => (
          <div key={premio.premio}>
            <h2>{premio.premio}° premio</h2>
            <p>{premio.descrizione}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lotteria;