import React from 'react'
import { BiSolidDownload } from 'react-icons/bi'
import Box from './Box'
import Table from './Table'
import { Link } from 'react-router-dom'
import { MdForklift } from 'react-icons/md'
import { BiTask } from 'react-icons/bi'
import { BiTaskX } from 'react-icons/bi'
import { VscVmActive } from 'react-icons/vsc'

const Dashboard = () => {
    return (
        <div className="container flex flex-1">
            <div className="flex-grow flex flex-col">
                <div className="bg-slate-600 min-h-screen">
                    <div className="flex justify-between p-4">
                        <div className="font-semibold uppercase">
                            <h1 className="text-3xl text-orange-400 font-bold">
                                Jigani warehouse dashboard
                            </h1>
                            <h3 className="text-white">
                                Welcome to Control one Dashboard
                            </h3>
                        </div>
                        <div className="flex bg-blue-800 text-white p-4  h-10 rounded-md hover:bg-blue-700">
                            <button className="flex items-center">
                                <BiSolidDownload className="mr-2" />
                                Download Reports
                            </button>
                        </div>
                    </div>
                    <div className="p-2 pt-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        <Link to={'/robots'}>
                            <Box
                                title={'Total Machines'}
                                icon={
                                    <MdForklift className="h-5 w-5 m-4 text-yellow-600" />
                                }
                                completed={'8'}
                                height={'96'}
                                width={'60'}
                                xl={'64'}
                            />
                        </Link>
                        <Box
                            title={'Active Machine'}
                            icon={
                                <VscVmActive className="h-5 w-5 m-4 text-yellow-600" />
                            }
                            completed={'5'}
                            height={'40'}
                            width={'60'}
                            xl={'64'}
                        />
                        <Box
                            title={'Tasks completed'}
                            icon={
                                <BiTask className="h-5 w-5 m-4 text-yellow-600" />
                            }
                            completed={'15'}
                            height={'40'}
                            width={'60'}
                            xl={'64'}
                        />
                        <Box
                            title={'Tasks Remaining'}
                            icon={
                                <BiTaskX className="h-5 w-5 m-4 text-yellow-600" />
                            }
                            completed={'6'}
                            height={'40'}
                            width={'60'}
                            xl={'64'}
                        />
                    </div>
                    <div>
                        <h1 className="p-4 text-orange-400 font-bold uppercase">
                            Active Robots
                        </h1>
                        <Table />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
