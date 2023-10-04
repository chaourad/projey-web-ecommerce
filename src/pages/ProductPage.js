import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ProductPage() {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8081/api/v1/product/all").then((response) => {
            setProduct(response.data);
        });
    }, []);
    return (
        <div className='bg-gray-200 ' style={{ padding: '20px 20px' }}>
            <div className='max-w-screen-2xl mx-auto grid grid-cols-4 gap-10 px-4 '>
                {product.map((item) => (
                    <div key={item.id} className='bg-white h-auto border-[1px] border-gray-200 py-6 z-30 flex-col hover:border-transparent shadow-none hover:shadow-xl duration-200 relative  flex  gap-4'>
                    <span className='text-xs capitalize italic absolute top-1  text-gray-300 right-2 '>{item.souscategorie.nom}</span>
                        <div className='w-full h-auto flex items-center justify-center relative'>
                            <img src={item.image} alt={item.title} className='w-53 h-64 object-contain' />
         
                        </div>
                        <div className='px-4'>
                            <div className='flex items-center justify-between '>
                                <h2 className='tracking-wide text-lg font-medium'>{item.title.substring(0, 15)}</h2>
                                <p> MAD{item.prix}</p>
                            </div>
                            <div>
                                <p className='text-sm '>{item.description.substring(0,100)}...</p>
                            </div>
                            <button className='flex justify-center font-medium text-base bg-[#1742de] text-white duration-200 py-1.5 rounded-md mt-3 w-full '>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
