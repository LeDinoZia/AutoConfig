import React from 'react';
import Configurator from './Configurateur';
import Footer from './Footer';

function App() {
  return (
    <div className="conteneurPrincipal">
      <div className="conteneurVoiture">
      <h1>Configurer votre 911 GT3RS</h1>
      <Configurator />
      </div>
      <Footer />
    </div>
  );
}

export default App; 
