import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, NotFoundException } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { User } from 'src/users/user.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { InvoiceEntity } from './entities/invoice.entity';

@Controller('invoices')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('JWT')
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) { }

  @Get()
  @ApiOkResponse({ type: InvoiceEntity, isArray: true })
  async findAll(@User('id') userId: number) {
    return this.invoicesService.findAll(userId);
  }

  @Get('/total')
  @ApiOkResponse({ type: Number })
  async getTotal(@Param('due_date') due_date: Date, @User('id') userId: number) {
    return this.invoicesService.getTotal(userId);
  }

  @Get(':id')
  @ApiOkResponse({ type: InvoiceEntity })
  async findOne(@Param('id') id: number, @User('id') userId: number) {
    const invoice = await this.invoicesService.findOne(Number(id), userId);

    if (!invoice) {
      throw new NotFoundException;
    }
    return this.invoicesService.findOne(Number(id), userId);
  }

}
