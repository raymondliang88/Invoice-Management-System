export const Header = () => {
    return (
        <div className="px-4 pb-5 pt-7 ring-1 ring-zinc-950/5 dark:ring-white/5">
            <div className="mx-auto flex items-center justify-between px-2 sm:px-4 lg:max-w-7xl">
                <div className="flex items-center gap-2 sm:gap-4">
                    <a aria-label="Home" href="/">
                        Invoice Management System
                    </a>
                </div>
                <div className="flex items-center gap-4 sm:gap-8">
                    <a
                        className="text-sm/6 font-medium text-zinc-700 outline-blue-500 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
                        href="#"
                    >
                        Link 1
                    </a>
                    <a
                        className="text-sm/6 font-medium text-zinc-700 outline-blue-500 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
                        href="#"
                    >
                        Link 2
                    </a>
                    <a
                        className="text-sm/6 font-medium text-zinc-700 outline-blue-500 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
                        href="#"
                    >
                        Link 2
                    </a>
                    <button
                        type="button"
                        className="inline-flex text-zinc-300 outline-blue-500 hover:text-zinc-400 dark:text-zinc-500 dark:hover:text-zinc-400"
                    >
                        Welcome back, Raymond
                    </button>
                </div>
            </div>
        </div>
    )
}
