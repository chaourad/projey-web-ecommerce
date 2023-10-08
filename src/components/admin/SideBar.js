import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.jpg'
function SideBar() {
  return (
    <div className="side h-screen fixed bg-gray-50 z-50 top-0  bg-dashBlack w-[250px] flex flex-col px-4 py-5 space-y-7 items-center text-gray-900 text-md">
      <div className="side-container flex  justify-between items-center">
        <img src={logo} alt="" className="img  w-[70%] md:w-[50%] lg:w-[70%]" />
      </div>
      <div className="flex flex-col  h-full justify-between w-full">
        <div className="w-full flex flex-col space-y-7 list-items">
          <Link to="/admin/dashboard">
            <div  className="flex items-center space-x-5 hover:text-blue-400 duration-100 relative group cursor-pointer">
            <i className='bx bxs-dashboard' ></i>
            <span className="fade span">Dashboard</span>
            <span className="info absolute text-[10px] left-7 text-white fade bg-main py-1 px-2 hidden rounded-full w-max">Dashboard</span>
          </div></Link>
          <Link to="/admin/users">
            <div   className="flex items-center space-x-5 hover:text-blue-400 duration-100 relative group cursor-pointer">
            <i className='bx bxs-group'></i>
            <span className="fade span">Utilisateurs</span>
            <span className="info absolute text-[10px] left-7 text-white fade bg-main py-1 px-2 hidden rounded-full w-max">Utilisateurs</span>
          </div></Link>
         
         <Link to="/admin/product"><div  className="flex items-center space-x-5 hover:text-blue-400 duration-100 relative group cursor-pointer">
            <i className='bx bxs-purchase-tag'></i>
            <span className="fade span">Produits</span>
            <span className="info absolute text-[10px] left-7 text-white fade bg-main py-1 px-2 hidden rounded-full w-max">Produits</span>
          </div>
          </Link> 
          <Link to="/admin/category"><div  className="flex items-center space-x-5 hover:text-blue-400 duration-100 relative group cursor-pointer">
            <i className='bx bxs-pie-chart-alt-2'></i>
            <span className="fade span">Categories</span>
            <span className="info absolute text-[10px] left-7 text-white fade bg-main py-1 px-2 hidden rounded-full w-max">Produits</span>
          </div>
          </Link>
        <Link to="/admin/commande"><div className="flex items-center space-x-5 hover:text-blue-400 duration-100 relative group cursor-pointer">
            <i className='bx bxs-cart' ></i>
            <span className="fade span">Commandes</span>
            <span className="info absolute text-[10px] left-7 text-white fade bg-main py-1 px-2 hidden rounded-full w-max">Commandes</span>
          </div>
          </Link>  
         
          <Link to="/admin/ligne-des-commandes"><div className="flex items-center space-x-5 hover:text-blue-400 duration-100 relative group cursor-pointer">
            <i className='bx bx-world'></i>
            <span className="fade span">Ligne des commandes</span>
            <span className="info absolute text-[10px] left-7 text-white fade bg-main py-1 px-2 hidden rounded-full w-max">Itellcap-Terroir</span>
          </div>
          </Link>
        </div>
        <div className="w-full flex flex-col  list-items space-y-3">
          <div className="flex w-max items-center space-x-2 text-gray-400 text-sm hover:text-white duration-100 group relative conUser">
            <img src="/user.jpg" className="w-7 h-7 rounded-lg img-user" />
            <span className="fade span">{"ok"}</span>
            <i onClick={"logOut"} className='door bx bxs-door-open text-xl cursor-pointer flex items-center' ></i>
            <span className="info absolute text-[10px] left-12 text-white fade bg-main py-1 px-2 hidden rounded-full w-max">Logout</span>
          </div>
          <div className="flex items-center space-x-2 text-[10px]">
            <i className='bx bxs-copyright text-xl' ></i>
            <span className="span">Copyright-2023 Chaourad imane</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar