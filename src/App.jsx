import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import "./App.css";
import imagen from './image/foto.jpg';
import logo from './image/logo.png';
import pdf from './info/cv-Gerardo-Chevarria-Rodriguez.pdf';
import JuegoAdivinanzas from "./image/imagenJuegoAdivinanzas.png";
import AluraPlay from "./image/AluraPlay.png";
import Fokus from "./image/Fokus.png";
import AluraMidi from "./image/AluraMidi.png";
import EncriptadorTexto from "./image/EncriptadorTexto.png";
import AluraGeek from "./image/AluraGeek.png";
import AluraBank from "./image/AluraBank.png";
function App() {
  const [isOscuro, setIsOscuro] = useState(false);

  const botonalert = () => {
    Swal.fire({
      title: "Buen trabajo!",
      text: "Se envio con exito tu mensaje!",
      icon: "success"
    });
  }
;

  return (
    <>
        
        <div className="encabezado-flex">
          <header className="encabezado">
            <nav className="nav-encabezado">
              <a  href="#" className="logo"><img className="image-logo" src={logo} alt="" /></a>
              <ul className="lista">
                <li className="item">
                  <a>Inicio</a>
                </li>
                <li className="item">
                  <a href="#sobre-mi">Sobre Mi</a>
                </li>
                <li className="item">
                  <a href="#habilidades">Habilidades</a>
                </li>
                <li className="item">
                  <a href="#proyectos">Mis proyectos</a>
                </li>
                
              </ul>
              {/* <button src="https://Facebook.com" className="button">Contactame</button> */}
              <a href="https://api.whatsapp.com/send?phone=51910335230&text=Hola%20Gerardo!" className="button" target="_blank">Contáctame</a>
            </nav>
          </header>
                                                
            <section className="container__descripcion">
              <div className="container__informacion">
                <div className="descripcion">
                  <h2 className="titulo">
                    Hola, soy Gerardo Kazama
                  </h2>
                  <h2 className="subtitulo">Programador Frontend</h2>
                  <a href="https://api.whatsapp.com/send?phone=51910335230&text=Hola%20Gerardo!" className="button" target="_blank">Contáctame</a>
                  <a href=""></a>
                </div>
                <div className="imagen">
                  <img className="imagen-foto" src={imagen} alt="Gerardo Josias Chevarria Rodriguez" />
                </div>  
              </div>
            </section>
        </div>
      <section id="sobre-mi" className="container__about">
          <h2  className="titulo-about">Sobre mi</h2>
          <div className="container__child">
            <div className="imagen-container-about">
              <img className="imagen-about" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1s31cS9q9zP1W2X4gJXk0evKaV3nsBHqdIre-rpR93w&s" alt="" />
            </div>
              <div className="descripcion-about">
                <p className="texto-about">Soy un entusiasta joven apasionado por la tecnología. Recientemente me gradué en la carrera Ingeniería de Software, adquiriendo habilidades en el desarrollo de aplicaciones web. En mi tiempo libre, disfruto tocando la guitarra. Adjunto mi currículum vitae para más detalles.</p>
                <div className="info-container">
                  <div className="info__about">
                    <span className="about-info__about">1+</span>
                    <p>Años de experiencia</p>
                  </div>
                  <div className="info__about">
                    <span className="about-info__about">5+</span>
                    <p>Proyectos completados</p>
                  </div>
                  <div className="info__about">
                    <span className="about-info__about">2+</span>
                    <p>Años aprendiendo</p>
                  </div>
                </div>
                <div className="button-about">
                  <a download href={pdf} >Descargar CV<i class="fa-solid fa-download"></i></a>
                </div>  
            </div>
          </div>
      </section>
      {/* Habilidades */}
      <section id="habilidades" className="container__skills">
        <div className="titulo-skills">
            <h2>Mis Habilidades</h2>
        </div>
        <div className="flex__container-skills">
          <div className="flex__item-skills">
          <iconify-icon class="card__icons" icon="vscode-icons:file-type-html"></iconify-icon>
            <p className="texto-item-skills">HTML</p>
          </div>
          <div className="flex__item-skills">
          <iconify-icon class="card__icons" icon="vscode-icons:file-type-css"></iconify-icon>
            <p className="texto-item-skills">CSS</p>
          </div>
          <div className="flex__item-skills">
          <iconify-icon class="card__icons card__icons--javascript" icon="devicon:javascript"></iconify-icon>
            <p className="texto-item-skills">JS</p>
          </div>
          <div className="flex__item-skills">
          <iconify-icon class="card__icons" icon="skill-icons:react-dark"></iconify-icon>
            <p className="texto-item-skills">React</p>
          </div>
        </div>
      </section>
      {/* Proyectos */}
      <section id="proyectos" className="contenedor__project">
        <div className="titulo-project">
          <h2>Mis proyectos</h2>
        </div>
        <div className="flex__project">
          <div className="flex__item-project">
            <div className="imagen-project">
              <img className="imagen-project" src={EncriptadorTexto} alt="" />
            </div>
            <div className="descripcion-project">
                <a className="descripcion-project__etiqueta" href="#">View Demo</a>
                <a className="descripcion-project__etiqueta" href="#">View Repo</a>
            </div>
          </div>
          <div className="flex__item-project">
            <div className="imagen-project">
              <img className="imagen-project" src={Fokus} alt="" />
            </div>
            <div className="descripcion-project">
                <a className="descripcion-project__etiqueta" href="https://gerardojcr.github.io/Fokus-Pomodoro-Technnique/" target="_blank">View Demo</a>
                <a className="descripcion-project__etiqueta" href="https://github.com/GerardoJCR/Fokus-Pomodoro-Technnique" target="_blank">View Repo</a>
            </div>
          </div>
          <div className="flex__item-project">
            <div className="imagen-project">
              <img className="imagen-project" src={AluraPlay} alt="" />
            </div>
            <div className="descripcion-project">
                <a className="descripcion-project__etiqueta" href="https://gerardojcr.github.io/YouTube-Cloning/" target="_blank">View Demo</a>
                <a className="descripcion-project__etiqueta" href="https://github.com/GerardoJCR/YouTube-Cloning" target="_blank">View Repo</a>
            </div>
          </div>
          <div className="flex__item-project">
            <div className="imagen-project">
              <img className="imagen-project" src={AluraMidi} alt="" />
            </div>
            <div className="descripcion-project">
                <a className="descripcion-project__etiqueta" href="https://gerardojcr.github.io/Project-Alura-Midi/" target="_blank">View Demo</a>
                <a className="descripcion-project__etiqueta" href="https://github.com/GerardoJCR/Project-Alura-Midi" target="_blank">View Repo</a>
            </div>
          </div>
          <div className="flex__item-project">
            <div className="imagen-project">
              <img className="imagen-project" src={AluraBank} alt="" />
            </div>
            <div className="descripcion-project">
                <a className="descripcion-project__etiqueta" href="https://alura-bank-aplicaci-n-bancaria-ficticia.vercel.app/" target="_blank">View Demo</a>
                <a className="descripcion-project__etiqueta" href="https://github.com/GerardoJCR/AluraBank---Aplicaci-n-Bancaria-Ficticia-" target="_blank">View Repo</a>
            </div>
          </div>
          <div className="flex__item-project">
            <div className="imagen-project">
              <img className="imagen-project" src={AluraGeek} alt="" />
            </div>
            <div className="descripcion-project">
                <a className="descripcion-project__etiqueta" href="https://alura-geek-smoky.vercel.app/" target="_blank">View Demo</a>
                <a className="descripcion-project__etiqueta" href="https://github.com/GerardoJCR/Alura-Geek" target="_blank">View Repo</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contactame */}

      <div>
        <h2 className="titulo-contact">Contáctame</h2>
        <form action="https://formsubmit.co/chevarriacode@gmail.com" method="POST" className="formulario">
          
          <label >Nombre Completo
            <input type="text" placeholder="John Deep" name="nombre" />
          </label>

          <label >Correo Electronico
            <input type="email" placeholder="example@gmail.com" name="correo"  required/>
          </label>
          <label >Mensaje
            <textarea name="mensaje" id="" cols="30" rows="4" placeholder="Deja tu mensaje ..."></textarea>
          </label>
          <input className="button-form" type="submit"  onClick={botonalert}/>

          <input type="hidden" name="_next" value="http://localhost:5173/" />
          <input type="hidden" name="_captcha" value="false" />
        </form>
      </div>

      {/* footer */}
      <footer className="container__footer">
        <div className="flex-footer">
          <div className="imagen-footer">
            <img src={logo} alt="" />
          </div>
          <div className="descripcion-footer">
            <h2>Gerardo Chevarria</h2>
            <p>Programador Frontend</p>
          </div>
          <ul className="lista-footer">
            <li><a href="https://www.linkedin.com/in/gerardo-josias-chevarria-rodriguez/" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
            <li><a href="https://github.com/GerardoJCR" target="_blank"><i class="fa-brands fa-github"></i></a></li>
            <li><a href="https://wa.link/dad4oc" target="_blank"><i class="fa-brands fa-whatsapp"></i></a></li>
          </ul>
          
        </div>
        <div className="copyright">
          <p>@Gerardo Chevarria, all right reserved</p>
        </div>
        
      </footer>
      <script src="javascript.js"></script>
    </>
  );
}

export default App;