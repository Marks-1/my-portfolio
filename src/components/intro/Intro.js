import React from 'react'
import './Intro.css'
import mark from '../../images/mark.svg';


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
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
              optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
              obcaecati tenetur iure eius earum ut mo</p>
          </div>
        </div>
      </div>
      <div className="my-intro__right"><img src={mark} alt="mark-image" /></div>
    </div>
  );
}

export default Intro