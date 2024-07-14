import { useAppDispatch, useAppSelector } from "../../lib/StoreHooks"
import Invoices from "../../components/Invoices"
import { useEffect } from "react"
import { getInvoicesData } from "../../store/actions/InvoicesActions"

const InvoicesPage = () => {
    const { data } = useAppSelector((state) => state.invoices)
    const dispatch = useAppDispatch()

    const sampleData: Invoice[] = [
        {
            vendorName: 'test',
            amount: 111.11,
            description: 'test 122',
            dueDate: new Date(),
            paid: true,
            id: 1,
            userId: 1,
        },
        {
            vendorName: 'test',
            amount: 111.11,
            description: 'test 122',
            dueDate: new Date(),
            paid: true,
            id: 1,
            userId: 1,
        },
        {
            vendorName: 'test',
            amount: 111.11,
            description: 'test 122',
            dueDate: new Date(),
            paid: true,
            id: 1,
            userId: 1,
        },
        {
            vendorName: 'test',
            amount: 111.11,
            description: 'test 122',
            dueDate: new Date(),
            paid: true,
            id: 1,
            userId: 1,
        },
        {
            vendorName: 'test',
            amount: 111.11,
            description: 'test 122',
            dueDate: new Date(),
            paid: true,
            id: 1,
            userId: 1,
        },
        {
            vendorName: 'test',
            amount: 111.11,
            description: 'test 122',
            dueDate: new Date(),
            paid: true,
            id: 1,
            userId: 1,
        },
        {
            vendorName: 'test',
            amount: 111.11,
            description: 'test 122',
            dueDate: new Date(),
            paid: true,
            id: 1,
            userId: 1,
        },
        {
            vendorName: 'test',
            amount: 111.11,
            description: 'test 122',
            dueDate: new Date(),
            paid: true,
            id: 1,
            userId: 1,
        },
        {
            vendorName: 'test',
            amount: 111.11,
            description: 'test 122',
            dueDate: new Date(),
            paid: true,
            id: 1,
            userId: 1,
        },
        {
            vendorName: 'test',
            amount: 111.11,
            description: 'test 122',
            dueDate: new Date(),
            paid: true,
            id: 1,
            userId: 1,
        }
    ]

    useEffect(() => {
        dispatch(getInvoicesData({}))
    }, [])
    return (
        <Invoices data={sampleData} />
    )
}

export default InvoicesPage