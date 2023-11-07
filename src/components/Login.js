import React from 'react'
// import Forklift from '../fl2.png'
import logo from '../logo.png'
import { MdAccountCircle } from 'react-icons/md'
import { BiLogIn } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import fork from '../fork.png'
// import fork from '../forkliftimg.png'

const Login = () => {
    return (
        <div className="bg-slate-600 flex justify-center items-center h-screen flex-col">
            <img
                src={fork}
                alt=""
                className="absolute opacity-75 min-w-full h-screen"
            ></img>
            <img src={logo} alt="" className="w-44 h-12 mb-3 relative"></img>
            <div className="bg-gray-500 bg-opacity-90 w-96 p-6 rounded-xl shadow-2xl relative">
                <h1 className="text-3xl block text-center font-semibold">
                    <div className="flex items-center justify-center text-white">
                        <MdAccountCircle className="mr-3 mt-1" />
                        Login
                    </div>
                </h1>
                <hr className="mt-3" />
                <div className="mt-3">
                    <label
                        for="Username"
                        className="block text-base mb-2 text-white"
                    >
                        Username
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Username"
                        className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-700 rounded-md"
                    ></input>
                </div>
                <div className="mt-3">
                    <label
                        for="Username"
                        className="block text-base mb-2 text-white"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-700 rounded-md"
                    ></input>
                </div>
                <div className="mt-3 flex justify-end">
                    <a href="/" className="text-indigo-800 font-semibold">
                        {' '}
                        Forgot Password?
                    </a>
                </div>
                <div className="mt-5">
                    <Link to={'/dashboard'}>
                        <button
                            className={` flex items-center justify-center border-2 border-indigo-700 bg-indigo-700 text-white py-1 px-5 w-full rounded-md `}
                        >
                            <BiLogIn className="mr-3" />
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login
