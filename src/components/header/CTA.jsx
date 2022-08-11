import React from 'react'
import CV from '../../assets/Cv.docx'

/*call to action button CTA, will perform an action when the button is pressed*/

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className="btn">Download CV</a>
        <a href="#contact" className="btn btn-primary">Contact Me</a>
    </div>
  )
}

export default CTA