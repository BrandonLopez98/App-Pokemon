import React from 'react';
import './About.css';
import Foto from './foto.JPG';

const About = () => {
  return (
    <div className='About'>
      <div className='inicio'>
        <img className='foto' src={Foto} alt="" />
        <div className='redes'>
            <a href="https://www.linkedin.com/in/esteban-lopez-monroy-01b562232/" className="submit-button">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Linkedin
            </a>
            <a href="https://github.com/BrandonLopez98" className="submit-button">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Github
            </a>
            <a href="https://www.instagram.com/brandonlopezmonroy/" className="submit-button">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Instagram
            </a>
        </div>
      </div>
      
      <div className='descripcion'>
      <h1>¿Quien soy?</h1>
        <p>Soy un joven profesional de 24 años, nativo y residente de Bogotá, Colombia, con una sólida determinación de convertirme en un destacado desarrollador web; Mi objetivo es desempeñarme como desarrollador junior en un entorno desafiante y colaborativo, donde pueda aplicar mis conocimientos en tecnología y destacar mis habilidades.</p>

        <p>En el ámbito de la tecnología, poseo una amplia comprensión de hardware, sistemas operativos y aplicaciones de escritorio, incluyendo Office 365; Mi experiencia en este campo me ha brindado una base sólida en el manejo de diferentes herramientas y tecnologías.</p>

        <p>En lo que respecta al desarrollo de software, cuento con un sólido dominio de HTML, CSS, Javascript y ES6, que son los fundamentos del desarrollo web; Además, estoy familiarizado con tecnologías como Ajax, React, Redux y Node.js, así como con el manejo de pruebas y la implementación de PostgreSQL y sequelize como base de datos.</p>

        <p>Me destaco por mi capacidad para colaborar efectivamente en equipos multidisciplinarios, donde puedo aportar ideas innovadoras y soluciones creativas; Mi enfoque es siempre orientado a resultados y estoy constantemente actualizando mis habilidades para mantenerme al tanto de las últimas tendencias en desarrollo web.</p>

        <p>Mi objetivo principal es seguir creciendo como desarrollador web, adquiriendo experiencia práctica y participando en proyectos desafiantes que me permitan expandir mis conocimientos y habilidades; Estoy motivado, soy autodidacta y siempre estoy buscando oportunidades para aprender y crecer profesionalmente.</p>

        <p>En resumen, soy un apasionado desarrollador junior con un amplio conocimiento en tecnología y un sólido dominio de las herramientas y tecnologías de desarrollo web; Mi enfoque orientado a resultados, mi capacidad para colaborar en equipos y mi voluntad constante de aprender y crecer me convierten en un candidato ideal para cualquier entorno de desarrollo web.</p>
        </div>
    </div>
  )
}

export default About
