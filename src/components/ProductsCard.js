import React from 'react'
import {BsArrowRight} from "react-icons/bs"
import { useNavigate } from 'react-router-dom';
function ProductsCard({ productss }) {
    const navigate = useNavigate();
    const id= productss.title;
    const idString =(id) =>{
        return String(id).toLowerCase().split(" ").join("");
    }
    const rootId = idString(id);
    const handleDetails=()=>{
        navigate(`/product/${rootId}`,{
            state:{
                item : productss,  
            }
        }  )
    }
    
    return (
        <div className='group relative'>
            <div onClick={handleDetails} className='w-full h-96 cursor-pointer overflow-hidden'>
                <img className='w-full h-full object-cover group-hover:scale-110 duration-500' src={productss.image} alt="prdimage" />
            </div>
            <div className='w-full border-[1px] px-2 py-4'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h2 className='font-titleFont text-base font-semibold'>{productss.title}</h2>
                    </div>
                    <div className='flex gap-2 justify-end relative overflow-hidden w-28 text-sm'>
                        <div className='flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500'>
                            <p className='font-semibold '>DH{productss.prix}</p>
                        </div>    
                        <p className='absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500'>add to cart <span><BsArrowRight/></span></p>          
                    </div>
                </div>
                <div>
                    <p>{productss.souscategorie.nom}</p>
                </div>
               
            </div>
        </div>
    )
}

export default ProductsCard