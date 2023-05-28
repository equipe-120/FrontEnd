// import React from 'react';
import { Link } from 'react-router-dom';
import imgLoginLogo from '../Assets/LoginScreen/imgLoginLogo.svg';

const Login = () => {
    return (
        <div className="flex-1 w-screen h-screen bg-gray-900">
            <div className="justify-center my-auto">
                <div className="flex justify-center">
                    <img
                        className="mt-32" 
                        src={imgLoginLogo} 
                        alt="imgLogo" />
                </div>
                <div className="space-y-3 mt-10">
                    <div className="flex justify-center">
                        <Link to="/choseClass">
                            <button className="bg-blue-600 text-white h-12 w-64 rounded-lg">Cadastro como estudante</button>
                        </Link>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-white text-blue-600 h-12 w-64 rounded-lg">Cadastro como parceiro</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;