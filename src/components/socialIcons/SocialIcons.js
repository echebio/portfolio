import React from 'react'
import { FaFacebook, FaGithub,  FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import './socialicons.css'

function SocialIcons() {
  return (
    <div className="social__icons-wrapper">
      <div className="social__icons">
        <a href="https://github.com/echebio" aria-label="Link to Github" className="social__icon">
          <FaGithub size={18}/>
        </a>
        <a href="https://www.linkedin.com/in/echezona-anaeto-b90a301b9/" aria-label="Link to Linkedin" className="social__icon">
          <FaLinkedinIn size={18}/>
        </a>
        <a href="https://www.facebook.com/anaetoce" aria-label="Link to Facebook" className="social__icon">
          <FaFacebook size={18}/>
        </a>
        <a href="https://twitter.com/anaetoeche" aria-label="Link to Twitter" className="social__icon">
          <FaTwitter size={18}/>
        </a>
      </div>
    </div>
  )
}

export default SocialIcons
