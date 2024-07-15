import { IsNotEmpty, IsNumber, IsString, IsBoolean, IsDate, MinLength } from 'class-validator';

export class InvoiceDto {
    @IsNumber()
    id: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
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

