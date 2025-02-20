// CountdownComponent.js
import React from 'react';
import Countdown from 'react-countdown';

const CountdownComponent = () => {
  const targetDate = new Date('2025-05-09T00:00:00');

  // Renderer personalizzato per il countdown
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Renderizza null se il countdown è completato
      return null;
    } else {
      // Renderizza il countdown
      return (
        <div className="countdown">
          <h2 className="time title">
            {days} giorni {hours} ore {minutes} minuti {seconds} secondi
          </h2>
        </div>
      );
    }
  };

  return <Countdown date={targetDate} renderer={renderer} />;
};

export default CountdownComponent;
