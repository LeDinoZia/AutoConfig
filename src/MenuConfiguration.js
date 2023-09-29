import React, { useState } from 'react';

function MenuConfiguration({ setCouleurSelectionnee, setJanteSelectionnee }) {
  const couleurs = [
    { nom: 'Blanc', code: 'white' },
    { nom: 'Noir', code: 'black' },
    { nom: 'Rouge', code: 'red' },
    { nom: 'Jaune', code: 'yellow' },
  ];

  const jantes = [
    { type: '1', description: 'Jantes en aluminium forgé (argent)' },
    { type: '2', description: 'Jantes allégées en aluminium forgé (or)' },
    { type: '3', description: 'Jantes peintes en Rouge Pyro' },
    { type: '4', description: 'Jantes peintes en Noir (finition satinée)' },
  ];


  const [couleurActive, setCouleurActive] = useState('Blanc');

  const choisirCouleur = (couleur) => {
    setCouleurSelectionnee(couleur);
    setCouleurActive(couleur);
  };

  return (
    <div>
      <h2>Configuration</h2>
      <div>
        <label>Couleur :</label>
        <ul>
          {couleurs.map((couleur) => (
            <li key={couleur.nom} onClick={() => choisirCouleur(couleur.nom)}>
              <span 
                className={couleur.nom === couleurActive ? 'selectionnee' : ''}
                style={{ backgroundColor: couleur.code }}
              ></span>
            </li>
          ))}
        </ul>
              
        <label>Jantes :</label>
        <ul className='listeJantes'>
          {jantes.map((jante) => (
            <li key={jante.type}>
              <input 
                type="radio" 
                id={`jante-${jante.type}`} 
                name="jante" 
                value={jante.type} 
                onChange={() => setJanteSelectionnee(jante.type)}
                defaultChecked={jante.type === '1'}
              />
              <label htmlFor={`jante-${jante.type}`}>{jante.description}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MenuConfiguration;
