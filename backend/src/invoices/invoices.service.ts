import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { InvoiceEntity } from './entities/invoice.entity';

@Injectable()
export class InvoicesService {

  constructor(private prisma: PrismaService) {

  }

  async findAll(userId: number): Promise<InvoiceEntity[]> {
    return this.prisma.invoice.findMany({ where: { user_id: userId } });
  }

  async findOne(id: number, userId: number): Promise<InvoiceEntity> {
    return this.prisma.invoice.findUnique({ where: { id, user_id: userId } });
  }

  async getTotal(userId: number, dueDate: Date): Promise<number> {
    const invoices = await this.prisma.invoice.findMany({
      where: {
        user_id: userId,
        due_date: {
          equals: new Date(dueDate)
        }
      }
    });
    return invoices.reduce((total, invoice) => total + invoice.amount, 0);
  }

}
