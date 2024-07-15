import { IsNotEmpty, IsNumber, IsString, IsBoolean, IsDate, isDate } from 'class-validator';

export class InvoiceDto {
    @IsNumber()
    id: number;

    @IsString()
    @IsNotEmpty()
    vendorName: string;

    @IsNumber()
    @IsNotEmpty()
    amount: number;

    @IsDate()
    @IsNotEmpty()
    dueDate: Date;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    @IsNotEmpty()
    userId: number;

    @IsBoolean()
    @IsNotEmpty()
    paid: boolean;

    @IsDate()
    @IsNotEmpty()
    createdAt: Date;
}

