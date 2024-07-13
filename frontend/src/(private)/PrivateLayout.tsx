import { Outlet, Navigate } from "react-router-dom"
import { Header } from "~/components/shared/Header";

const PrivateLayout = () => {
    const isAuthenticate = true;

    return (
        <>
            {!isAuthenticate ? (
                <Navigate to="/" />
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