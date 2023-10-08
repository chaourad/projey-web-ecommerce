import React from 'react'
import { TiVolumeUp } from "react-icons/ti";
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';
function Cart(props) {
  //if the user is not connect we show this pages
  return (
    <>
      <div className=' bg-[#d9eaff]'>
        <div style={{ padding: "0px 40px " }} className='flex flex-row items-center'>
          <TiVolumeUp className='ml-2 mr-2' />
          <p>Livraison en Point Relais : facilitez votre vie et faites vos achats.</p>
        </div>
      </div>
      <div className='max-w-screen-xl mx-auto py-20 flex'>
      <CartItem />
      
        <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
          <div className='flex flex-col gap-6 border-b-[1px] border-gray-400 pb-6'>
          <h2 className='text-2xl font-medium'> cart totals</h2>
          <p className='flex items-center gap-4 text-base'>
            Subtotal
            <span className=' font-bold text-lg'>MAD 200</span>
          </p>
          <p className='flex items-start gap-4 text-base'>
            Shipping
            <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </span>
          </p>
          </div>   
          <p className='font-semibold flex justify-between mt-6'>
            Total
            <span className='font-bold text-s'>
              MAD 200
            </span>
          </p>  
          <Link to="/paymentgateway">
 
          <button className='text-base text-white w-full hover:bg-gray-800 bg-black py-3 mt-6 duration-300 '>proceed to checkout</button>
        </Link>
        </div>

      
      </div>
     

    </>
  )
}

export default Cart