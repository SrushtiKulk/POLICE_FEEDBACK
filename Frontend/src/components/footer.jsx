import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="section-p1">
        <div className="col">      
        <div className="follow">
          <h4>Follow us</h4>
        </div>
      </div>

      <div className="col">
        <h4>About</h4>
        <a href="#">About us</a>
        <a href="#">Delivery Information</a>
        <a href="#">Terms and Conditions</a>
        <a href="#">Contact Us</a>
      </div>

      <div className="col">
        <h4>Account</h4>
        <a href="#">Sign In</a>
        <a href="#">View</a>
        <a href="#">Track my Order</a>
        <a href="#">Help</a>
      </div>
    </footer>
  );
};

export default Footer;