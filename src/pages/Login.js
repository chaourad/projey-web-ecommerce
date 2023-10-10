import axios from "axios";
import jwtDecode from "jwt-decode";
import { useContext, useState } from "react";
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.jpg"
import UserContext from "../context/UserContext";
import AddressComponent from "../components/profil/AddressComponent";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Use useNavigate here
  const { user, setUser } = useContext(UserContext);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:8081/api/v1/auth/authenticate", {
        email,
        password,
      });

      const token = response.data.access_token;
      const tokenPayload = jwtDecode(token);
      // Mise à jour de l'état authToken via setUserToken dans le contexte

      setUser({
        isLogged: true,
        userId: tokenPayload.userId,
        token: token,
        role: tokenPayload.role,
      });

      // Stockage du token dans le localStorage
      localStorage.setItem("isLogged", true);
      localStorage.setItem("userId", tokenPayload.userId);
      localStorage.setItem("token", token);
      localStorage.setItem("role", tokenPayload.role);

      if (tokenPayload.role.includes("admin:create") ||
        tokenPayload.role.includes("admin:update") ||
        tokenPayload.role.includes("admin:delete") ||
        tokenPayload.role.includes("admin:read")) {
        navigate('/dashboard');
      } else if (tokenPayload.role.includes('ROLE_USER')) {
        navigate('/user/addressbook');
      } else {
        navigate('/');
      }
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    }
  };


  return (
    <>
      {!user.isLogged ? (
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
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
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
                    onChange={handleEmailChange}

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
                    placeholder="  ******"
                    onChange={handlePasswordChange}
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
              <p className="text-red-600">{error}</p>
              <div className="text-center pt-3">Or</div>
              <FacebookLoginButton className="mt-3 mb-3" />
              <GoogleLoginButton buttonText="Login" className="mt-3 mb-3" />


            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Don't have an Account?{' '}
              <Link to="/register">
                <span className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                  Sign up
                </span>
              </Link>
            </p>
          </div>


        </div>
      ) : (<>
        <AddressComponent />
      </>
      )}
    </>
  );
}

export default Login;
