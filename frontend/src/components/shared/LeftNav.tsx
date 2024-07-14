export const LeftNav = () => {
    return (
        <div className='w-60 min-h-full bg-cyan-600 text-white'>
            <div className='py-4 px-8 mt-8 mx-4 bg-white text-center rounded-lg'>
                <a href="" className='text-gray-400 font-extrabold text-2xl'>LOGO</a>
            </div>
            <div className='px-5 mt-5'>Menu</div>
            <ul className='py-6 px-10'>
                <li className='py-2 px-3'>Home</li>
                <li className='py-2 font-semibold text-black'>{'> '} Invoices</li>
                <li className='py-2'>{'> '} Bills</li>
                <li className='py-2'>{'> '} Expenses</li>
                <li className='py-2'>{'> '} Reports</li>
            </ul>
        </div>
    )
}

export default LeftNav