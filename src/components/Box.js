import React from 'react'

const Box = ({ title, icon, completed, height, width, xl, flex }) => {
    return (
        <div
            className={`h-${height} w-${width}  xl:w-${xl}  dark:bg-gray-800 shadow-xl rounded-xl dark:hover:bg-slate-700 hover:scale-100 transition ease-in-out delay-0 bg-white hover:bg-gray-200 `}
        >
            <div className="p-5 text-black dark:text-white font-semibold ">
                <div className={`flex ${flex} justify-between`}>
                    <div>{icon}</div>
                    <div>
                        <h1 className="m-4">{title}</h1>
                        <h2 className="m-4 ">{completed}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Box
