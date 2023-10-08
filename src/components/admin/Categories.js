import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

function Categories() {
    const [categorie, setCategorie] = useState([]);
    const [souscategorie, setSouscategorie] = useState([]);

    const [currentPage, setCurrentPage] = useState(0);
    const [currentPage2, setCurrentPage2] = useState(0);

    const itemsPerPage = 4; // Nombre d'éléments par page
    const itemsPerPage2 = 4; // Nombre d'éléments par page

    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/categories/all')
            .then((response) => {
                setCategorie(response.data);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des catégories :', error);
            });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:8081/api/v1/sous-categories/all')
            .then((response) => {
                setSouscategorie(response.data);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des sous-catégories :', error);
            });
    }, []);
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };
    const handlePageChange2 = ({ selected }) => {
        setCurrentPage2(selected);
    };

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedCategories = categorie.slice(startIndex, endIndex);

    const startIndex2 = currentPage2 * itemsPerPage2;
    const endIndex2 = startIndex2 + itemsPerPage2;
    const displayedSousCategories = souscategorie.slice(startIndex2, endIndex2);

    return (
        <>
            <div className="ml-[70px] md:ml-[250px] py-5 px-5 w-full text-gray-300 space-y-5 page">
                <div className="flex flex-col sm:flex-row items-center justify-between  bg-dashBlack py-2 px-3">
                    <h1 className="uppercase font-bold">Categories</h1>
                    <div className="flex items-center space-x-1 text-xs">
                        <span className="text-white cursor-pointer">Dashboard</span>
                        <i className='bx bx-chevron-right'></i>
                        <span>Categories</span>
                    </div>
                </div>
                <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row items-center justify-between">
                    <div className="flex flex-col text-center lg:text-left">
                        <h3 className="text-md">Bonne journée, ADMIN</h3>
                        <span className="text-gray-600 text-xs">Voici ce qui se passe avec votre magasin aujourd'hui.</span>
                    </div>
                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 items-center space-x-3">
                        <div className="flex items-center text-xs bg-gray-700/40 rounded">
                            <span className='px-3'>DATE</span>
                            <i className='bx bx-calendar text-[13px] text-white bg-blue-400/60 py-3 px-3'></i>
                        </div>
                        <div className="flex items-center text-xs rounded space-x-1 py-3 px-3 bg-custGreen/20 text-custGreen hover:text-white hover:bg-custGreen duration-100 cursor-pointer">
                            <i className='bx bx-plus-circle'></i>
                            <span>Ajouter une categorie</span>
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto relative sm:rounded-lg">
                    <div className="flex justify-between flex-col space-y-3 md:space-y-0 md:flex-row items-center py-10 bg-gray-9">
                        <h1 className="text-xl">Liste des Categories</h1>
                        <div className="relative">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <i className="w-5 y-5 bx bx-search"></i>
                            </div>
                            <input
                                type="text"
                                id="table-search-users"
                                className="block p-2 pl-10 w-80 text-sm rounded-lg outline-none bg-dashBlack placeholder-gray-500"
                                placeholder="Chercher categorie"
                            />
                        </div>
                    </div>
                    <table className="table-auto w-full">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th className="px-4 py-2">Nom</th>
                                <th className="px-6 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayedCategories.map((item, index) => (
                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
                                    <td className="px-12 py-4 dark:text-white font-medium text-center">{item.nom}</td>
                                    <td className="px-12 py-4 dark:text-white font-medium text-center">
                                        <button className='font-medium mx-3 text-blue-600 dark:text-blue-500 hover:underline items-center'>Edite</button>
                                        <button className='font-medium mx-3 text-red-600 dark:text-red-500 hover:underline items-center'>Supprimer</button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex flex-row justify-center items-center">
                    <ReactPaginate className='flex flex-row   text-black'
                        previousLabel={'  Précédent  '}
                        previousClassName='mx-4'
                        nextLabel={'  Suivant  '}
                        nextClassName='mx-4'
                        breakLabel={'...'}
                        breakClassName={'break-me mx-4'}
                        pageCount={Math.ceil(categorie.length / itemsPerPage)}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageChange}
                        activeClassName={'active'}
                    />
                </div>
                {/** Sous categories */}
                <div className="overflow-x-auto relative  sm:rounded-lg">
                    <div className="flex justify-between flex-col space-y-3 md:space-y-0 md:flex-row items-center py-10 bg-gray-9">
                        <h1 className="text-xl">Liste des Sous-Categories</h1>
                        <div className="relative ">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <i className='w-5 y-5 bx bx-search'></i>
                            </div>
                            <input type="text" id="table-search-users" className="block p-2 pl-10 w-80 text-sm rounded-lg outline-none   bg-dashBlack  placeholder-gray-500 " placeholder="Chercher categorie" />
                        </div>
                    </div>
                    <table className="table-auto w-full">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th className="px-4 py-2">Image</th>
                                <th className="px-4 py-2">Nom</th>
                                <th className="px-4 py-2">Categorie</th>
                                <th className="px-6 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayedSousCategories.map((item, index) => (
                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" >
                                    <td className="px-12 py-4 dark:text-white font-medium text-center">
                                        <img
                                            src={item.image}
                                            alt="img"
                                            className="w-8 h-8 rounded-full mx-auto"
                                        />
                                    </td>
                                    <td className="px-12 py-4 dark:text-white font-medium text-center">{item.nom}</td>
                                    <td className="px-12 py-4 dark:text-white font-medium text-center">{item.categorie.nom}</td>

                                    <td className="px-12 py-4 dark:text-white font-medium text-center">
                                        <button className='font-medium mx-3 text-blue-600 dark:text-blue-500 hover:underline items-center'>Edite</button>
                                        <button className='font-medium mx-3 text-red-600 dark:text-red-500 hover:underline items-center'>Supprimer</button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex flex-row justify-center items-center">
                    <ReactPaginate className='flex flex-row   text-black'
                        previousLabel={'  Précédent  '}
                        previousClassName='mx-4'
                        nextLabel={'  Suivant  '}
                        nextClassName='mx-4'
                        breakLabel={'...'}
                        breakClassName={'break-me mx-4'}
                        pageCount={Math.ceil(souscategorie.length / itemsPerPage2)}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageChange2}
                        activeClassName={'active'}
                    />
                </div>
            </div>

        </>
    );
}

export default Categories;
