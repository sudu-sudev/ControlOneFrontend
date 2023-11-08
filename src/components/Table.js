import React from 'react'
import axios from "axios";
import { useState,useEffect } from 'react'
import { FaSort } from 'react-icons/fa'
import TableData from './TableData'

const Table = () => {
    const [data, setData] = useState([])
    const [order, setOrder] = useState('ASC')

    const sorting = (col) => {
        if (order === 'ASC') {
            const sorted = [...data].sort((a, b) =>
                a.batteryStatus > b.batteryStatus ? 1 : -1
            )
            setData(sorted)
            setOrder('DSC')
        } else {
            const sorted = [...data].sort((a, b) =>
                a.batteryStatus < b.batteryStatus ? 1 : -1
            )
            setData(sorted)
            setOrder('ASC')
        }
    }
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("https://controlonebackend.onrender.com/api/forklifts");
            setData(response.data.filter(activeRobot => activeRobot.status === 'Active'));
          } catch (error) {
            console.error("Error fetching data from server:", error);
          }
        };
        fetchData();
        const interval = setInterval(fetchData, 1000); 
        return () => clearInterval(interval);  
    },[])
    let activeRobots = data.filter(active => active.status === 'Active');

    console.log(activeRobots)
    return (
        <div className="flex shadow border-b mt-2 rounded-xl overflow-x-auto max-h-80 mr-4 ml-4">
            <table className="min-w-full">
                <thead>
                    <tr>
                        <th className="sticky bg-gray-100 top-0 text-left font-medium text-gray-600 uppercase py-3 px-6 border-r-2">
                            Id
                        </th>
                        <th className="sticky bg-gray-100 top-0 text-left font-medium text-gray-600 uppercase py-3 px-6 border-r-2">
                            Robots
                        </th>
                        <th className="sticky bg-gray-100 top-0 text-left font-medium text-gray-600 uppercase py-3 px-6 border-r-2">
                            Steering Status
                        </th>
                        <th className="sticky bg-gray-100 top-0 text-left font-medium text-gray-600 uppercase py-3 px-6 border-r-2">
                            Status
                        </th>
                        <th
                            className="sticky bg-gray-100 top-0 text-left font-medium text-gray-600 uppercase py-3 px-6 border-r-2 cursor-pointer hover:bg-gray-50"
                            onClick={() => sorting('batteryStatus')}
                        >
                            <div className="flex items-center">
                                Battery
                                <span>
                                    <FaSort className="ml-2" />
                                </span>
                            </div>
                        </th>

                        <th className="sticky bg-gray-100 top-0 text-left font-medium text-gray-600 uppercase py-3 px-6 border-r-2">
                            Down Lidar
                        </th>
                        <th className="sticky bg-gray-100 top-0 text-left font-medium text-gray-600 uppercase py-3 px-6 border-r-2">
                            Network strength
                        </th>
                        <th className="sticky bg-gray-100 top-0 text-left font-medium text-gray-600 uppercase py-3 px-6 border-r-2">
                            Access
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-gray-200">
                    {data?.map((activeRobot) => (
                        <TableData data={activeRobot} key={activeRobot.id} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
