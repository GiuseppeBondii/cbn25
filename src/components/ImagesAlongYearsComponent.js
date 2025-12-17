import React, { useState } from 'react';
import { FiX, FiChevronLeft, FiChevronRight, FiDownload } from 'react-icons/fi';
import ProgressiveImage from './ProgressiveImage';
import './ImagesAlongYearsComponent.css';

// Importa tutte le immagini dalla cartella "ImmaginiCBN" (ricorsivamente)
const importAllImages = () => {
  const context = require.context(
    '../files/ImmaginiCBN',
    true,
    /\.(png|jpe?g|JPG|JPEG)$/
  );
  const images = context.keys().map((key, index) => {
    // key es. "./2024/DSC_0207.JPG"
    const parts = key.split('/');
    const year = parts[1]; // estrae l'anno
    return {
      id: `${year}-${index}`,
      year: parseInt(year, 10),
      url: context(key),
      caption: `CBN ${year}`
    };
  });
  // Ordina in ordine inverso: prima le immagini più recenti
  images.sort((a, b) => {
    if (a.year !== b.year) {
      return b.year - a.year;
    }
    return 0;
  });
  return images;
};

const ImagesAlongYearsComponent = () => {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = importAllImages();

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setIsCarouselOpen(true);
  };

  const handleNavigation = (direction) => {
    if (direction === 'prev') {
      setSelectedImageIndex(prev => (prev > 0 ? prev - 1 : images.length - 1));
    } else {
      setSelectedImageIndex(prev => (prev < images.length - 1 ? prev + 1 : 0));
    }
  };

  const handleDownload = () => {
    const image = images[selectedImageIndex];
    // Verifica se l'URL è direttamente utilizzabile oppure se serve accedere alla proprietà default
    const imageUrl = image.url && image.url.default ? image.url.default : image.url;
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `${image.caption.replace(/\s+/g, '_')}.jpg`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="title">CBN Along Years</h1>
      </header>

      <div className="widget-container">
        <div className="widget">
          <h2>Storia</h2>
          <p>
          L’Associazione ONLUS The Crew, in collaborazione con la lista e associazione studentesca Student Office, organizza il "Campus By Night", arrivato alla sua XXII edizione, quale significativo evento culturale con cadenza annuale rivolto agli studenti dell’Alma Mater Studiorum-Università di Bologna e alla città intera. <br/>
          Il "Campus by Night" nasce dal desiderio di poter incontrare tutta la comunità Accademica, diventando una grande occasione di incontro, confronto e dibattito, tramite mostre, spettacoli, conferenze e tornei sportivi.<br/>
          Il "Campus by Night" partendo dall'ascolto delle sfide contemporanee che il mondo pone, ogni anno propone un tema centrale, rappresentato dal titolo, con cui invita l'università e la città a confrontarsi. <br/>
          Nelle ultime edizioni sono stati scelti i seguenti titoli:<br/>
          "Cosa rende la vita vita?"<br/>
          "Sei felice in questo mondo?"<br/>
          "Un'amicizia per vivere, vivere per un'amicizia"<br/>
          "In che cosa posso sperare?"<br/>
          Nelle scorse edizioni del "Campus By Night" sono intervenuti personaggi appartenenti al mondo dello spettacolo, della musica, dello sport, dell'università ed esponenti politici tra cui: Mario Mauro (ex ministro e politico italiano), Morgan (musicista e cantautore italiano), Paolo Cevoli (comico), Leonardo (ex calciatore e allenatore), Gherardo Colombo (ex magistrato), Agnese Moro (giornalista), Giorgio De Rita (Segretario Generale Censis) e tanti docenti dell'Alma Mater.<br/>
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
            <ProgressiveImage 
              src={image.url && image.url.default ? image.url.default : image.url}
              alt={image.caption}
              className="grid-image"
            />
            <div className="image-overlay">
              <span>{image.caption}</span>
            </div>
          </div>
        ))}
      </div>

      // ... (resto del codice invariato fino al return)

      {isCarouselOpen && (
        <div className="cbn-carousel-overlay">
          {/* Bottone Chiudi - Posizionato in alto a destra fisso */}
          <button 
            className="cbn-close-btn"
            onClick={() => setIsCarouselOpen(false)}
            aria-label="Chiudi"
          >
            <FiX size={32} />
          </button>

          {/* Navigazione Sinistra */}
          <button 
            className="cbn-nav-btn cbn-prev"
            onClick={() => handleNavigation('prev')}
          >
            <FiChevronLeft size={48} />
          </button>

          <div className="cbn-carousel-container">
            <div className="cbn-main-image-wrapper">
              <ProgressiveImage 
                src={images[selectedImageIndex].url && images[selectedImageIndex].url.default ? images[selectedImageIndex].url.default : images[selectedImageIndex].url}
                alt={images[selectedImageIndex].caption}
                className="cbn-carousel-image"
              />
              
              <button 
                className="cbn-download-btn"
                onClick={handleDownload}
                title="Scarica immagine"
              >
                <FiDownload size={22} />
              </button>
            </div>
            
            <p className="cbn-image-caption">
              {images[selectedImageIndex].caption}
            </p>
          </div>

          {/* Navigazione Destra */}
          <button 
            className="cbn-nav-btn cbn-next"
            onClick={() => handleNavigation('next')}
          >
            <FiChevronRight size={48} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImagesAlongYearsComponent;