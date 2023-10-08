import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Modal from 'react-modal';

function AddressComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ padding: '15px 24px' }} className='mb-4 ml-4 mt-4 w-[75%]'>
      <h1 className='font-bold items-center justify-center text-2xl ml-[35%] mt-3 '>CARNET D'ADRESSES</h1>
      <div className='items-center flex-row flex '>
        <button
          className='text-white items-center flex-row flex my-4 py-4 px-4 mx-4  bg-black font-bold'
          onClick={openModal}
        >
          <AiOutlinePlus className='font-bold' color='white'/> AJOUTER UNE NOUVELLE ADRESSE
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Ajouter une nouvelle adresse"
      >
        <div className="modal-content flex flex-col items-center">
          <h2>Ajouter une nouvelle adresse</h2>
          {/* Ajoutez ici vos champs de formulaire pour ajouter l'adresse */}
          <form className="flex flex-col items-center">
            <label>Adresse 1:</label>
            <input type="text" />
            <label>Code postal:</label>
            <input type="text" />
            <label>Pays:</label>
            <input type="text" />
            <label>Ville:</label>
            <input type="text" />
            {/* Ajoutez d'autres champs de formulaire au besoin */}
            <div className="mt-4">
              <button onClick={closeModal} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded mr-2">Annuler</button>
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Sauvegarder</button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default AddressComponent;
