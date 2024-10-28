import React from 'react';
import './PersonalInfo.css'; 


const PersonalInfo = () => {
  return (
    <section className="personal-info-section">
      <h2 className="personal-info-title">Información Personal</h2>
      <div className="personal-info-item">
        <div className="circle"></div>
        <p><strong>Nombre:</strong> Marco Antonio Espina Erices</p>
      </div>
      <div className="personal-info-item">
        <div className="circle"></div>
        <p><strong>Edad:</strong> 34 Años.</p>
      </div>
      <div className="personal-info-item">
        <div className="circle"></div>
        <p><strong>Ubicación:</strong> Santiago, Chile.</p>
      </div>
      <div className="personal-info-item">
        <div className="circle"></div>
        <p><strong>Teléfono:</strong> +56921106869</p>
      </div>
    </section>
  );
};

export default PersonalInfo;
