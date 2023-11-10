import React, { useState } from 'react'
import { UsersData } from '../data/UsersData'
import UserTableData from './UserTableData'
import { AiOutlineSearch } from 'react-icons/ai'

const Users = () => {
    const [search, setSearch] = useState('')

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const filteredData = UsersData.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    )
    return (
        <div className="dark:bg-slate-600 bg-stone-100 h-screen min-w-full">
        <div className="p-5 text-white  font font-semibold flex justify-between">
            <div className="text-orange-400 font-bold text-3xl">
                Users Data
            </div>
            <div className="flex items-center">
                <AiOutlineSearch className="absolute text-gray-500 h-6 w-6 pl-2" />
                <input
                    className="text-black h-9  rounded-lg border text-base px-3 pl-7 py-1 focus:outline-none focus:ring-0 focus:border-gray-700"
                    type="text"
                    placeholder="Search by Name"
                    onChange={handleChange}
                ></input>
            </div>
        </div>
        <div className="flex shadow-2xl border-b rounded-xl overflow-x-auto max-h-96 mr-4 ml-4 mt-2">
            <table className="min-w-full ">
                <thead className=" ">
                    <tr>
                        <th className="sticky bg-gray-200 dark:bg-white top-0 text-center font-medium text-gray-600 uppercase py-3 px- border-r-2">
                            Id
                        </th>
                        <th className="sticky bg-gray-200 dark:bg-white top-0 text-center font-medium text-gray-600 uppercase py-3 px-6 border-r-2">
                            Name
                        </th>
                        <th className="sticky bg-gray-200 dark:bg-white top-0 text-center font-medium text-gray-600 uppercase py-3 px-6 border-r-2">
                            Status
                        </th>
                        <th className="sticky bg-gray-200 dark:bg-white top-0 text-center font-medium text-gray-600 uppercase py-3 px-6 border-r-2">
                            Tasks Completed
                        </th>
                        <th className="sticky bg-gray-200 dark:bg-white top-0 text-center font-medium text-gray-600 uppercase py-3 px-6 border-r-2">
                            Taske Pending
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-200">
                    {filteredData?.map((user) => (
                        <UserTableData data={user} key={UsersData.id} />
                    ))}
                </tbody>
            </table>
        </div>
    </div>
)
}

export default Users
