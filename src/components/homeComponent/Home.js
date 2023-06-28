import React, {useEffect} from 'react'
import Snowfall from "react-snowfall"
import AOS from 'aos'
import 'aos/dist/aos.css'
import "./home.css"


function Home() {
  
  useEffect(() => {
    AOS.init({
      duration: 900
    });
    AOS.refresh(); 
  },[])
  return (
    <section className="hero__page"id="home">
      <div className="hero__content">
          <p className="welcome_para">
            Hi There, I'm
          </p>
          <h1 className="header_text" data-aos="fade-right" data-aos-once="true">
            <span className="special__letter">A</span>NA<span className="special__letter">E</span>TO EC<span className="special__letter">HE</span>ZO<span className="special__letter">Na</span>
          </h1>
          <p className="hero_text" data-aos="fade-left" data-aos-once="true">A creative and innovative software developer who is passionate in developing and maintaining quality websites and software App that solves problem.
          </p>
          <div className="hero__btn" data-aos="fade-up" data-aos-once="true">
            <a href="#projects"className="btn btn-pry" aria-label="see my projects">See my work</a>
            <a href="/asset/Anaeto_echezona_cv.pdf" download="Anaeto Echezona CV" className="btn btn-secondary" aria-label="download my resume">Resume</a>
          </div>
      </div>
      <Snowfall
      color="#66bd90"
      snowflakeCount={8}
      />
    </section>
  )
}

export default Home
