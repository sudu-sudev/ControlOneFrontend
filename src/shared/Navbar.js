import React, { useEffect, useState } from 'react'
import { MdDashboardCustomize } from 'react-icons/md'
import { FaRobot, FaUsers } from 'react-icons/fa'
import logo from '../logo.png'
import { Link } from 'react-router-dom'
import { BiLogOut } from 'react-icons/bi'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

const Navbar = () => {
    const [theme, setTheme] = useState(false)
    const element = document.documentElement

    useEffect(() => {
        theme === true
            ? element.classList.add('dark')
            : element.classList.remove('dark')
    })

    return (
        <div
            className={`dark:bg-slate-800 flex flex-col bg-slate-00 text-slate-900 dark:text-white min-h-screen  top-0 left-0 w-2/12 `}
        >
            <div className="flex-1 ">
                <Link to={'/dashboard'}>
                    <div className="flex items-center mt-4 hover:cursor-pointer hover:text-slate-400">
                        <img
                            src={logo}
                            alt="Logo"
                            className={`xl:h-6 xl:w-36 lg:h-6 lg:w-36 h-5 w-16 m-4 xl:ml-6 md:ml-4 sm:ml-2 hover:cursor-pointer md:h-6 md:w-24 sm:h-6 sm:w-16`}
                        />
                    </div>
                </Link>
                <div className="my-6 xl:ml-6 mr-3 md:ml-4 sm:ml-2 font-semibold">
                    <Link to={'/dashboard'}>
                        <div className="xl:flex items-center hover:text-slate-400 hover:cursor-pointer dark:hover:bg-gray-700 hover:bg-slate-100 rounded">
                            <MdDashboardCustomize className="h-7 w-7  m-3  " />
                            <span className="uppercase">Dashboards</span>
                        </div>
                    </Link>

                    <Link to={'/robots'}>
                        <div className="xl:flex  items-center hover:text-slate-400 hover:cursor-pointer dark:hover:bg-gray-700 hover:bg-slate-100 rounded">
                            <FaRobot className="h-7 w-7  m-3 " />
                            <h1 className="uppercase">Robots</h1>
                        </div>
                    </Link>

                    <Link to={'/users'}>
                        <div className="xl:flex  items-center hover:text-slate-400 hover:cursor-pointer dark:hover:bg-gray-700 hover:bg-slate-100 rounded">
                            <FaUsers className="h-7 w-7 m-3 " />
                            <h1 className="uppercase">Users</h1>
                        </div>
                    </Link>
                            <button
                    className="w-full h-8 flex justify-center items-center dark:bg-slate-500 bg-slate-200 dark:text-white  text-black text-xl rounded-full m-1"
                    onClick={() => setTheme(!theme)}
                >
                    {theme === true ? <BsFillSunFill /> : <BsFillMoonFill />}
                </button>
                </div>
            </div>
            <div className="mb-3 flex  justify-center">
                <Link to={'/'}>
                    <button
                        className={` flex mr-4 items-center justify-center border-2 border-red-600 bg-red-600 text-white py-1 px-5 w-40 rounded-md `}
                    >
                        <BiLogOut className="mr-3" />
                        Logout
                    </button>
                </Link>
                <button
                    className="w-8 h-8 flex justify-center items-center dark:bg-slate-500 bg-slate-200 dark:text-white  text-black text-xl rounded-full m-1"
                    onClick={() => setTheme(!theme)}
                >
                    {theme === true ? <BsFillSunFill /> : <BsFillMoonFill />}
                </button>
            </div>
        </div>
    )
}

export default Navbar
