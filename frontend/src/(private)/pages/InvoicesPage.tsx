import { useAppDispatch, useAppSelector } from "../../lib/StoreHooks"
import Invoices from "../../components/Invoices"
import { useEffect } from "react"
import { getInvoicesData } from "../../store/actions/InvoicesActions"

const InvoicesPage = () => {
    const { data } = useAppSelector((state) => state.invoices)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getInvoicesData({}))
    }, [])
    return (
        <Invoices data={data} />
    )
}

export default InvoicesPage