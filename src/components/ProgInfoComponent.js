import React, { useState } from 'react';
import programData from './Programma.json';
import './ProgInfoComponent.css';
import MyMap from '../files/assets/mappa_2025.png';

//import ProgressiveImage from './ProgressiveImage';

const Modal = ({ event, onClose }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (!event) return null;

  // Converte la data nel formato YYYYMMDD
  const parseEventDate = (event) => {
    const year = new Date().getFullYear();
    const parts = event.date.split(' ');
    const day = parts[0].padStart(2, '0');
    const monthName = parts[1].toLowerCase();
    const monthMap = {
      'gennaio': '01',
      'febbraio': '02',
      'marzo': '03',
      'aprile': '04',
      'maggio': '05',
      'giugno': '06',
      'luglio': '07',
      'agosto': '08',
      'settembre': '09',
      'ottobre': '10',
      'novembre': '11',
      'dicembre': '12'
    };
    const month = monthMap[monthName] || '01';
    return `${year}${month}${day}`;
  };

  // Aggiunge un'ora all'orario dell'evento
  const addOneHour = (timeStr) => {
    let [hour, minute] = timeStr.split(':').map(Number);
    hour = (hour + 1) % 24;
    return hour.toString().padStart(2, '0') + ':' + minute.toString().padStart(2, '0');
  };

  // Genera l'URL per aggiungere l'evento a Google Calendar
  const generateGoogleCalendarUrl = (event) => {
    const startDate = parseEventDate(event);
    const startTime = event.time.replace(':', '') + '00';
    const endTime = addOneHour(event.time).replace(':', '') + '00';
    const dates = `${startDate}T${startTime}Z/${startDate}T${endTime}Z`;
    const baseUrl = 'https://www.google.com/calendar/render?action=TEMPLATE';
    const params = new URLSearchParams({
      text: event.title,
      dates: dates,
      details: event.description,
      location: event.location
    });
    return `${baseUrl}&${params.toString()}`;
  };

  // Genera il contenuto di un file ICS per l'evento
  const generateICS = (event) => {
    const uid = new Date().getTime() + '@yourdomain.com';
    const dtstamp = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const dtstart = `${parseEventDate(event)}T${event.time.replace(':', '')}00Z`;
    const dtend = `${parseEventDate(event)}T${addOneHour(event.time).replace(':', '')}00Z`;

    return (
      `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Your Company//Your App//EN
BEGIN:VEVENT
UID:${uid}
DTSTAMP:${dtstamp}
DTSTART:${dtstart}
DTEND:${dtend}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`
    );
  };

  // Funzione per scaricare il file ICS
  const downloadICS = () => {
    const icsContent = generateICS(event);
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${event.title}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Funzione per condividere l'evento tramite la Web Share API (o fallback copiando il testo)
  const shareEvent = () => {
    const shareData = {
      title: event.title, text: `*${event.title}* \n ${event.description}\nData: ${event.date}\nOra: ${event.time}\nLuogo: ${event.location}`,
      url: window.location.href //Link al sito
    };

    if (navigator.share) {
      navigator.share(shareData)
        .then(() => console.log('Evento condiviso con successo'))
        .catch((error) => console.error('Errore durante la condivisione:', error));
    } else {
      const shareText = `${event.title}\n${event.description}\nData: ${event.date}\nOra: ${event.time}\nLuogo: ${event.location}`;
      navigator.clipboard.writeText(shareText)
        .then(() => alert("Dettagli evento copiati negli appunti."))
        .catch((error) => console.error('Errore durante la copia negli appunti:', error));
    }
  };

  // Funzione per gestire l'apertura/chiusura del dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{event.title}</h2>
        <p>{event.description}</p>
        {/*event.image && (
          <ProgressiveImage 
            src={event.image} 
            alt={event.title} 
            className="immagine modal-image" 
          />
        )*/}
        <p>
          <strong>Data:</strong> {event.date}
        </p>
        <p>
          <strong>Ora:</strong> {event.time}
        </p>
        <p>
          <strong>Luogo:</strong> {event.location}
        </p>
        {/* Dropdown per le opzioni di condivisione */}
        <div className="share-dropdown">
          <button className="btn dropdown-toggle" onClick={toggleDropdown}>
            Condividi evento
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <a
                href={generateGoogleCalendarUrl(event)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn dropdown-item"
              >
                Aggiungi a Google Calendar
              </a>
              <button onClick={downloadICS} className="btn dropdown-item">
                Scarica evento (.ics)
              </button>
              <button onClick={shareEvent} className="btn dropdown-item">
                Altro
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


const ProgInfoComponent = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleWidgetClick = (eventData, date) => {
    // Aggiungiamo la data dall'oggetto giorno se non presente nell'evento
    setSelectedEvent({ ...eventData, date });
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="home-container">

<div>
     <header className="home-header">
        <h1 className="title">Mappa</h1>
      </header>
      <img src={MyMap} alt='Mappa CBN' ></img>
   </div>


<header className="home-header">
        <h1 className="title">Mostre</h1>
      </header>

      <div className="widget-container">
        <div className=''>
          <h2>
          "UOMOVIVO: la coscienza di esser vivi"
          </h2>
          <p>
          Mostra su Gilbert Keith Chesterton.
          </p>
        </div>
        <div className=''>
          <h2>
          "Farsi ferita"
          </h2>
          <p>
          Mostra sull'attualità attraverso lo sguardo di Giovanni Testori.
          </p>
        </div>
        <div className=''>
          <h2>
          "Universita': qui si accende la vita"
          </h2>
          <p>
          Mostra sulla vita in Università.
          </p>
        </div>
      </div>

      <header className="home-header">
        <h1 className="title">Programma</h1>
      </header>

      {programData.days.map((day) => (
        <div key={day.date}>
          <h2>{day.date}</h2>
          <div className="widget-container">
            {day.events.map((event, index) => (
              <div
                key={index}
                className="widget"
                onClick={() => handleWidgetClick(event, day.date)}
              >
                <h2>{event.title}</h2>
                <p>{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {selectedEvent && <Modal event={selectedEvent} onClose={closeModal} />}
    
      <br/>


      
    </div>
  );
};

export default ProgInfoComponent;
