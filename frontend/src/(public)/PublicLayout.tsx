import { Outlet, Navigate } from "react-router-dom"
import { useAppSelector } from "../lib/StoreHooks"

const PublicLayout = () => {
    const { data } = useAppSelector((state) => state.auth)


    return (
        <>
            {data ? (
                <Navigate to="/invoices" />
            ) : (
                <>
                    <section className="flex flex-1 justify-center items-center flex-col py-10">
                        <Outlet />
                    </section>
                </>
            )}
        </>
    )
}

export default PublicLayout