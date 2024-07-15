import { ApiProperty } from "@nestjs/swagger";
import { Invoice } from "@prisma/client";
import { InvoiceDto } from "../dto/invoice.dto";

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
    @ApiProperty()
    createdAt: Date
    @ApiProperty()
    updatedAt: Date

    static toEntityFromDTO(invoiceDTO: InvoiceDto): InvoiceEntity {
        const invoiceEnity = new InvoiceEntity();

        if (invoiceDTO) {
            invoiceEnity.id = invoiceDTO.id;
            invoiceEnity.amount = invoiceDTO.amount
            invoiceEnity.description = invoiceDTO.description
            invoiceEnity.due_date = invoiceDTO.dueDate
            invoiceEnity.paid = invoiceDTO.paid
            invoiceEnity.user_id = invoiceDTO.userId
            invoiceEnity.vendor_name = invoiceDTO.vendorName
            invoiceEnity.createdAt = invoiceDTO.createdAt
        }

        return invoiceEnity
    }

    static toEntitiesFromDTOs(invoiceDTOs: InvoiceDto[] = []): InvoiceEntity[] {
        const invoiceEntities: InvoiceEntity[] = []

        invoiceDTOs.map((invoiceDTO) => {
            const entity = this.toEntityFromDTO(invoiceDTO)
            invoiceEntities.push(entity)
        })

        return invoiceEntities
    }

    static toDTOFromEntity(invoiceEntity: InvoiceEntity): InvoiceDto {
        const invoiceDTO = new InvoiceDto();

        if (invoiceEntity) {
            invoiceDTO.id = invoiceEntity.id
            invoiceDTO.amount = invoiceEntity.amount
            invoiceDTO.description = invoiceEntity.description
            invoiceDTO.dueDate = invoiceEntity.due_date
            invoiceDTO.paid = invoiceEntity.paid
            invoiceDTO.userId = invoiceEntity.user_id
            invoiceDTO.vendorName = invoiceEntity.vendor_name
            invoiceDTO.createdAt = invoiceEntity.createdAt
        }

        return invoiceDTO
    }

    static toDTOsFromEntities(invoiceEntities: InvoiceEntity[] = []): InvoiceDto[] {
        const invoiceDTOs: InvoiceDto[] = []

        invoiceEntities.map((invoiceEntity) => {
            const entity = this.toDTOFromEntity(invoiceEntity)
            invoiceDTOs.push(entity)
        })

        return invoiceDTOs
    }
}
