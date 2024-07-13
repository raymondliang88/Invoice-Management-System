
interface Props {
    data: Invoice[];
}

export const Invoices = ({ data }: Props) => {
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Vendor Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Amount
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Due Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((item) => {
                            return (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item?.vendorName}
                                    </th>
                                    <td className="px-6 py-4">
                                        {item?.amount}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item?.description}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item?.dueDate?.toISOString()}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item?.paid ? "PAID" : "PENDING"}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}


export default Invoices