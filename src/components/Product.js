import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {MdOutlineStar} from "react-icons/md"

function Product() {
    const [details , setDetails] = useState({});
    const [categorie , setCategorie] = useState(null);

    const location = useLocation();
    
    useEffect(()=>{
        setDetails(location.state.item)
        setCategorie(location.state.item.souscategorie.nom)

    },[]);
  return (
    <div>
        <div className='max-w-screen-xl mx-auto my-10 flex gap-10'>
            <div>
                <img className='w-full ml-20 h-[350px] object-cover' src={details.image} alt={details.title}/>
            </div>
            <div className='w-3/5 ml-20 flex flex-col justify-center gap-12 '>
                <div>
                    <h2 className='text-4xl font-semibold'>{details.title}</h2>
                    <div className='flex flex-row items-center text-gray-600'>
                        <p> DH {details.prix}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 text-base '>
                  <div className='flex flex-row' >
                  <MdOutlineStar/>
                    <MdOutlineStar/>
                    <MdOutlineStar/>
                    <MdOutlineStar/>
                    <MdOutlineStar/>
                  </div>
                  <p className='text-xs text-gray-500'>(1 customer review)</p>
                </div>
                <p className='text-base text-gray-600 -mt-3'>
                    {details.description}
                </p>
                <div className='flex gap-4'>
                    <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
                        <p className='text-sm'>Quantity</p>
                       <div className='flex items-center gap-4 text-sm font-semibold'>
                       <button className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>-</button>
                        <span>{1}</span>
                        <button className='border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>+</button>
                       </div>
                    </div>
                    <button className='bg-black text-white py-3 px-6 active:bg-gray-800'>add to cart</button>
                </div>
                <p className='text-base text-gray-500'>Category:<span className='font-medium capitalize'>{categorie}</span></p>
            </div>
        </div>
    </div>
  )
}

export default Product