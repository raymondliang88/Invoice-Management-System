import { Outlet, Navigate } from "react-router-dom"
import { Header } from "~/components/shared/Header";
import { useAppSelector } from "~/lib/StoreHooks";

const PrivateLayout = () => {
    const { data } = useAppSelector((state) => state.auth)

    return (
        <>
            {!data ? (
                <Navigate to="/login" />
            ) : (
                <>
                    <section className="">
                        <Header />
                        <Outlet />
                    </section>
                </>
            )}
        </>
    )
}

export default PrivateLayout