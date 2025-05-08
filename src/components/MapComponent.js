import React from 'react';
import { ReactComponent as MyMap } from '../files/assets/map_2025.svg';
import '../index.css'
import './ImagesAlongYearsComponent.css';


const MapComponent = () => {
 

  return (
   <div>
     <header className="home-header">
        <h1 className="title">Mappa</h1>
      </header>
    <MyMap className='Mappa' />
   </div>
  );
};

export default MapComponent;
