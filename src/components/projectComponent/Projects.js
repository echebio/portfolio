import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './project.css'

function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 600
    });
    AOS.refresh();
  }, []);

  return (
    <section id="projects" className="sections">
      <h2 className="section__header">Projects</h2>
      <ul className="projects__wrapper">
          <li className="project__item">
            <div className="project__content">
              <a href="https://tngdigital-clone.netlify.app/" className="project__image col">
                <div className="image" data-aos="zoom-out">
                  <img src="/images/tng-clone.jpg" alt="TnG Digital Clone" loading="lazy" />
                </div>
              </a>
              <div className="project__text-content col">
                <h2 className="project__title" data-aos="fade-up">TnG Digital Clone</h2>
                <p className="project__desc" data-aos="fade-up">This is a clone of the official Tng Digital landing page built with HTML, CSS, and Vanilla JavaScript. The landpage is fully reponsive, accessible, dynamic, and Progressive Web App (PWA) enabled to improve performance and user experience</p>
                <div className="project__links" data-aos="fade-down">
                  <a className="project__btn" href="https://tngdigital-clone.netlify.app/">Live Demo</a>
                </div>
              </div>
            </div>
          </li>
          <li className="project__item">
            <div className="project__content">
              <a href="https://gaffer-jersey.herokuapp.com/" className="project__image col">
                <div className="image" data-aos="zoom-out">
                  <img src="/images/gafferJersey.jpg" alt="GafferJersey Shop" loading="lazy" />
                </div>
              </a>
              <div className="project__text-content col">
                <h2 className="project__title" data-aos="fade-up">"GafferJersey Shop</h2>
                <p className="project__desc" data-aos="fade-up">A football jersey e-commerce store built with ReactJs (React Hooks), Firebase for user authentication and database management, Stripe for payment handling and hosted on Heroku.</p>
                <div className="project__links" data-aos="fade-down">
                  <a className="project__btn" href="https://gaffer-jersey.herokuapp.com/">Live Demo</a>
                </div>
              </div>
            </div>
          </li>
          <li className="project__item">
            <div className="project__content">
              <a href="https://kadar-exchange.netlify.app/" className="project__image col">
                <div className="image" data-aos="zoom-out">
                  <img src="/images/kadar.jpg" alt="Kadar Exchange" loading="lazy" />
                </div>
              </a>
              <div className="project__text-content col">
                <h2 className="project__title" data-aos="fade-up">Kadar Exchange</h2>
                <p className="project__desc" data-aos="fade-up">This is a real-time currency exchnage rate webpage built with ReactJs and ExchangeRate-API.</p>
                <div className="project__links" data-aos="fade-down">
                  <a className="project__btn" href="https://kadar-exchange.netlify.app/">Live Demo</a>
                </div>
              </div>
            </div>
          </li>
      </ul>
    </section>
  )
}

export default Projects
