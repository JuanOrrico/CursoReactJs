import { useState } from "react";
import "./galeria.css"

const getRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  const hexColor = '#' + randomNumber.toString(16).padStart(6, '0');
  return hexColor;
};

export default function GaleriaCard({ int }) {
  const [bgColor, setBgColor] = useState("#ecc411");

  const handleClick = () => {
    setBgColor(getRandomNumber());
  };

  return (
    <div className="card-gallery" style={{ backgroundColor: bgColor }}>
      <h3>{int}</h3>
      <button onClick={handleClick} className="btn-int">Cambiar Color</button>
    </div>
  );
}