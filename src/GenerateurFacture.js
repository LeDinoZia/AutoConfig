import React from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

function GenerateurFacture({ configurationVoiture }) {
  const { couleurSelectionnee, janteSelectionnee } = configurationVoiture;

  const genererFacture = () => {
    const doc = new jsPDF();

    // Ajouter un titre
    doc.setFontSize(18);
    doc.text('Facture Proforma - Configuration de votre Porsche 911 GT3RS', 20, 30);

    // Définir les données du tableau
    const tableData = [
      { titre: 'Couleur', valeur: couleurSelectionnee },
      { titre: 'Type de Jante', valeur: janteSelectionnee },
      { titre: 'Nombre de Chevaux', valeur: '525 ch' },
      { titre: 'Couple maximum', valeur: '465 Nm' },
      { titre: 'Poids à vide (CE)', valeur: '1 525 kg' },
      { titre: 'Volume du réservoir', valeur: '64 l' },
      { titre: 'Vitesse maximale sur circuit', valeur: '296 km/h' },
      { titre: 'Accélération de 0 à 100 km/h', valeur: '3,2 s' },
      { titre: 'Prix', valeur: '253.454,00 €' },
    ];

    // Ajouter le tableau au PDF
    autoTable(doc, {
      startY: 50,
      columns: [
        { header: 'Caractéristique', dataKey: 'titre' },
        { header: 'Valeur', dataKey: 'valeur' },
      ],
      body: tableData,
    });

    // URL de l'image de la voiture
    const imageUrl = `/AutoConfig/image/porsche${couleurSelectionnee}1_${janteSelectionnee}.jpg`;

    // Charger et ajouter l'image de la voiture
    const img = new Image();
    img.src = imageUrl;
    img.onload = function () {
      doc.addImage(img, 'JPEG', 20, doc.lastAutoTable.finalY + 10, 170, 100);
      doc.save('facture-voiture.pdf');
    };
  };

  return (
    <button className='boutonFacture' onClick={genererFacture}>
      Télécharger la Facture
    </button>
  );
}

export default GenerateurFacture;
