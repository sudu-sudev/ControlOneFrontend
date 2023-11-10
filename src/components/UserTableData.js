import React from 'react'

const UserTableData = ({ data }) => {
    return (
        <tr className="border-b dark:border-b-gray-300 hover:bg-gray-100">
            <td className="text-center px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-600 font-semibold uppercase">
                    {data.id}
                </div>
            </td>
            <td className="text-center px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-600 font-semibold uppercase">
                    {data.name}
                </div>
            </td>
            <td className="text-center px-6 py-4 whitespace-nowrap">
                <div
                    className={`text-sm ${
                        data.status === 'active'
                            ? 'text-green-500'
                            : 'text-red-600'
                    } font-semibold uppercase`}
                >
                    {data.status}
                </div>
            </td>
            <td className="text-center px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-600 font-semibold uppercase">
                    {data.tasksCompleted}
                </div>
            </td>
            <td className="text-center px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-600 font-semibold uppercase">
                    {data.tasksPending}
                </div>
            </td>
        </tr>
    )
}

export default UserTableData
