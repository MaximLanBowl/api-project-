import { Controller, Get, Param } from '@nestjs/common';
import { CosmosService } from './cosmos.service';
import { ValidateBlockHeightPipe } from '../pipes/validate-block-height.pipe';
import { ValidateTransactionHashPipe } from '../pipes/validate-transaction-hash.pipe';

@Controller('cosmos')
export class CosmosController {
  constructor(private readonly cosmosService: CosmosService) {}

  @Get('block/:height')
  async getBlock(@Param('height', ValidateBlockHeightPipe) height: string) {
    return this.cosmosService.getBlock(height);
  }

  @Get('transactions/:hash')
  async getTransaction(@Param('hash', ValidateTransactionHashPipe) hash: string) {
    return this.cosmosService.getTransaction(hash);
  }
}