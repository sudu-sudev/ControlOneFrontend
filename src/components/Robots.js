import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { FaSort } from 'react-icons/fa'
import TableData from './TableData'
import { AiOutlineSearch } from 'react-icons/ai'

const Robots = () => {
    const [data, setData] = useState([])
    const [order, setOrder] = useState('ASC')
    const [search, setSearch] = useState('')

    const sorting = (col) => {
        if (order === 'ASC') {
            const sorted = [...data].sort((a, b) =>
                a.Battery > b.Battery ? 1 : -1
            )
            setData(sorted)
            setOrder('DSC')
        } else {
            const sorted = [...data].sort((a, b) =>
                a.Battery < b.Battery ? 1 : -1
            )
            setData(sorted)
            setOrder('ASC')
        }
    }
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("https://controlonebackend.onrender.com/api/forklifts");
            setData(response.data);
          } catch (error) {
            console.error("Error fetching data from server:", error);
          }
        };
        fetchData();
        const interval = setInterval(fetchData, 1000); 
        return () => clearInterval(interval); 
    },[])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    console.log(data);

    const filteredData = data?.filter((robot) =>
        robot.MachineName.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="bg-slate-600  h-screen">
            <div className="p-5 text-white  font font-semibold flex justify-between">
                <div className="text-orange-400 font-bold text-3xl">
                    All Robots
                </div>
                <div className="flex items-center">
                    <AiOutlineSearch className="absolute text-gray-500 h-6 w-6 pl-2" />
                    <input
                        className="text-black h-7  rounded-lg border text-base px-3 pl-7 py-1 focus:outline-none focus:ring-0 focus:border-gray-700"
                        type="text"
                        placeholder="Search by Name"
                        onChange={handleChange}
                    ></input>
                </div>
            </div>

            <div className="flex shadow border-b mt-2 rounded-xl overflow-hidden mr-4 ml-4 ">
                <table className="min-w-full ">
                    <thead className="bg-gray-100 ">
                        <tr>
                            <th className="text-left font-medium   text-gray-600 uppercase py-3 px-6 border-r-2">
                                Id
                            </th>
                            <th className="text-left font-medium text-gray-600 uppercase py-3 px-6 border-r-2">
                                Robots
                            </th>
                            <th className="text-left font-medium text-gray-600 uppercase py-3 px-6 border-r-2">
                                DownLidar
                            </th>
                            <th className="text-left font-medium text-gray-600 uppercase py-3 px-6 border-r-2">
                                Status
                            </th>
                            <th
                                className="text-left font-medium text-gray-600 uppercase py-3 px-6 border-r-2 cursor-pointer hover:bg-gray-50"
                                onClick={() => sorting('Battery')}
                            >
                                <div className="flex items-center">
                                    Battery
                                    <span>
                                        <FaSort className="ml-2" />
                                    </span>
                                </div>
                            </th>

                            <th className="text-left font-medium text-gray-600 uppercase py-3 px-6 border-r-2">
                                Ip Address
                            </th>
                            <th className="text-left font-medium text-gray-600 uppercase py-3 px-6 border-r-2">
                                Network strength
                            </th>
                            <th className="text-left font-medium text-gray-600 uppercase py-3 px-6 border-r-2">
                                Access
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-200">
                        {filteredData?.map((activeRobot) => (
                            <TableData
                                data={activeRobot}
                                key={activeRobot.id}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Robots
