import { useAppSelector } from "../../lib/StoreHooks"

export const Header = () => {
    const { data } = useAppSelector((state) => state.auth)
    return (
        <div className="px-4 pb-5 pt-7 ring-1 ring-zinc-950/5 dark:ring-white/5">
            <div className="mx-auto flex items-center justify-between px-2 sm:px-4 lg:max-w-7xl">
                <div className="flex items-center gap-2 sm:gap-4">
                    <a aria-label="Home" href="/">
                        Home / Invoices
                    </a>
                </div>
                <div className="flex items-center gap-4 sm:gap-8">
                    <form className="w-3xl max-w-3xl mx-auto">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>
                    <button
                        type="button"
                        className="inline-flex text-zinc-300 outline-blue-500 hover:text-zinc-400 dark:text-zinc-500 dark:hover:text-zinc-400"
                    >
                        Welcome back, {data?.name}
                    </button>
                </div>
            </div>
        </div>
    )
}
