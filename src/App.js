import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import BottomBar from './components/BottomBar';
import HomeComponent from './components/HomeComponent';
import ProgInfoComponent from './components/ProgInfoComponent';
import FoodComponent from './components/FoodComponent';
import ImagesAlongYearsComponent from './components/ImagesAlongYearsComponent';
import Lotteria from './components/ComponenteLotteria';
import Footer from './components/Footer';
import "./components/swipe.css";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Aggiorna l'indice attivo in base al percorso
    switch (location.pathname) {
      case '/':
        setActiveIndex(0);
        break; //TODO: quando sarà da modificare il numero di pagine bisogna guardare qui
      /*case '/info':
        setActiveIndex(1);
        break;
      case '/food':
        setActiveIndex(2);
        break;
      case '/lottery':
        setActiveIndex(3);
        break;*/
      case '/images':
        setActiveIndex(/*4*/1);
        break;
      default:
        setActiveIndex(0);
    }
    // Torna in cima alla pagina ad ogni cambio di rotta
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  const handleSetActiveIndex = (index) => {
    setActiveIndex(index);
    switch (index) {
      case 0:
        navigate('/');
        break;
      case 1:
        /*navigate('/info');*/ navigate('/images'); //TODO: quando sarà da modificare il numero di pagine bisogna guardare qui
        break;
      case 2:
        navigate('/food');
        break;
      case 3:
        navigate('/lottery');
        break;
      case 4:
        navigate('/images');
        break;
      default:
        navigate('/');
    }
    // (opzionale) scroll animato quando si clicca il pulsante
    // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <div className="appContainer">
        <div className="swipePage">
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/info" element={<ProgInfoComponent />} />
            <Route path="/food" element={<FoodComponent />} />
            <Route path="/lottery" element={<Lotteria />} />
            <Route path="/images" element={<ImagesAlongYearsComponent />} />
          </Routes>
        </div>
        <BottomBar activeIndex={activeIndex} setActiveIndex={handleSetActiveIndex} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
