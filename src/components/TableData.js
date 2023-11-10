import React from 'react'
import { Link } from 'react-router-dom'

const TableData = ({ data }) => {
    return (
        <tr className="hover:bg-gray-100 border-b dark:border-b-gray-300">
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-600 font-semibold">
                    {data.id}
                </div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-600 font-semibold">
                    {data.MachineName}
                </div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-600 font-semibold">
                    {data.downLidar}
                </div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-600 font-semibold">
                    {data.status}
                </div>
            </td>
            {data.batteryStatus > 30 ? (
                <td className="text-left px-6 py-4 whitespace-nowrap ">
                    <div className="text-sm text-green-600 font-semibold">
                        {data.batteryStatus}%
                    </div>
                </td>
            ) : (
                <td className="text-left px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-red-600 font-semibold">
                        {data.batteryStatus}%
                    </div>
                </td>
            )}
            {/* <td className='text-left px-6 py-4 whitespace-nowrap'>
                <div className='text-sm text-gray-600 font-semibold'>{data.Battery}%</div>
            </td> */}
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-600 font-semibold">
                    {data.IPAddress}
                </div>
            </td>
            {data.networkStrength === 'Strong' ? (
                <td className="text-left px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-green-600 font-semibold">
                        {data.networkStrength} ms
                    </div>
                </td>
            ) : data.networkStrength === 'Medium' ?(
                <td className="text-left px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-orange-400 font-semibold">
                        {data.networkStrength} ms
                    </div>
                </td>
            ) : (
                <td className="text-left px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-red-600 font-semibold">
                        {data.networkStrength} ms
                    </div>
                </td>
            )}

            {/* <td className='text-left px-6 py-4 whitespace-nowrap'>
                <div className='text-sm text-gray-600 font-semibold'>{data.WiFi}</div>
            </td> */}
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-blue-600 font-semibold cursor-pointer hover:text-blue-400">
                    <Link to={'/forklift'}>details</Link>
                </div>
            </td>
        </tr>
    )
}

export default TableData
