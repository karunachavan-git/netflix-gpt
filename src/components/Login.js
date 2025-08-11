import Header from "./Header";
import { useState } from "react";
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (<div>
        <Header />
        <div className="absolute w-full h-full bg-cover bg-center" > 
            <img alt="poster" src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/US-en-20250721-TRIFECTA-perspective_6d968797-b773-4ec4-aa69-2a9c2e41ae94_large.jpg"/>
        </div>
        
        <form className="w-5/12 absolute p-10 bg-black mx-auto right-0 left-0 top-1/4 text-white bg-opacity-80 rounded-lg">
            <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign in" : "Sign Up"}</h1>
            {!isSignInForm && <input type="text" placeholder="Full Name" className="p-2 m-2 w-full bg-gray-700"/>}
            <input type="text" placeholder="Email Address" className="p-2 m-2 w-full bg-gray-700" />
            <input type="password" placeholder="Password" className="p-2 m-2 w-full bg-gray-700"/>
            <button className="bg-red-600 p-4 mx-2 mt-6 w-full rounded-lg">{isSignInForm ? "Sign in" : "Sign Up"}</button>
            <p className="p-4 cursor-pointer"onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now" : "Already registread ?Sign in now"}</p>
        </form>
    </div>)};

export default Login;