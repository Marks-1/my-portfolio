import React from 'react';
import './About.css'
import photographer from './images/photographer.svg';

const About = () =>{
  return(
    <div className="about-me">
      <div className="about-me__left">
        <div className="about-me__left-card__bg"></div>
        <div className="about-me__left-card">
          <img src={photographer} alt="photographer" className="about-me__img" />
        </div>
      </div>
      <div className="about-me__right">
        <h1 className="about-me__right-title">About me</h1>
        <p className="about-me__sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis</p>
        <p className="about-me__sup">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis</p>
      </div>
    </div>
  )
}

export default About