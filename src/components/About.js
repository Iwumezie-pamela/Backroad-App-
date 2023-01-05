import React from 'react'
import aboutImg from '../images/about.jpeg'
const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-title">
        <h2>
          about <span className="about-span">us</span>
        </h2>
      </div>

      <div className="about-body">
        <div className="about-image">
          <img src={aboutImg} alt="" className='about-photo'/>
        </div>

        <div className="about-right">
          <h3 className="about-h3">explore the difference</h3>
          <p className="about-subtitle1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p className="about-subtitle2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <a href="#tours" className="about-btn">
            read more
          </a>
        </div>
      </div>
    </section>
  );
}

export default About
