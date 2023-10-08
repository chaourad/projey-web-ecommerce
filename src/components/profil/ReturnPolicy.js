import React from 'react'
import returnaddtwo from '../../assets/return_add_two.png'
import { Link } from 'react-router-dom'
import { AiOutlineRight } from 'react-icons/ai'
function ReturnPolicy() {
  return (
    <div style={{ padding: '15px 24px' }} className='mb-4'>
      <div>
        <ul className=' flex flex-row items-center text-xs text-[#a8a4a4]'>
          <li><Link to="/"><p>Accueil</p> </Link></li>
          <AiOutlineRight />
          <li><p>  Retour</p></li>
        </ul>
      </div>
      <h1 className='items-center justify-center font-bold text-2xl pl-[45%] mt-3'>Retour</h1>
      <div className='mt-5 '>
        <h1 className='font-bold text-l my-3'>Combien de temps puis-je effectuer un retour et dois-je payer les frais?</h1>
        <p className='my-3'>Le service de retour gratuit en libre-service est disponible uniquement en Maroc métropolitaine et en Belgique.</p>
        <p className='font-semibold my-3'>Voici les politiques de retour pour les commandes en Maroc métropolitaine :</p>
        <div className='mr-6 ml-8 text-gray-600'>
          <h3 className='my-3'>1. Utilisez votre étiquette de retour dans les 45 jours qui suivent l’achat, nous prendrons en charge les frais de livraison.</h3>
          <h3 className='my-3'>2. La première étiquette de retour est gratuite par commande. Pour plus d'une étiquette de retour sur la même commande, les frais de retour seront de 4,5 € par colis supplémentaire, qui seront déduits dans votre remboursement.</h3>
          <h3 className='my-3'>3. Vous pouvez aussi faire le retour via votre transporteur local mais à vos frais.</h3>
        </div>
      </div>

      <div className='mt-5 my-3'>
        <h1 className='font-bold text-l'>Comment retourner les Produits?</h1>
        <img src={returnaddtwo} alt="return_add_two" className='mt-2 ml-3' />
        <div className='mr-6 ml-8 text-gray-600 '>
          <h3 className='my-3'>1. Connectez-vous à votre compte</h3>
          <h3 className='my-3'>2. Sélectionnez l'onglet « Mes commandes » et cliquez sur « Retourner des Produits »</h3>
          <h3 className='my-3'>3. Sélectionnez le(s) article(s) que vous souhaitez nous renvoyer, précisez la raison et envoyez-nous votre demande.</h3>
          <h3 className='my-3'>4. Imprimez l'étiquette de retour et collez-la sur votre colis.</h3>
          <h3 className='my-3'>5. Veuillez envoyer votre colis de retour au point de retour le plus proche selon la société de logistique correspondant à l'étiquette de retour.</h3>

        </div>
      </div>

    </div>
  )
}

export default ReturnPolicy