import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/UserContext';

function Dashboard() {
    const {user} = useContext(UserContext);
    if(user.role ==="admin:create" ||user.role ==="admin:update" ||
    user.role ==="admin:delete" ||user.role ==="admin:read"   ){
        
    }
  return (
    <div className="ml-[70px] md:ml-[250px] py-5 px-5 w-full text-gray-300 space-y-5 page">
    <div className="flex flex-col sm:flex-row items-center justify-between  bg-dashBlack py-2 px-3">
        <h1 className="uppercase font-bold">Dashboard</h1>
        <div className="flex items-center space-x-1 text-xs">
            <span className="text-white">Dashboard</span>
            <i className='bx bx-chevron-right'></i>
            <span>Dashboard</span>
        </div>
    </div>
    <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row items-center justify-between">
        <div className="flex flex-col text-center lg:text-left">
            <h3 className="text-md">Bonne journée, ADMIN</h3>
            <span className="text-gray-600 text-xs">Voici ce qui se passe avec votre magasin aujourd'hui.</span>
        </div>
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 items-center space-x-3">
            <div className="flex  items-center text-xs bg-gray-700/40 rounded">
                <span className='px-3'>AAAA</span>
                <i className='bx bx-calendar text-[13px] text-white bg-blue-400/60 py-3 px-3'></i>
            </div>
           <Link to="/admin/product">
            <div  className="flex items-center text-xs rounded space-x-1 py-3 px-3 bg-custGreen/20 text-custGreen hover:text-white hover:bg-custGreen duration-100 cursor-pointer">
                <i className='bx bx-plus-circle'></i>
                <span>Ajouter un produit</span>
            </div>
            </Link>
        </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10">
        <div className="bg-dashBlack flex flex-col space-y-6 py-3 px-3 rounded-md hover:-translate-y-2 duration-500">
            <div className="flex items-center justify-between w-full">
                <span className="text-gray-400">Total vente</span>
                <div className="flex items-center text-sm space-x-2 text-custGreen">
                    <i className='bx bx-up-arrow-alt rotate-45'></i>
                    <span>+16.24 %</span>
                </div>
            </div>
            <div className="flex justify-between items-end">
                <div className="flex flex-col space-y-6 w-full">
                    <span className="text-lg">2222 MAD</span>
                    <span className="underline underline-offset-1 text-xs">Plus de détails</span>
                </div>
                <i className='flex items-center bx bx-dollar-circle text-3xl text-custGreen bg-custGreen/20 w-max h-max rounded py-2 px-3'></i>
            </div>
        </div>
        <div className="bg-dashBlack flex flex-col space-y-6 py-3 px-3 rounded-md hover:-translate-y-2 duration-500">
            <div className="flex items-center justify-between w-full">
                <span className="text-gray-400">Commandes</span>
                <div className="flex items-center text-sm space-x-2 text-red-500">
                    <i className='bx bx-down-arrow-alt rotate-45'></i>
                    <span>-10.24 %</span>
                </div>
            </div>
            <div className="flex justify-between items-end">
                <div className="flex flex-col space-y-6 w-full">
                    <span className="text-lg">DDSS cmd</span>
                    <span className="underline underline-offset-1 text-xs">Plus de détails</span>
                </div>
                <i className='flex items-center bx bx-shopping-bag text-3xl text-blue-500 bg-blue-500/20 w-max h-max rounded py-2 px-3'></i>
            </div>
        </div>
        <div className="bg-dashBlack flex flex-col space-y-6 py-3 px-3 rounded-md hover:-translate-y-2 duration-500">
            <div className="flex items-center justify-between w-full">
                <span className="text-gray-400">Clients</span>
                <div className="flex items-center text-sm space-x-2 text-custGreen">
                    <i className='bx bx-up-arrow-alt rotate-45'></i>
                    <span>+22.24 %</span>
                </div>
            </div>
            <div className="flex justify-between items-end">
                <div className="flex flex-col space-y-6 w-full">
                    <span className="text-lg">SSSS client</span>
                    <span className="underline underline-offset-1 text-xs">Plus de détails</span>
                </div>
                <i className='flex items-center bx bx-user text-3xl text-orange-500 bg-orange-500/20 w-max h-max rounded py-2 px-3'></i>
            </div>
        </div>
        <div className="bg-dashBlack flex flex-col space-y-6 py-3 px-3 rounded-md hover:-translate-y-2 duration-500">
            <div className="flex items-center justify-between w-full">
                <span className="text-gray-400">Coopératives</span>
                <div className="flex items-center text-sm space-x-2 text-custGreen">
                    <i className='bx bx-up-arrow-alt rotate-45'></i>
                    <span>+10.24 %</span>
                </div>
            </div>
            <div className="flex justify-between items-end">
                <div className="flex flex-col space-y-6 w-full">
                    <span className="text-lg">SSS coop</span>
                    <span className="underline underline-offset-1 text-xs">Plus de détails</span>
                </div>
                <i className='flex items-center bx bxs-leaf text-3xl text-lime-500 bg-lime-500/20 w-max h-max rounded py-2 px-3'></i>
            </div>
        </div>
    </div>
    <div className="grid gri-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-dashBlack flex flex-col space-y-3 rounded-md overflow-x-auto relative w-full h-max">
            <div className="border-b border-gray-700 flex w-full">
                <div className="py-4 px-3 flex items-center justify-between text-sm w-full">
                    <span>Produits les plus vendus</span>
                    <span>Total : <span className="text-gray-500">9</span></span>
                </div>
            </div>
           
            
        </div>
        <div className="bg-dashBlack flex flex-col space-y-3 rounded-md overflow-x-auto relative w-full h-max">
            <div className="border-b border-gray-700 ">
                <div className="py-4 px-3 flex items-center justify-between text-sm">
                    <span>Meilleures ventes</span>
                    <span>Total : <span className="text-gray-500">10</span></span>
                </div>
            </div>
          
        </div>
    </div>
</div>
  )
}

export default Dashboard