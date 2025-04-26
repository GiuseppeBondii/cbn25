import React, { useState, useRef } from 'react';
import BottomBar from './components/BottomBar';
import HomeComponent from './components/HomeComponent';
import ProgInfoComponent from './components/ProgInfoComponent';
//import FoodComponent from './components/FoodComponent';
import ImagesAlongYearsComponent from './components/ImagesAlongYearsComponent';
import Footer from './components/Footer';
import "./components/swipe.css";
import Lotteria from './components/ComponenteLotteria';

// Il codice di preloading è stato rimosso in favore del caricamento progressivo con blur
function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const MIN_SWIPE_DISTANCE = 50; // Distanza minima per riconoscere lo swipe

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > MIN_SWIPE_DISTANCE;
    const isRightSwipe = distance < -MIN_SWIPE_DISTANCE;

    if (isLeftSwipe && activeIndex < 3) {
      setActiveIndex(prevIndex => prevIndex + 1);
    } else if (isRightSwipe && activeIndex > 0) {
      setActiveIndex(prevIndex => prevIndex - 1);
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const renderComponent = () => {
    switch (activeIndex) {
      case 0:
        return <HomeComponent />;
      case 1:
        return <ProgInfoComponent />;
      /*case 2:
        return <FoodComponent />;*/
        case 2:
      return <Lotteria />;
      case 3:
        return <ImagesAlongYearsComponent />;
      default:
        return <HomeComponent />;
    }
  };

  return (
    <div>
      <div 
        className="appContainer" 
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="swipePage">
          {renderComponent()}
        </div>

        <BottomBar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
