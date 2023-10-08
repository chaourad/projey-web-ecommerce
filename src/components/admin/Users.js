import React from 'react'

function Users() {
  return (
    <>
    <div className="ml-[70px] md:ml-[250px] py-5 px-5 w-full text-gray-300 space-y-5 page">
      <div className="flex flex-col sm:flex-row items-center justify-between  bg-dashBlack py-2 px-3">
            <h1 className="uppercase font-bold">Utilisateurs</h1>
            <div className="flex items-center space-x-1 text-xs">
                <span className="text-white cursor-pointer">Dashboard</span>
                <i className='bx bx-chevron-right'></i>
                <span>Utilisateurs</span>
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
                <div onClick={3} className="flex items-center text-xs rounded space-x-1 py-3 px-3 bg-custGreen/20 text-custGreen hover:text-white hover:bg-custGreen duration-100 cursor-pointer">
                    <i className='bx bx-user-x text-md'></i>
                    <span>Utilisateur Archivée</span>
                </div>
            </div>
        </div>
        
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <div className="flex justify-between flex-col space-y-3 md:space-y-0 md:flex-row items-center py-10 bg-gray-9">
              <h1 className="text-xl">Liste d'utilisateurs</h1>
                <div className="relative ">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <i className='w-5 y-5 bx bx-search'></i>
                    </div>
                    <input name="search"   type="text" id="table-search-users" className="block p-2 pl-10 w-80 text-sm rounded-lg outline-none   bg-dashBlack  placeholder-gray-500 " placeholder="Chercher utilisateur" />
                </div>
            </div>
            <table className="w-full text-sm text-left  text-gray-400">
                <thead className="text-xs  uppercase bg-dashBlack text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Nom
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Commande
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Status
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    
                  
                </tbody>
            </table>
           
        </div>

        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <div className="flex justify-between flex-col space-y-3 md:space-y-0 md:flex-row items-center py-10 bg-gray-9">
              <h1 className="text-xl">Liste d'adminstrateur</h1>
                <div className="relative ">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <i className='w-5 y-5 bx bx-search'></i>
                    </div>
                    <input name="search1"  type="text" id="table-search-users" className="block p-2 pl-10 w-80 text-sm rounded-lg outline-none   bg-dashBlack  placeholder-gray-500 " placeholder="Chercher utilisateur" />
                </div>
            </div>
            <table className="w-full text-sm text-left  text-gray-400">
                <thead className="text-xs  uppercase bg-dashBlack text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Nom
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Commande
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>

                    </tbody>
                    
                    
            </table>
          
        </div>

    </div>
    

        <div className="fixed top-0 hidden fade UsersModal items-center justify-center h-screen z-100 w-screen left-0">
            <div  className="h-screen w-screen bg-black/70 absolute">
            </div>
            <div className="relative bg-[#1a1d21] text-gray-400  flex flex-col  rounded z-100 w-[80%]">
                <i  className='cursor-pointer bx bxs-shield-x text-lg absolute -top-9 py-1 px-2 bg-gray-300 rounded text-gray-700 right-0'></i>
                <div className="px-5 overflow-x-auto relative shadow-md sm:rounded-lg">
                    <div className="flex justify-between flex-col space-y-3 md:space-y-0 md:flex-row items-center py-3 bg-gray-9">
                    <h1 className="text-xl">Liste d'utilisateurs  supprimée</h1>
                        <div className="relative ">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <i className='w-5 y-5 bx bx-search'></i>
                            </div>
                            <input name="search"  type="text" id="table-search-users" className="block p-2 pl-10 w-80 text-sm rounded-lg outline-none   bg-dashBlack  placeholder-gray-500 " placeholder="Chercher utilisateur" />
                        </div>
                    </div>
                    <table className="w-full text-sm text-left  text-gray-400 mb-4">
                        <thead className="text-xs  uppercase bg-dashBlack text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Nom
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Commande
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                           
                            
                        </tbody>
                    </table>
                   
                </div>

            </div>
        </div> 

    
        

       
    </>
  )
}

export default Users