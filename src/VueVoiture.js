import React, { useState } from 'react';

function VueVoiture({ couleurSelectionnee, janteSelectionnee }) {
  const angles = [
    `image/porsche${couleurSelectionnee}1_${janteSelectionnee}.jpg`,
    `image/porsche${couleurSelectionnee}2_${janteSelectionnee}.jpg`,
    `image/porsche${couleurSelectionnee}3_${janteSelectionnee}.jpg`,
    `image/porsche${couleurSelectionnee}4_${janteSelectionnee}.jpg`,
  ];

  const [indiceAngleActuel, setIndiceAngleActuel] = useState(0);
  const [opacite, setOpacite] = useState(1);

  const afficherAngleSuivant = () => {
    setOpacite(0);
    setTimeout(() => {
      setIndiceAngleActuel((indicePrecedent) => (indicePrecedent + 1) % angles.length);
      setOpacite(1);
    }, 300); // 300ms est la durée de la transition
  };

  const afficherAnglePrecedent = () => {
    setOpacite(0);
    setTimeout(() => {
      setIndiceAngleActuel((indicePrecedent) => (indicePrecedent - 1 + angles.length) % angles.length);
      setOpacite(1);
    }, 300);
  };

  return (
    <div className='vueVoiture'>
      <img 
        src={angles[indiceAngleActuel]} 
        alt="Porsche" 
        style={{ opacity: opacite, transition: 'opacity 300ms ease-in-out' }}
      />
      <div className='listeBouton'>
        <button className="boutonNavigation" onClick={afficherAnglePrecedent}>Précédent</button>
        <button className="boutonNavigation" onClick={afficherAngleSuivant}>Suivant</button>
      </div>
    </div>
  );
}

export default VueVoiture;
