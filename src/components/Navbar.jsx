import React from 'react';
import logo from "../assets/White_Elegant_Minimalist_Botanical_Logo-removebg-preview.png";
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navleft">
            <img src={logo} alt="Logo" />
            <h3>About me</h3>
            <h3>Portfolio</h3>
            <h3>Services</h3>
            <h3>Blog</h3>
        </div>
        <div className="navright">
            <h3>Book a Call<i class="ri-arrow-right-up-line"></i></h3>
        </div>
    </div>
  );
};

export default Navbar;