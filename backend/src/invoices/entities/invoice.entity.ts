import { ApiProperty } from "@nestjs/swagger";
import { Invoice } from "@prisma/client";

export class InvoiceEntity implements Invoice {
    @ApiProperty()
    vendor_name: string;
    @ApiProperty()
    amount: number;
    @ApiProperty()
    due_date: Date;
    @ApiProperty()
    description: string;
    @ApiProperty()
    user_id: number;
    @ApiProperty()
    id: number;
    @ApiProperty()
    paid: boolean
}
