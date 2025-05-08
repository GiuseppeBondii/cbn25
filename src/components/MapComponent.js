import React from 'react';
import MyMap from '../files/assets/mappa_2025.png';
import '../index.css'
import './ImagesAlongYearsComponent.css';


const MapComponent = () => {
 

  return (
   <div>
     <header className="home-header">
        <h1 className="title">Mappa</h1>
      </header>
      <img src={MyMap} alt='Mappa CBN' ></img>
   </div>
  );
};

export default MapComponent;
