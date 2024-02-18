import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem("user", true);
        navigate("/");
    }


    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
        </div>
    );
}

export default Login;

