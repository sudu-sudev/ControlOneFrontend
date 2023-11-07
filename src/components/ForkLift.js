import React from 'react'
import forklift from '../fl2.png'
import { BiSolidDownload } from 'react-icons/bi'
import { VscDebugStart } from 'react-icons/vsc'
import Box from './Box'
import { VscVmActive } from 'react-icons/vsc'

const ForkLift = () => {
    return (
        <div className="container flex flex-col  min-w-full min-h-screen bg-slate-600">
            <div>
                <div className="flex justify-between p-4">
                    <div className="flex">
                        <h1 className="text-orange-400 font-semibold text-3xl">
                            Forklift Details
                        </h1>
                    </div>

                    <div className="flex bg-blue-800 text-white p-4  h-10 rounded hover:bg-blue-700">
                        <button className="flex items-center">
                            <BiSolidDownload className="mr-2" />
                            Download Reports
                        </button>
                    </div>
                </div>

                <div className="md:flex lg:flex xl:flex sm:flex 2xl:flex ">
                    <div className="">
                        <img src={forklift} alt="" className="h-60 w-80"></img>
                    </div>
                    <div className="p-4 pt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                        <Box
                            title={'Forklift Id'}
                            icon={
                                <VscVmActive className="h-5 w-5 m-4 text-yellow-600" />
                            }
                            completed={1}
                            height={36}
                            width={36}
                            xl={64}
                        />
                        <Box
                            title={'Experience'}
                            icon={
                                <VscVmActive className="h-5 w-5 m-4 text-yellow-600" />
                            }
                            completed={100}
                            height={36}
                            width={36}
                            xl={64}
                        />
                        <Box
                            title={'Experience'}
                            icon={
                                <VscVmActive className="h-5 w-5 m-4 text-yellow-600" />
                            }
                            completed={100}
                            height={36}
                            width={36}
                            xl={64}
                        />
                        <Box
                            title={'Experience'}
                            icon={
                                <VscVmActive className="h-5 w-5 m-4 text-yellow-600" />
                            }
                            completed={100}
                            height={36}
                            width={36}
                            xl={64}
                        />
                        <Box
                            title={'Experience'}
                            icon={
                                <VscVmActive className="h-5 w-5 m-4 text-yellow-600" />
                            }
                            completed={100}
                            height={36}
                            width={36}
                            xl={64}
                        />
                        <Box
                            title={'Experience'}
                            icon={
                                <VscVmActive className="h-5 w-5 m-4 text-yellow-600" />
                            }
                            completed={100}
                            height={36}
                            width={36}
                            xl={64}
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-auto mb-auto">
                <div className="flex bg-orange-400 justify-center items-center p-4 w-36 h-14 rounded-md hover:bg-orange-300">
                    <button className="flex items-center">
                        <VscDebugStart className="mr-4" />
                        Start
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ForkLift
