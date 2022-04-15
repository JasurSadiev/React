import React from 'react';
import '../data.js';
import img1 from '../images/katie-zaferes.png';
import img2 from '../images/wedding-photography.png';
import img3 from '../images/mountain-bike.png';
import star from '../images/star.png'

const Card = (props, imgs) => {
  let badgeText
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  }else if (props.location === "Online"){
    badgeText = "ONLINE"
  }

  let img

  if (props.id == 1) {
    img = img1
  }else if (props.id == 2){
    img = img2
  }else{
    img = img3
  }
  return (
    <div className="card">
      { 
        badgeText && 
        <div className="card__badge">{badgeText}</div>
      }
      <img 
        src={(img)}
        className="card__image"
      />
      <div className="card__stats">
        <img src={star} className="card__star" />
        <span> {props.stats.rating} </span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card__title">{props.title}</p>
      <p className="card__price">
        <span className="bold">From ${props.price}</span> / person
      </p>
      <footer>
        <span>ALL RIGHTS RESERVED 2022</span>JS
      </footer>
    </div>
    
  )
}

export default Card