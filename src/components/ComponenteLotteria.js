import React, { useState } from 'react';
import premi from './PremiLotteria.json';

const Lotteria = () => {
  const [query, setQuery] = useState('');

  // Filtro dei premi in base al numero cercato
  const premiFiltrati = query
    ? premi.filter((premio) => premio.numero.toString().includes(query))
    : premi;

  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className='title'>Lotteria</h1>
      </header>

      <div className='widget'>
        
        <p>
        Per confermare la propria vincita telefonare al +39 388 1630145 oppure al numero +39 347 6575383.
        <br></br>
        I premi devono essere ritirati presso Via San Donato 175/4 - interno 7, Bologna (40127) tassativamente entro il 13 luglio 2025.
        </p>
      </div>

      <div className="">
        <input
          type="text"
          placeholder="Cerca numero vincente"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: '8px', width: '100%', marginTop: '10px' }}
        />
      </div>
      <div className="widget-container">
        {premiFiltrati.length > 0 ? (
          premiFiltrati.map((premio) => (
            <div key={premio.premio}>
              <h2>{premio.premio}° premio</h2>
              <p>{premio.descrizione}</p>
              <p><strong>Numero vincente:</strong> {premio.numero}</p>
            </div>
          ))
        ) : (
          <p>Nessun numero vincente trovato.</p>
        )}
      </div>
    </div>
  );
};

export default Lotteria;