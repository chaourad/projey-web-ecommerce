import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
import wishlist from "../assets/wishlist.gif";
import { Link } from 'react-router-dom';
import { AiFillHeart, AiOutlineRight } from 'react-icons/ai';

function Favorite() {
  const { user } = useContext(UserContext);
 
  return (
    <>
     
      {!user.isLogged ? (
        <>
          <div className='w-[75%] mx-4 my-4'>
            <div className='w-full '>
            <div>
        <ul className=' flex flex-row items-center text-xs text-[#a8a4a4]'>
          <li><Link to="/"><p>Accueil</p> </Link></li>
          <AiOutlineRight />
          <li><p>  Liste d'Envies</p></li>
        </ul>
      </div>
              <h1 className='flex justify-center items-center font-bold text-2xl mt-3'>MA LISTE D'ENVIE</h1>
              <div className='flex flex-col my-4 items-center justify-center '>
                <p>Vide ici .</p>
                <p>Personnalisez votre expérience shopping avec votre wishlist</p>
              </div>
              <h1 className='py-4 font-semibold flex items-center justify-center'>Vous avez déjà enregistré des articles ?</h1>
              <div className='justify-center items-center flex '>
            <Link to="/login">
            <button className=' bg-black text-white py-3 px-5 my-4 font-bold '>ME CONNECTER</button>
            </Link>
              </div>
            </div>
            <div className="border-t border-gray-[#e5e5e5] my-3"></div>

            <div>
              <div className=' flex flex-row justify-between mt-8 ml-4'>
                <div className='flex flex-col'>
                  <h3 className='font-bold text-2xl pt-3'>Mettez un cœur</h3>
                  <p>Rassemblez tout ce que vous aimez sur une page.</p>
                  <p className='flex flex-row  items-center pt-6'><AiFillHeart  /> Pensez-y avant d’acheter.</p>
                  <p className='flex flex-row  items-center pt-4'><AiFillHeart /> Recevoir un avis au sujet des articles en rupture de stock.</p>
                </div>
                <img
                  src={wishlist}
                  alt="wishlist"
                  height={350}
                  width={350}
                  className="justify-end"
                 
                />          </div>
            </div>
          </div>
        </>
      ) : (
        <> 
        <div className='w-[75%] mx-4 my-4'>

          <p>User ID: {user.userId}</p>
          <p>Token: {user.token}</p>
          <p>Role: {user.role}</p>
        </div>
        </>
      )}
    </>
  );
}

export default Favorite;
