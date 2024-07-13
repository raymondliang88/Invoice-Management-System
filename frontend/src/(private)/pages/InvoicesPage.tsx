import { useAppDispatch, useAppSelector } from "../../lib/StoreHooks"
import Invoices from "../../components/Invoices"
import { useEffect } from "react"

const InvoicesPage = () => {
    const { data } = useAppSelector((state) => state.invoices)
    const dispatch = useAppDispatch()

    useEffect(() => {

    })
    return (
        <Invoices data={data} />
    )
}

export default InvoicesPage