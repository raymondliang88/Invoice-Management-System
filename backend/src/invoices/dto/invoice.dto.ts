import { IsNotEmpty, IsNumber, IsString, IsBoolean, IsDate } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateInvoiceDto {
    @IsString()
    @IsNotEmpty()
    vendor_name: string;

    @IsNumber()
    @IsNotEmpty()
    amount: number;

    @IsDate()
    @IsNotEmpty()
    due_date: Date;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    @IsNotEmpty()
    user_id: number;

    @IsBoolean()
    @IsNotEmpty()
    paid: boolean;
}

export class UpdateInvoiceDto extends PartialType(CreateInvoiceDto) { }