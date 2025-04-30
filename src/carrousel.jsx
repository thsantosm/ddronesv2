import React, { useState, useEffect } from 'react';
import './Carousel.css';
import image1 from './img/teste1.png';
import image2 from './img/teste2.png';
import image3 from './img/gelo.jpg';
import image4 from './img/desert.jpg';
import image5 from './img/img2.jpg';

const images = [
  {src: image1, text: "Explore o Mundo com a Digital Drones"},
  { src: image2, text: "Explore o Mundo com a Digital Drones" },
  { src: image3, text: "Explore o Mundo com a Digital Drones" },
  { src: image4, text: "Explore o Mundo com a Digital Drones" },
  { src: image5, text: "Explore o Mundo com a Digital Drones" },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  // Autoplay: troca de imagem a cada 8 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // limpa o intervalo ao desmontar
  }, []);

  const goTo = (i) => setIndex(i); // Para os indicadores

  return (
    <div className="carousel-container">
     
      <img src={images[index].src} alt={`Slide ${index + 1}`} className="carousel-image" />
      
      {/* Overlay para melhorar visibilidade do texto */}
      <div className="overlay"></div>

      {/* Texto sobre a imagem */}
      <div className="carousel-text">
        <h2>{images[index].text}</h2>
        
      </div>

      

      {/* Indicadores */}
      <div className="carousel-indicators">
        {images.map((_, i) => (
          <span 
            key={i} 
            className={`indicator ${i === index ? 'active' : ''}`} 
            onClick={() => goTo(i)} 
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
