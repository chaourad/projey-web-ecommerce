import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.jpg"
import axios from 'axios';

function Register() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [password, setPassword] = useState("");
    const [role,setRole]=useState("USER")
    const [checked, setChecked] = useState(false);
    const [error, setError] = useState("");
const navigate = useNavigate();

    // ============= Event Handler Start here =============
    const handleName = (e) => {
        setFirstname(e.target.value);
        
    };
    const handleLName = (e) => {
        setLastname(e.target.value);
        
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
       
    };
    const handlePhone = (e) => {
        setTelephone(e.target.value);
        
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
       
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
       
        try{
            const response = await axios.post("http://localhost:8081/api/v1/auth/register",{
                email,
                firstname,
                lastname,
                password,
                telephone,
                role
            })
            if (response.status === 200 /* ou autre statut de succès */) {
                // Vous pouvez également effectuer d'autres vérifications si nécessaire
                // Par exemple, si le serveur renvoie un message de succès dans la réponse
    
                // Redirigez l'utilisateur vers la page de connexion (login)
                // Vous pouvez utiliser la bibliothèque react-router-dom pour cela
                navigate("/login"); // Assurez-vous d'importer history depuis react-router-dom
    
                // Réinitialisez les champs de formulaire si nécessaire
                setFirstname("");
                setLastname("");
                setEmail("");
                setTelephone("");
                setPassword("");
                setRole("USER");
                setChecked(false);
                setError(""); // Réinitialisez également l'erreur si nécessaire
            }
    
            
        }catch(err){
            setError("Invalid email or password. Please try again.");
        }
    }
    return (
        <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link to="/">
          <img
            className="mx-auto h-10 w-auto"
            src={logo}
            alt="Your Company"
          />
          </Link>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="Fname" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder=" John "
                  autoComplete="name"
                  value={firstname}
                  onChange={handleName}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                   
              </div>
            </div>
            <div>
              <label htmlFor="prenom" className="block text-sm font-medium leading-6 text-gray-900">
                Last Name
              </label>
              <div className="mt-2">
                <input
                  id="prenom"
                  name="prenom"
                  type="text"
                  autoComplete="prenom"
                  value={lastname}
                  onChange={handleLName}
                  placeholder="  Doe"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                  
              </div>
            </div>
            <div>
              <label htmlFor="telephone" className="block text-sm font-medium leading-6 text-gray-900">
               Phone
              </label>
              <div className="mt-2">
                <input
                  id="telephone"
                  name="telephone"
                  type="number"
                  autoComplete="telephone"
                  value={telephone}
                  onChange={handlePhone}
                  placeholder="  008801234"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
               
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="  john@workemail.com"
                  value={email}
                  onChange={handleEmail}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                  
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
               
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={handlePassword}
                  placeholder="  ******"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                  
              </div>
            </div>
            <div className="flex items-start mdl:items-center gap-2">
                  <input
                    onChange={() => setChecked(!checked)}
                    className="w-4 h-4 mt-1 mdl:mt-0 cursor-pointer"
                    type="checkbox"
                  />
                  <p className="text-sm text-primeColor">
                    I agree to the OREBI{" "}
                    <span className="text-blue-500">Terms of Service </span>and{" "}
                    <span className="text-blue-500">Privacy Policy</span>.
                  </p>
                </div>
            <div>
              <button
                type="submit"
                className={`${
                    checked
                      ? "bg-primeColor  hover:text-white  bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
                      : "bg-gray-500 hover:bg-gray-500 hover:text-gray-200 cursor-none"
                  } w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300`}
                >              
                Sign in
              </button>
            </div>
            <p className="text-red-600">{error}</p>

          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an Account?{' '}
          <Link to="/login">
            <span className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Sign up
            </span>
            </Link>
          </p>
        </div>
      </div>
    </>
    )
}

export default Register