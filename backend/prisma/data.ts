const bcrypt = require('bcrypt');

const saltRounds = 10;
const myPlaintextPassword = 'admin';

const generateHashPassword = async () => {
    try {
        const hash = await bcrypt.hash(myPlaintextPassword, saltRounds);
        return hash
    } catch (err) {
        throw err;
    }
}

export const generateUserData = async () => {
    const hashPassword = await generateHashPassword();
    return {
        email: 'admin@altametrics.com',
        password: hashPassword,
        name: "Super Admin"
    }
}


export const generateInvoicesData = (userId) => {
    return [
        {
            vendor_name: 'Amazon',
            amount: null,
            due_date: new Date('06-30-2024').toISOString(),
            description: 'Rental',
            user_id: userId,
            paid: true,
        },
        {
            vendor_name: 'Sysco',
            amount: 228.75,
            due_date: new Date('06-30-2024').toISOString(),
            description: 'Rental',
            user_id: userId,
            paid: false,
        },
        {
            vendor_name: 'US Foods',
            amount: null,
            due_date: new Date('06-30-2024').toISOString(),
            description: 'Rental',
            user_id: userId,
            paid: true,
        },
        {
            vendor_name: 'Rental Inc',
            amount: null,
            due_date: new Date('06-30-2024').toISOString(),
            description: 'Rental',
            user_id: userId,
            paid: true,
        },
        {
            vendor_name: 'Fiber Optics',
            amount: 150.00,
            due_date: new Date('06-30-2024').toISOString(),
            description: 'Rental',
            user_id: userId,
            paid: false,
        },
        {
            vendor_name: 'Ikea',
            amount: null,
            due_date: new Date('06-30-2024').toISOString(),
            description: 'Rental',
            user_id: userId,
            paid: true,
        },
        {
            vendor_name: 'Costco',
            amount: null,
            due_date: new Date('06-30-2024').toISOString(),
            description: 'Rental',
            user_id: userId,
            paid: true,
        },
        {
            vendor_name: 'Office Depot',
            amount: null,
            due_date: new Date('06-30-2024').toISOString(),
            description: 'Rental',
            user_id: userId,
            paid: true,
        },
        {
            vendor_name: 'Sysco',
            amount: 350.00,
            due_date: new Date('06-30-2024').toISOString(),
            description: 'Rental',
            user_id: userId,
            paid: false,
        }
    ]
}