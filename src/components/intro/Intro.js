import React from 'react'
import './Intro.css'
import mark from './images/mark.svg';


const Intro = () =>{
  return(
    <div className="my-intro">
      <div className="my-intro__left">
        <div className="my-intro__left--wrapper">
          <h2 className="my-intro__left--wrapper__greet">Hello, my name is</h2>
          <h1 className="my-intro__left--wrapper__name">Mark Onyach</h1>
          <div className="my-intro__left--wrapper__title">
            <div className="my-intro__left--wrapper__title--wrapper">
              <div className="my-intro__left--wrapper__title--wrapper__item">Web developer</div>
              <div className="my-intro__left--wrapper__title--wrapper__item">UX/UI designer</div>
              <div className="my-intro__left--wrapper__title--wrapper__item">Content creator</div>
              <div className="my-intro__left--wrapper__title--wrapper__item">Writer</div>
              <div className="my-intro__left--wrapper__title--wrapper__item">Photographer</div>
            </div>
          </div>
          <div className="my-intro__left--wrapper__desc">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis</p>
          </div>
        </div>
      </div>
      <div className="my-intro__right">
        <div className="my-intro__right--bg"></div>
        <img src={mark} alt="mark-image" className="my-intro__right--img" />
      </div>
    </div>
  );
}

export default Intro