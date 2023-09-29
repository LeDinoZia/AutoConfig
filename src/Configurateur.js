import React, { useState } from 'react';
import VueVoiture from './VueVoiture';
import MenuConfiguration from './MenuConfiguration';
import GenerateurFacture from './GenerateurFacture'; // Importez le nouveau composant

import './index.css';

function Configurateur() {
  const [couleurSelectionnee, setCouleurSelectionnee] = useState('Blanc');
  const [janteSelectionnee, setJanteSelectionnee] = useState('1');

  return (
    <div className="conteneur">
    <div className="conteneurInterne">
      <div className="vueVoiture">
        <VueVoiture couleurSelectionnee={couleurSelectionnee} janteSelectionnee={janteSelectionnee} />
      </div>
      <div className="menuConfiguration">
        <MenuConfiguration setCouleurSelectionnee={setCouleurSelectionnee} setJanteSelectionnee={setJanteSelectionnee} />
      </div>
    </div>
    <div className="generateurFacture">
      <GenerateurFacture configurationVoiture={{ couleurSelectionnee, janteSelectionnee }} />
    </div>
  </div>
  );
}

export default Configurateur;
