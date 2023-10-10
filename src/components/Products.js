import React, { useEffect, useState } from 'react'
import ProductsCard from './ProductsCard'
import axios from 'axios';

function Products() {
    const [product , setProduct]= useState([]);
    useEffect(()=>{
      getData();
    },[]);
    async function getData() {
      try {
        const response = await axios.get("http://localhost:8081/api/v1/product/all");
        setProduct(response.data);
      } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des données :", error);
      }
    }
    
      return (
    <div className='py-10'>
        <div className=' flex flex-col items-center gap-4'>
            <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>shopping everyday</h1>
            <span className='w-20 h-[3px] bg-black'></span>
            <p className=' max-w-[700px] text-gray-600 text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        <div className='max-w-screen-xl mx-auto py-10 px-20 grid grid-cols-4 gap-10'>
        {product.map((item)=>(
            <ProductsCard key={item.id} productss={item}/>
        ))}
        </div>
    </div>
  )
}

export default Products