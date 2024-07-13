import { Outlet, Navigate } from "react-router-dom"

const PrivateLayout = () => {
    const isAuthenticate = true;

    return (
        <>
            {!isAuthenticate ? (
                <Navigate to="/" />
            ) : (
                <>
                    <section className="flex flex-1 justify-center items-center flex-col py-10">
                        private
                        <Outlet />
                    </section>
                </>
            )}
        </>
    )
}

export default PrivateLayout