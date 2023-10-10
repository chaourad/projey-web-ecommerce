import React from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BsCart } from "react-icons/bs"

function Header() {
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between ">
        <Link to="/">
          <div>
            <img src={logo} alt="logo" className="w-[110px]" />
          </div>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <Link to="/">
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
                Home
              </li>
            </Link>
            <Link to="/product">
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
                Product
              </li>
            </Link>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              Blog
            </li>
          </ul>
          <Link to="/user/favorite">
            <AiOutlineHeart className=" w-6 h-6 rounded-full" />
          </Link>
          <Link to="/cart">
            <div className="relative">
              <BsCart className="w-6 h-6"  />
              <span className=" absolute w-7 top-1 left-0 text-sm flex items-center justify-center font-semibold">
                0
              </span>
            </div>
          </Link>
         
          <Link to="/login">
            <AiOutlineUser className="  w-6 h-6 rounded-full" />
          </Link>
         
        </div>
      </div>
    </div>
  );
}

export default Header;
