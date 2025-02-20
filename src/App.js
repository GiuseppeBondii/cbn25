import React, { useState } from 'react';
import { useEffect } from 'react';
import BottomBar from './components/BottomBar';
import HomeComponent from './components/HomeComponent';
import ProgInfoComponent from './components/ProgInfoComponent';
import FoodComponent from './components/FoodComponent';
import ImagesAlongYearsComponent from './components/ImagesAlongYearsComponent';
import programData from './components/Programma.json';

const preloadImage = (src) => {
  const img = new Image();
  img.src = src;
};

function App() {

  useEffect(() => {
    // Precarica tutte le immagini degli eventi definiti nel JSON
    programData.days.forEach(day => {
      day.events.forEach(event => {
        if (event.image) {
          preloadImage(event.image);
        }
      });
    });
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  const renderComponent = () => {
    switch (activeIndex) {
      case 0:
        return <HomeComponent />;
      case 1:
        return <ProgInfoComponent />;
      case 2:
        return <FoodComponent />;
      case 3:
        return <ImagesAlongYearsComponent />;
      default:
        return <HomeComponent />;
    }
  };

  return (
    <div className="appContainer" style={{ paddingBottom: '80px' }}>
      {/*<AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          {renderComponent()}
        </motion.div>
      </AnimatePresence>*/}
      {renderComponent()}

      <BottomBar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </div>
  );
}

export default App;
