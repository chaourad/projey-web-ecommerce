import axios from "axios";
import { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import {HiOutlineArrowLeft} from "react-icons/hi"
function CartItem() {
  const [cartproduct, setCartproduct] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/api/v1/cartProducts/all')
      .then((response) => {
        console.log(response.data)
        setCartproduct(response.data)
      });
  }, [])
  return (
    <div className="w-2/3 pr-10">
      <div className="w-full">
        <h2 className="text-2xl">shopping cart</h2>
      </div> {cartproduct.map((item) => (
        <div className="flex items-center justify-between gap-6 mt-6" key={item.id}>
          <div key={item.cartId} className="flex gap-2 items-center">
            <MdOutlineClose className="text-xl text-gray-600 hover:text-red-500 cursor-pointer duration-300" />
            <img src={item.produit.image} alt={item.produit.title} className="w-32 h-32 object-cover" />
          </div>
          <h2 className="w-52">{item.produit.title}</h2>
          <p className="w-24 flex flex-row "> MAD {item.produit.prix}</p>

          <div className=" flex flex-row border-gray-400 border-2 p-2 items-center">
            <p className='text-sm mr-2'>Quantity</p>
            <div className='flex items-center gap-4 text-sm font-semibold'>
              <button className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>-</button>
              <span>{1}</span>
              <button className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>+</button>
            </div>
          </div>
          <p className="w-24"> MAD {item.quantity * item.produit.prix}</p>

        </div>
        
      ))}
      <button className=" bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300">Reset Carts</button>
      <Link to='/product'>
        <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
          <span>
            <HiOutlineArrowLeft/>
          </span>
          go shopping
        </button>
      </Link>
    </div>
    
  );
}

export default CartItem