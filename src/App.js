import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import BottomBar from './components/BottomBar';
import HomeComponent from './components/HomeComponent';
import ProgInfoComponent from './components/ProgInfoComponent';
import MapComponent from './components/MapComponent';
import ImagesAlongYearsComponent from './components/ImagesAlongYearsComponent';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderComponent = () => {
    switch (activeIndex) {
      case 0:
        return <HomeComponent />;
      case 1:
        return <ProgInfoComponent />;
      case 2:
        return <MapComponent />;
      case 3:
        return <ImagesAlongYearsComponent />;
      default:
        return <HomeComponent />;
    }
  };

  return (
    <div className="appContainer" style={{ paddingBottom: '80px' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          {renderComponent()}
        </motion.div>
      </AnimatePresence>

      <BottomBar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </div>
  );
}

export default App;
