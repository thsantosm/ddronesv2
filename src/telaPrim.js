import React, { useState } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook} from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import video1 from './img/312.mp4';
import video2 from './img/123.mp4';
import video3 from './img/122.mp4';
import logo from './img/12.png';
import Carousel from './carrousel';

const App = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [evento, setEvento] = useState('');
  const [local, setLocal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = `https://api.whatsapp.com/send?phone=5534991165934&text=*Olá Boa tarde,*%0A%0AMeu nome é %0A*${nome}*%0A%0AE-mail:%0A*${email}*%0A%0ATelefone para contato:%0A*${telefone}*%0A%0AO Evento será em:%0A*${evento}*%0A%0AEndereço/Local:%0A*${local}*`;

    window.open(url);
  };

  return (
    <div className="app">
      <header className="navbar">
        <motion.img 
          src={logo} 
          alt="Logo" 
          className="logo"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        />
        <nav className="nav-links">
          <a href="#sobre">Sobre</a>
          <a href="#galeria">Galeria</a>
          <a href="#contato">Contato</a>
        </nav>
        <div className="social-icons">
          <a href="https://instagram.com/digitaldronesudi" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram}  />
          </a>
          <a href="https://www.facebook.com/digitaldronesuberlandia" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>          
        </div>
      </header>
      <Carousel />
      
      <section className="content" id="sobre">
        <motion.div 
          className="section"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        ><br />
          <h2>Sobre</h2>
          <p>
            Somos especialistas em captação de imagens aéreas com drones, unindo tecnologia e criatividade para entregar resultados de alta qualidade.
            Desde abril de 2022, atuamos no mercado oferecendo soluções em imagens aéreas com equipamentos modernos e adaptados às necessidades de cada cliente. Trabalhamos com pilotos de RPA (Aeronave Remotamente Pilotada) credenciados e habilitados de acordo com a legislação vigente (ANAC e DECEA).
            Nossos serviços incluem:<br /><br />
            - Captação de imagens aéreas (aerofotografia e videografia)<br />
            - Cobertura de festas e eventos<br />
            - Acompanhamento de obras<br />
            - Vídeos de marketing para imóveis<br />
          </p>
        </motion.div>

        <section className="content" id="galeria">
          <motion.div 
            className="section" 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <h2>Galeria</h2>
            <div className="gallery">     
              <video src={video1} alt="Drone Video 1" className="video-item" autoPlay muted loop playsInline />
              <video src={video2} alt="Drone Video 1" className="video-item" autoPlay muted loop playsInline />
              <video src={video3} alt="Drone Video 1" className="video-item" autoPlay muted loop playsInline />
            </div>
          </motion.div>
          <p className="danger">É proibida a reprodução e utilização, total ou parcial, sob qualquer forma ou modalidade, sem prévia e expressa autorização, inclusive sua mera reprodução ou disponibilização para fins comerciais, direta ou indiretamente lucrativos</p>
        </section>        

        <br />
        <motion.div 
          className="section" id="contato"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Contato</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Seu nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
            <input type="email" placeholder="Seu email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="text" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
            <input type="text" placeholder="Tipo de evento" value={evento} onChange={(e) => setEvento(e.target.value)} required />
            <input type="text" placeholder="Local do evento" value={local} onChange={(e) => setLocal(e.target.value)} required />
            <button type="submit">Enviar para o WhatsApp</button>
          </form>
        </motion.div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Digital Drones. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
