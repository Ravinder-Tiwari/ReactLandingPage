import React from 'react';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navleft">
            <img src="./src/White_Elegant_Minimalist_Botanical_Logo-removebg-preview.png" alt="" />
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