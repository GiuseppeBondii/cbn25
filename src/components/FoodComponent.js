import React from 'react';

const FoodComponent = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className='title'>Ristorazione</h1>
      </header>
      <div className="widget">
          <h2>Qualcosa</h2>
          <p>
            Loden ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            accumsan, justo a dapibus pulvinar, urna lectus congue nibh.
          </p>
        </div>
      <div className="widget-container">
        <div className="widget">
          <h2>Menu 1</h2>
          <p>
            Loden ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
            neque euismod, ullamcorper velit ac, commodo turpis.
          </p>
        </div>
        <div className="widget">
          <h2>Menu 2</h2>
          <p>
            Loden ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
            neque euismod, ullamcorper velit ac, commodo turpis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodComponent;

