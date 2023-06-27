import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className="footer">
    <p className="footer__text">
        Developed by <a href="/">Echezona</a>
      </p>
      <p>&copy;{new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer
