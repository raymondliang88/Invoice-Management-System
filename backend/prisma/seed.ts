import { PrismaClient } from '@prisma/client';
import { generateUserData, generateInvoicesData } from './data'

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {

    //Flush Database 
    await prisma.invoice.deleteMany();
    await prisma.user.deleteMany();

    const userData = await generateUserData()

    // create user
    const user = await prisma.user.create({
        data: userData
    })

    const invoicesData = generateInvoicesData(user.id);

    //create list of invoices
    const invoices = await prisma.invoice.createManyAndReturn({
        data: invoicesData
    })

    console.log('########## SEED DATA STARTS ##########')
    console.log('Print User:')
    console.log(user)

    console.log('Print Invoices:')
    console.log(invoices)
    console.log('########## SEED DATA ENDS ##########')

}

// execute the main function
main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        // close Prisma Client at the end
        await prisma.$disconnect();
    });
