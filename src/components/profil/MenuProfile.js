import React from 'react'
import { AiOutlineMinus } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function MenuProfile() {
    
  return (
    <div className='bg-[#f7f8fa] w-[25%]' style={{ padding: '24px 24px' }}>
    <div className='flex flex-row'>
    <div className='  mt-4'>
        <p className='font-bold'>Mon Profil</p>
        <div className='flex flex-col'>
            <div className=' flex flex-row justify-between items-center mr-3'>
            <h1 className='text-base font-bold'>Mon Compte </h1>
            <AiOutlineMinus />
            </div>
            <div style={{padding:'10px'}}>
                
               <Link to="/user/addressbook"> <p className="cursor-pointer">  Mes Adresses</p>   </Link>   
               <Link to="/user/security"><p className="cursor-pointer"> Gérer Mon compte</p>    </Link>                      
        
            </div>
        
        </div>
        <div className='flex flex-col'>
            <div className=' flex flex-row justify-between items-center mr-3'>
            <h1 className='text-base font-bold'>Mes Commandes </h1>
            <AiOutlineMinus />
            </div>
            <div style={{padding:'10px'}}>
                <p>  Toutes Les Commandes</p>  
                <p>  Commandes En Traitement</p>      
                <p>  Commandes Contrôlées</p> 
                <p>  Commandes Renvoyées</p>                         
            </div>
        
        </div>
        <div className='flex flex-col'>
            <div className=' flex flex-row justify-between items-center mr-3'>
            <h1 className='text-base font-bold'>Mon Historique </h1>
            <AiOutlineMinus />
            </div>
            <div style={{padding:'10px'}}>
               <Link to="/user/favorite"><p className='cursor-pointer'>  Liste D'Envies</p>  </Link>
                                         
            </div>
        
        </div>
        <div className='flex flex-col'>
            <div className=' flex flex-row justify-between items-center mr-3'>
            <h1 className='text-base font-bold'>Politiques </h1>
            <AiOutlineMinus />
            </div>
            <div style={{padding:'10px'}}>
               <Link to="/user/shippin-info"><p>  Livraison</p>  </Link>
               <Link to="/user/return-policy"> <p className='cursor-pointer'>  Politique De Retour</p></Link>   
                                         
            </div>
        
        </div>
        <h1 className='font-bold pb-2'>Se Déconnecter</h1>
    </div>
    
   
</div>
</div>  )
}

export default MenuProfile