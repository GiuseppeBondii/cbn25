import React, { useState } from 'react';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './ImagesAlongYearsComponent.css';

// Funzione per generare il percorso delle immagini
const importImages = (year) => {
  const images = [];
  try {
    // Modifica questi numeri in base al numero effettivo di immagini per ogni anno
    const imageCount = 13; // Esempio: 6 immagini per anno
    
    for(let i = 1; i <= imageCount; i++) {
      images.push({
        id: `${year}-${i}`,
        url: require(`../files/${year}/${i}.jpg`), // Modifica l'estensione se necessario
        caption: `CBN ${year}`
      });
    }
  } catch (error) {
    console.warn(`Impossibile caricare immagini per l'anno ${year}:`, error);
  }
  return images;
};

const ImagesAlongYearsComponent = () => {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Carica le immagini da tutte le cartelle
  const images = ['2023', '2022'].flatMap(year => importImages(year));

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setIsCarouselOpen(true);
  };

  const handleNavigation = (direction) => {
    if (direction === 'prev') {
      setSelectedImageIndex(prev => prev > 0 ? prev - 1 : images.length - 1);
    } else {
      setSelectedImageIndex(prev => prev < images.length - 1 ? prev + 1 : 0);
    }
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>CBN Along years</h1>
        <p>08 - 09 - 10 Maggio 2025</p>
      </header>

      <div className="widget-container">
        <div className="widget">
          <h2>Storia</h2>
          <p>
            Loden ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            accumsan, justo a dapibus pulvinar, urna lectus congue nibh.
          </p>
        </div>
      </div>


        <div className="image-grid">
          {images.map((image, index) => (
            <div 
              key={image.id}
              className="grid-item"
              onClick={() => handleImageClick(index)}
              role="button"
              tabIndex={0}
            >
              <img 
                src={image.url.default || image.url} 
                alt={image.caption}
                loading="lazy"
              />
              <div className="image-overlay">
                <span>{image.caption}</span>
              </div>
            </div>
          ))}
        </div>

        {isCarouselOpen && (
          <div className="carousel-overlay">
            <div className="carousel-container">
              <button 
                className="close-btn"
                onClick={() => setIsCarouselOpen(false)}
              >
                <FiX size={24} />
              </button>

              <div className="carousel-content">
                <button 
                  className="nav-btn prev"
                  onClick={() => handleNavigation('prev')}
                >
                  <FiChevronLeft size={32} />
                </button>

                <div className="main-image">
                  <img 
                    src={images[selectedImageIndex].url.default || images[selectedImageIndex].url} 
                    alt={images[selectedImageIndex].caption}
                  />
                  <p className="image-caption">
                    {images[selectedImageIndex].caption}
                  </p>
                </div>

                <button 
                  className="nav-btn next"
                  onClick={() => handleNavigation('next')}
                >
                  <FiChevronRight size={32} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
  );
};

export default ImagesAlongYearsComponent;