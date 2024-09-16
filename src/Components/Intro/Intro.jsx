import React from 'react'
import './Intro.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Intro = () => {
  return (
    <div>
      <div id="home" className="hero">
        <img src={profile_img} alt=" "></img>
        <h3><span>I'm Gurkirat Kaur </span></h3>
        <p>I am a Tech-Savvy professional with a blend of Technical expertise and
          Business acumen, holding a degree in MBA. My passion lies in
           Coding and Data Analytics, with a strong foundation in web development, 
           programming, and data analysis tools like Python, SQL, Power BI, and Excel.
            I have had the privilege of teaching these technologies to aspiring computer science students,
          helping them harness their potential in the tech world.</p>
          <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href="#contact">
              Connect With Me
            </AnchorLink> </div>
            <div className="hero-Resume"><a href="https://drive.google.com/file/d/13c8EMem-E4SYSMNBClGqWJIq5BtRr9N6/view?usp=sharing">My Resume</a></div>
          </div>


      </div>
    </div>
  )
}

export default Intro
