interface Invoice {
    id: number;
    vendorName: string;
    amount: number;
    dueDate: Date;
    description: string;
    userId: number;
    paid: boolean;
    createdAt: Date;
}