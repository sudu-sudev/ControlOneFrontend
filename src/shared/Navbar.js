import React from 'react'
import { MdDashboardCustomize } from 'react-icons/md'
import { FaRobot } from 'react-icons/fa'
import logo from '../logo.png'
import { Link } from 'react-router-dom'
import { BiLogOut } from 'react-icons/bi'

const Navbar = () => {
    return (
        <div
            className={`bg-gray-800 flex flex-col text-white min-h-screen  top-0 left-0 w-2/12 `}
        >
            <div className="flex-1">
                <Link to={'/dashboard'}>
                    <div className="flex items-center mt-4 hover:cursor-pointer hover:text-slate-400">
                        <img
                            src={logo}
                            alt="Logo"
                            className={`xl:h-6 xl:w-36 lg:h-6 lg:w-36 h-5 w-16 m-4 xl:ml-6 md:ml-4 sm:ml-2 hover:cursor-pointer md:h-6 md:w-24 sm:h-6 sm:w-16`}
                        />
                    </div>
                </Link>
                <div className="my-6 xl:ml-6 md:ml-4 sm:ml-2">
                    <Link to={'/dashboard'}>
                        <div className="xl:flex items-center hover:text-slate-400 hover:cursor-pointer ">
                            <MdDashboardCustomize className="h-6 w-6 m-3  " />
                            <span className="">Dashboards</span>
                        </div>
                    </Link>
                    {/* <MdDashboardCustomize className="h-6 w-6 m-3 hover:cursor-pointer hover:text-slate-400"/> */}

                    <Link to={'/robots'}>
                        <div className="xl:flex  items-center hover:text-slate-400 hover:cursor-pointer ">
                            <FaRobot className="h-6 w-6 m-3 " />
                            <h1>Robots</h1>
                        </div>
                    </Link>
                    {/* <FaRobot className="h-6 w-6 m-3 hover:cursor-pointer hover:text-slate-400"/> */}
                </div>
            </div>
            <div className="mb-3 flex justify-center">
                <Link to={'/'}>
                    <button
                        className={` flex  items-center justify-center border-2 border-red-600 bg-red-600 text-white py-1 px-5 w-40 rounded-md `}
                    >
                        <BiLogOut className="mr-3" />
                        Logout
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
