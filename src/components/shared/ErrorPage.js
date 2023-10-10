import Lottie from "lottie-react";
import errorAnimation from '../errorAnimation.json'
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="">
        <div className="top-[20%] left-[25%] absolute">
        <Lottie className="w-[60%] border" animationData={errorAnimation} loop={true} />
        <Link to='/'>
        <p className="bg-[#192268] text-white py-2 px-4 font-medium rounded-full inline-block bottom-16 left-20 absolute cursor-pointer z-10 hover:bg-[#0051ff] duration-300">BACK TO HOME</p>
        </Link>
        </div>
        </div>
    );
};

export default ErrorPage;