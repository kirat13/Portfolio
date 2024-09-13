import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.png'

const About = () => {
    return (
        <div>
            <div id='about' className="about">
                <div className="about-title">
                    <h1>About me</h1>
                    <img src={theme_pattern} alt=" "></img>
                </div>
                <div className="about-sections">
                    <div className="about-left">
                        <img src={profile_img} alt=" " />
                    </div>
                    <div className="about-right">
                        <div className="about-para">
                            <p>An Educator at Heart and a Leader by Profession, I’ve spent years 
                                nurturing talent in web development, programming, and data analytics.With extensive experience teaching computer science students,
                                I specialize in web development, programming languages like Java, Python, 
                                and JavaScript, and data analytics using tools such as Power BI, Excel, and SQL.
                                </p>
                                <p>As the Managing Director of Ken Computers, I’ve had the opportunity to not only shape minds but also steer the institution, handling all official documentation, operations, and growth strategies. I thrive at the intersection of technology, education, and leadership, always seeking to create impactful learning experiences while driving organizational success.</p>
                        </div>

                        <div className="about-skills">
                            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "100%" }}></hr></div>
                            <div className="about-skill"><p>React Js</p><hr style={{ width: "55%" }}></hr></div>
                            <div className="about-skill"><p>JavaScript</p><hr style={{ width: "60%" }}></hr></div>
                            <div className="about-skill"><p>Core & Adv.Java</p><hr style={{ width: "90%" }}></hr></div>
                            <div className="about-skill"><p>Python</p><hr style={{ width: "55%" }}></hr></div>
                            <div className="about-skill"><p>C & C++</p><hr style={{ width: "50%" }}></hr></div>
                            <div className="about-skill"><p>Adv.Excel</p><hr style={{ width: "95%" }}></hr></div>
                            <div className="about-skill"><p>SQL</p><hr style={{ width: "60%" }}></hr></div>
                            <div className="about-skill"><p>Power BI</p><hr style={{ width: "50%" }}></hr></div>
                           
                        </div>
                    </div>
                </div>

                <div className="about-achievements">
                    <div className="about-achievement">
                        <h1>4+</h1>
                        <p>YEARS OF EXPERIENCE</p>
                    </div>
                    <hr/>
                    <div className="about-achievement">
                        <h1>10+</h1>
                        <p>PROJECTS COMPLETED</p>
                    </div>
                    

                    
                </div>
            </div>
        </div>
    )
}

export default About
