import React from "react";
import isfahan from '../images/isfahan.jpeg';
import masal from '../images/masal.jpeg';
import fouman from '../images/fuman.jpeg';
import { Button } from "bootstrap";
import bulut from '../assets/bulut.mp4'

const Albums = () => {
    return (
      <>
      <video src={bulut} autoPlay loop muted className="videobg">
        
      </video>
    <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={isfahan} className="d-block w-100"  alt="..." />
    </div>
    <div className="carousel-item">
      <img src={masal} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={fouman} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  </>
    )
  };

  
  export default Albums;