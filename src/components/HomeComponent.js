import React from 'react';
import './HomeComponent.css';
import immgProva from '../files/imm_prova.png';
import joeruspante from '../files/joeRuspante.jpg';

const HomeComponent = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Campus By Night</h1>
        <p>08 - 09 - 10 Maggio 2025</p>
      </header>
      <div className='bckHOME'>
        <img src={joeruspante} alt="Joe Ruspante" className='immagine' />
      </div>

      <div className="widget-container">
        <div className="widget">
          <h2>Dove</h2>
          <p>
            Loden ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            accumsan, justo a dapibus pulvinar, urna lectus congue nibh.
          </p>
        </div>
        <div className="widget">
          <h2>Sorella di manu</h2>
          <p>
            Loden ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
            neque euismod, ullamcorper velit ac, commodo turpis.
          </p>
        </div>
        <div className="widget">
          <h2>Anna Cucc infame</h2>
          <p>
            Loden ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
            neque euismod, ullamcorper velit ac, commodo turpis.
          </p>
          <img src={immgProva} alt="Prova immagine" className='immagine' />
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
