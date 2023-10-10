import React from 'react'
import paymentCard from "../assets/payment.png"

import { BiLogoFacebook,BiLogoInstagram,BiLogoLinkedin } from 'react-icons/bi';

const Footer = () => {
  return (
      <div className='lg:px-20 md:px-12 px-12 mt-8 py-6 bg-[#262626]'>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:gap-0 mt-10'>

               <div className='bg-[#1B1B1B] text-white py-8 px-8'>
                  <h2 className='py-2 text-xl'>MamonDots</h2>
                  <p className='text-[#727272d1]'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium. At Nulla id tincidunt ut sed semper vel Lorem rnare. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
                  <div className='flex items-center space-x-2 text-xl py-4 cursor-pointer'>
                       <p className='hover:text-[red] duration-300'><BiLogoFacebook></BiLogoFacebook></p>
                       <p className='hover:text-[red] duration-300'><BiLogoInstagram></BiLogoInstagram></p>
                       <p className='hover:text-[red] duration-300'><BiLogoLinkedin></BiLogoLinkedin></p>
                       
                  </div>
               </div>

               <div className='bg-[#2A2A2A] text-white py-8 px-8'>
                  <h2 className='py-2 text-lg'>CUSTOMER SERVICE</h2>
                  <ul className='text-[#727272d1] space-y-2 py-2'>
                      <li className='hover:text-[red] duration-300'><a href="">Contact us</a></li>
                      <li className='hover:text-[red] duration-300'><a href="">Help and advice</a></li>
                      <li className='hover:text-[red] duration-300'><a href="">Shipping & Returns</a></li>
                      <li className='hover:text-[red] duration-300'><a href="">Terms and conditions</a></li>
                      <li className='hover:text-[red] duration-300'><a href="">Refund Policy</a></li>
                  </ul>
                  
               </div>

               <div className='bg-[#1A1A1A] text-white py-8 px-8'>
               <h2 className='py-2 text-lg'>INFORMATION</h2>
                  <ul className='text-[#727272d1] space-y-2 py-2'>
                      <li className='hover:text-[red] duration-300'><a href="">
                      About Us</a></li>
                      <li className='hover:text-[red] duration-300'><a href="">
                      Testimonials</a></li>
                      <li className='hover:text-[red] duration-300'><a href="">
                      My Account</a></li>
                      <li className='hover:text-[red] duration-300'><a href="">
                      Payments & Returns</a></li>
                      <li className='hover:text-[red] duration-300'><a href="">
                      View Catalogues Online</a></li>
                  </ul>
               </div>

          </div>

          <div className='flex items-center justify-center flex-col text-center mt-12'>
               <img  src={paymentCard} alt="" />
               <p className='text-white text-sm py-4'>Copyright © 2023 chaourad. All rights reserved.</p>
          </div>
      </div>
  );
};

export default Footer;