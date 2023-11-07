import React from 'react'

const Box = ({ title, icon, completed, height, width, xl }) => {
    return (
        <div
            className={`h-${height} w-${width}  xl:w-${xl}  bg-slate-800 shadow-xl rounded-xl hover:bg-slate-700`}
        >
            <div className="p-5 text-white">
                <div className="">
                    {icon}
                    <h1 className="m-4">{title}</h1>
                    <h2 className="m-4 ">{completed}</h2>
                </div>
            </div>
        </div>
    )
}

export default Box
