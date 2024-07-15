import moment from "moment";

interface Props {
    data: Invoice[];
    viewDetails: (data: Invoice) => void;
}

export const Invoices = ({ data, viewDetails }: Props) => {
    return (
        <div className="px-10 py-10 relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Payee Name
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
                                <tr onClick={() => viewDetails(item)} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer">
                                    <td className="px-6 py-4">
                                        {moment(item?.createdAt).format('MM/DD/YYYY')}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item?.vendorName}
                                    </td>
                                    <td className="px-6 py-4">
                                        ${item?.amount}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item?.description}
                                    </td>
                                    <td className="px-6 py-4">
                                        {moment(item?.dueDate).format('MM/DD/YYYY')}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item?.paid ? "Paid" : "Open"}
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