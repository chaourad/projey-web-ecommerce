import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Shippinginfo() {
    return (
        <div style={{ padding: ' 0px 24px' }} className='mb-4 ml-4 mt-4'>
            <div className=' w-[75%] ml-[1%]'>
                <ul className=' flex flex-row items-center text-xs text-[#a8a4a4]'>
                    <li><Link to="/"><p>Accueil</p> </Link></li>
                    <AiOutlineRight />
                    <li><p>  Livraison</p></li>
                </ul>
            </div>
            <h1 className='items-center justify-center font-bold text-2xl pl-[45%] mt-3'>Livraison</h1>
            <h1 className='items-center justify-center pl-[40%] text-l font-semibold  my-3'>Temps de préparation: 1-3 jours</h1>
           
                <table className="w-[75%] ml-[1%]">
                    <thead className='text-xs text-gray-700 uppercase bg-[#f6f6f6]'>
                        <tr>
                            <th className="px-6 py-4">Mode de livraison	</th>
                            <th className="px-6 py-4">Temps de livraison	</th>
                            <th className="px-6 py-4" >Frais</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b ">
                            <td>Livraison Standard	</td>
                            <td>7-10 jours ouvrés</td>
                            <td className='items-center '><h3 className='mt-6'>6.90€—dépenser moins de 19.00€</h3>
                                <h3>4.90€—dépenser plus de 19.00€, mais moins de 39.00€</h3>
                                <h3 className='text-red-800 mb-6'>Gratuit—dépenser plus de 39.00€</h3>
                            </td>

                        </tr>
                    </tbody>

                </table>
            
            <p className='text-red-600 mt-5 w-[85%] ml-[1%]'>Lorsque vous n'êtes pas chez vous ou en vacances, vous pouvez choisir le service "Livraison en Point Relais" (le colis sera livré par Chronopost ou Mondial Relay) , faible émission de carbone, enlèvement 7*24 disponible, frais d'expédition moins élevés.</p>
            <p className='font-bold my-3'>Remarque :</p>
        <div className='mr-6 ml-8 text-gray-600'>
          <h3 className='my-3 font-semibold'>1) Délai de livraison：</h3>
          <h6>Dans la plupart des cas, le colis sera livré dans les délais estimés. Cependant, la date réelle de livraison peut être changée par les vols, les conditions météorologiques ou d'autres facteurs externes. Veuillez-vous référer aux informations de suivi pour une date de livraison plus précise.</h6>
          <h3 className='my-3 font-semibold'>2) Coûts：</h3>
          <h6> Pour les commandes supérieures à 178 euros TTC, des frais de manutention (y compris les droits de douane et les frais de manutention en entrepôt et du dédouanement), dont le montant exact dépend de la valeur totale de la commande, seront appliqués.</h6>
          <h3 className='my-3 font-semibold'  >1) Délai de livraison：</h3>
        <h6>Nous vous informons que la livraison en point relais Mondial Relay est rétablie dès maintenant. Cependant, certains centres restent fermées ou rajustent leurs heures d’ouverture. Veuillez vérifier au préalable sur le site du Mondial Relay si votre point relais habituel est ouvert.</h6>
         </div>
        </div>
    )
}

export default Shippinginfo