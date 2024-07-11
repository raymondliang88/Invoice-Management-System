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
            vendor_name: 'Vendor 1',
            amount: 111.99,
            due_date: new Date('06-01-2024').toISOString(),
            description: 'This is vendor 1',
            user_id: userId,
        },
        {
            vendor_name: 'Vendor 2',
            amount: 555.99,
            due_date: new Date('06-02-2024').toISOString(),
            description: 'This is vendor 2',
            user_id: userId,
        }
    ]
}