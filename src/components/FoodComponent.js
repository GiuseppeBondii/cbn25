import React, { useState, useEffect } from 'react';
import data from './FastFood.json';
import "./Food.css"


const STORAGE_KEY = 'fastfood_wishlist';

const FoodComponent = () => {
  const [wishlist, setWishlist] = useState([]);

  // Carica wishlist da localStorage all'avvio
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      setWishlist(parsed);
      console.log('Wishlist caricata da localStorage:', parsed);
    }
  }, []);

  // Salva wishlist su localStorage a ogni modifica
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlist));
    console.log('Wishlist salvata su localStorage:', wishlist);
  }, [wishlist]);

  // Modifica quantità di un articolo
  const changeQuantity = (item, delta) => {
    setWishlist(prev => {
      const exists = prev.find(i => i.id === item.id);
      if (exists) {
        const updated = prev
          .map(i =>
            i.id === item.id ? { ...i, quantity: i.quantity + delta } : i
          )
          .filter(i => i.quantity > 0);
        return updated;
      } else if (delta > 0) {
        return [...prev, { ...item, quantity: 1 }];
      }
      return prev;
    });
  };

  // Svuota wishlist
  const clearWishlist = () => {
    setWishlist([]);
    console.log('Wishlist svuotata');
  };

  // Calcola totale
  const getTotal = () => {
    return wishlist
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toFixed(2);
  };

  // Condivide wishlist copiandola negli appunti
  const shareWishlist = () => {
    const text = wishlist
      .map(i => `${i.name} x${i.quantity} - €${(i.price * i.quantity).toFixed(2)}`)
      .join('\n') + `\nTotal: €${getTotal()}`;
    navigator.clipboard.writeText(text)
      .then(() => alert('Wishlist copiata negli appunti!'))
      .catch(() => alert('Errore nella copia della wishlist.'));
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="title">Menu'</h1>
      </header>

      <div className="widget-container menu-container">
        {data.categories.map(cat => (
          <div key={cat.name} className="widget">
            <h2>{cat.name}</h2>
            <ul>
              {cat.items.map(item => (
                <li
                  key={item.id}
                  className="menu-item"
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <div>
                    <span className="item-name">
                      {item.name} - €{item.price.toFixed(2)}
                    </span>
                    {item.description && (
                      <p className="item-desc">{item.description}</p>
                    )}
                    {item.available_on && (
                      <small className="item-available">Disponibile: {item.available_on}</small>
                    )}
                  </div>
                  <div className="quantity-control">
                    <button
                      onClick={() => changeQuantity(item, -1)}
                      disabled={!wishlist.find(i => i.id === item.id)}
                    >
                      –
                    </button>
                    <span style={{ margin: '0 8px' }}>
                      {wishlist.find(i => i.id === item.id)?.quantity || 0}
                    </span>
                    <button onClick={() => changeQuantity(item, 1)}>+</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <br></br>
      <br></br>


      <section className="widget-white wishlist-section">
        <h2>La tua Wishlist</h2>
        {wishlist.length === 0 ? (
          <p>La wishlist è vuota.</p>
        ) : (
          <>
            <ul>
              {wishlist.map(item => (
                <li
                  key={item.id}
                  className="wishlist-item"
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <span>
                    {item.name} – €{(item.price * item.quantity).toFixed(2)}
                  </span>
                  <div className="quantity-control">
                    <button onClick={() => changeQuantity(item, -1)}>–</button>
                    <span style={{ margin: '0 8px' }}>{item.quantity}</span>
                    <button onClick={() => changeQuantity(item, 1)}>+</button>
                  </div>
                </li>
              ))}
            </ul>
            <p><strong>Totale: €{getTotal()}</strong></p>
            <div className="wishlist-actions">
              <button onClick={shareWishlist}>Condividi Wishlist</button>
              <button onClick={clearWishlist}>Elimina Wishlist</button>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default FoodComponent;
