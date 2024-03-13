import React from "react";
import "./navbar.css";


export const Navbar = () => {
  
  return (
    
<div className="container">
      <header>
        <a href="#" id="logo"> <i className="fas fa-utensils"></i>  Restoran</a>
    <div id ="navbar">
       <h4><a className="nav" href="#home">Home</a></h4>
       <h4><a className="nav" href="#about">About</a></h4>
       <h4><a className="nav" href="#service">Service</a></h4>
       <h4><a className="nav" href="#menu">Menu</a></h4>
       <h4><a className="nav" href="#pages">Pages</a></h4>
       <h4><a className="nav" href="#contact">Contact</a></h4>
       <button className="btn">Book a Table</button>
    </div>
    </header>
    <div className="home">
      <h1 id="text_1">Enjoy Our<br/>Delicious Meal </h1>
      <p id="para_1">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et<br/>
       eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore<br/> erat amet</p>
       <button className="btn_1">Book a Table</button>
       <div className="decor"> 
       <div className="circle">
      <img src="https://themewagon.github.io/restoran/img/hero.png" alt="circle" />
    </div>
    </div>
    </div>
    </div>  
  );
};
