import React from "react";
import "./about.css";

export const About = () => {
    
    console.log("hello")
  return (
    <main>
        <div className="boxes">
        <div className="box">
            <div className="box2"> 
            <h2 class="fas-fa"><i  className="fa fa-3x fa-user-tie text-primary mb-4"></i><br /></h2>
         <h1>  Master Chefs</h1>
            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
        </div>

        <div className="box">
            <div className="box2"> 
            <h2 class="fas-fa"><i  className="fa fa-3x fa-utensils text-primary mb-4"></i><br /></h2>
         <h1> Quality Food</h1>
            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
        </div>
        <div className="box">
            <div className="box2"> 
            <h2 class="fas-fa"><i  className="fa fa-3x fa-cart-plus text-primary mb-4"></i><br /></h2>
         <h1> Online Order</h1>
            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
        </div>
         <div className="box">
            <div className="box2"> 
            <h2 class="fas-fa"><i  className="fa fa-3x fa-headset text-primary mb-4"></i><br /></h2>
         <h1>  24/7 Service</h1>
            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
        </div>
        </div>
        <div className="college">
        <div className="pic">
            <img className="img1" src="https://themewagon.github.io/restoran/img/about-1.jpg" alt="pic1" />
            <img className="img2" src="https://themewagon.github.io/restoran/img/about-2.jpg" alt="pic1" />
        </div>
        <div className="pics">
        <img className="img3" src="https://themewagon.github.io/restoran/img/about-3.jpg" alt="pic1" />
        <img className="img4" src="https://themewagon.github.io/restoran/img/about-4.jpg" alt="pic1" />
        </div>
        </div>



        <div className="about">

        <h3 id="title">about us  <hr id="line" /> </h3> 
        <h2 id="title2">Welcome to <span id="fav"> <i  className="fa fa-1x fa-utensils text-primary mb-4"></i> </span>  Restoran</h2>
        <p className="para3">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem <br/>et sit, sed stet lorem sit.Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.<br/></p>
        <p className="para3">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et<br/> lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
        <h2>15</h2>
        <h4>Years of </h4>
        <h5>EXPERIENCE</h5>
        <h2>50</h2>
        <h4>popular</h4>
        <h5>MASTER CHEFS</h5>
        <button className="btn_2">Book a Table</button>

        </div>
       
       


        
       
    </main>
  
  );
};
