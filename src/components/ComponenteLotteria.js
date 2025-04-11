import React from 'react';
import premi from './PremiLotteria.json';

const Lotteria = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className='title'>Lotteria</h1>
      </header>
      {/*<div className='widget'>
        <p>
        babel-preset-react-app is part of the create-react-app project, which
        is not maintianed anymore. It is thus unlikely that this bug will
        ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to
        your devDependencies to work around this error. This will make this message
        go away.
        </p>
      </div>*/}
      <div className="widget-container">
        {premi.map((premio) => (
          <div className="widge-whitet" key={premio.premio}>
            <h2>{premio.premio}° premio</h2>
            <p>{premio.descrizione}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lotteria;