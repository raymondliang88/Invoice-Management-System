import { Outlet, Navigate } from "react-router-dom"
import { Header } from "../components/shared/Header";
import { useAppSelector } from "../lib/StoreHooks";
import LeftNav from "../components/shared/LeftNav";

const PrivateLayout = () => {
    const { data } = useAppSelector((state) => state.auth)

    return (
        <>
            {!data ? (
                <Navigate to="/login" />
            ) : (
                <>
                    <div className="flex flex-row">
                        <LeftNav />
                        <section className="h-full w-full">
                            <Header />
                            <Outlet></Outlet>
                        </section>
                    </div>
                </>
            )}
        </>
    )
}

export default PrivateLayout