import { IsNotEmpty, IsNumber, IsString, IsBoolean, IsDate } from 'class-validator';

export class InvoiceDto {
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
}

